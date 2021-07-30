import React, { FC } from 'react';
import { ActionSheetIOS } from 'react-native';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { KeyriSDK } from 'react-native-keyri-sdk';
import { UserData } from '../models';
import { Navigate } from '../navigation';

interface HomeScreenProps {
  navigate: Navigate;
  user: UserData | null;
  onLogoutPress: () => void;
}

type User = {
  serviceId: string;
  userId: string;
  username: string;
};

const HomeScreen: FC<HomeScreenProps> = ({ navigate, user, onLogoutPress }) => {
  const handleSignInPress = () => {
    const users: User[] = KeyriSDK.getAccountList();
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', ...users.map((item) => item.username)],
        cancelButtonIndex: 0,
      },
      (index) => index && KeyriSDK.signIn(users[index - 1].userId),
    );
  };

  const handleSignUpPress = () => {
    Alert.prompt('Sign Up', 'Enter username', (username) => {
      if (username) KeyriSDK.signUp(username);
    });
  };

  const handleDesktopPress = () => {
    navigate('keyri');
  };

  const handleTodoListPress = () => {
    navigate('todoList');
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={styles.title}>Keyri Example</Text>
        <Text style={styles.authStatus}>
          {user ? `Authorized as ${user.user.name}` : 'Unauthorized'}
        </Text>
      </View>
      <View style={styles.container}>
        <Button title="Mobile sign in" onPress={handleSignInPress} />
        <Button title="Mobile sign up" onPress={handleSignUpPress} />
        <Button title="Desktop auth" onPress={handleDesktopPress} />
        <Button disabled={!user} title="ToDo list" onPress={handleTodoListPress} />
        <Button disabled={!user} title="Log out" onPress={onLogoutPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
  },
  authStatus: {
    textAlign: 'center',
  },
});

export default HomeScreen;
