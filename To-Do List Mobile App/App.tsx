import React, { useState } from 'react';
import { KeyriSDK } from 'react-native-keyri-sdk';
import HomeScreen from './src/screens/HomeScreen';
import { ScreenName } from './src/navigation';
import { useEffect } from 'react';
import { UserData } from './src/models';
import TodoListScreen from './src/screens/TodoListScreen';
import axios from 'axios';
import KeyriScreen from './src/screens/KeyriScreen';

const App = () => {
  const [route, navigate] = useState<ScreenName>('home');
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    KeyriSDK.init({
      id: '5ef32caaaccd766719387f07',
      name: 'Keyri Service Manager',
      callbackUrl: 'http://18.234.201.114:5000/users/session-mobile',
      logo: 'https://users-images-keyri.s3.amazonaws.com/serviceLogo/logo-c5518e8f40d7b09d8e7d30282ac8c603.png',
    });

    KeyriSDK.onUserLoggedIn((user: UserData) => {
      setUser(user);
      axios.defaults.headers.Authorization = `Bearer ${user.token}`;
    });
  }, []);

  switch (route) {
    case 'home':
      return <HomeScreen navigate={navigate} user={user} onLogoutPress={() => setUser(null)} />;
    case 'keyri':
      return <KeyriScreen navigate={navigate} />;
    case 'todoList':
      return <TodoListScreen navigate={navigate} />;
    default:
      return null;
  }
};

export default App;
