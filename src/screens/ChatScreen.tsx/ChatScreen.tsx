import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';

interface ChatScreenProps {}

const ChatScreen: FunctionComponent<ChatScreenProps> = ({}) => {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Text>Chat</Text>
    </SafeAreaView>
  );
};
export default ChatScreen;
const styles = StyleSheet.create({});
