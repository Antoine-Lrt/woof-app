import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChatStackParams } from '../../../Navigation/ChatStackNav';

interface ChatScreenProps {}

const ChatScreen: FunctionComponent<ChatScreenProps> = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ChatStackParams>>();

  const onChatListScreen = () => {
    navigation.navigate('ChatListScreen');
    console.log('Go to ChatListScreen');
  };

  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style='auto' />
      <Text>Chat Screen</Text>
      <Text style={{ color: 'blue' }} onPress={onChatListScreen}>
        Go to ChatListScreen
      </Text>
    </SafeAreaView>
  );
};
export default ChatScreen;
const styles = StyleSheet.create({});
