import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatListScreen from '../screens/Chat/ChatListScreen.tsx/ChatListScreen';
import ChatScreen from '../screens/Chat/ChatScreen.tsx/ChatScreen';

export type ChatStackParams = {
  ChatListScreen: undefined;
  ChatScreen: undefined;
};

const ChatStack = createNativeStackNavigator<ChatStackParams>();

const ChatStackNav = () => {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Group>
        <ChatStack.Screen name='ChatListScreen' component={ChatListScreen} />
        <ChatStack.Screen name='ChatScreen' component={ChatScreen} />
      </ChatStack.Group>
    </ChatStack.Navigator>
  );
};

export default ChatStackNav;
