import React from 'react';
import { FC } from 'react';
import KeyriSdkScreen from 'react-native-keyri-sdk';
import { Button, SafeAreaView, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Navigate } from '../navigation';

interface KeyriScreenProps {
  navigate: Navigate;
}

const KeyriScreen: FC<KeyriScreenProps> = ({ navigate }) => {
  return (
    <View style={styles.root}>
      <KeyriSdkScreen />
      <SafeAreaView>
        <Button title="Go back" onPress={() => navigate('home')} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default KeyriScreen;
