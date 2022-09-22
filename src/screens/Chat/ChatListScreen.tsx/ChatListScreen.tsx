import { StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { FunctionComponent } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChatStackParams } from '../../../Navigation/ChatStackNav';

interface ChatListScreenProps {}

const ChatListScreen: FunctionComponent<ChatListScreenProps> = ({}) => {
  // NAVIGATION
  const navigation = useNavigation<NativeStackNavigationProp<ChatStackParams>>();

  const onChatScreen = () => {
    navigation.navigate('ChatScreen');
    console.log('Go to ChatScreen');
  };
  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style='auto' />
      <Text>ChatListScreen</Text>
      <Text style={{ color: 'blue' }} onPress={onChatScreen}>
        Go to ChatScreen
      </Text>
    </SafeAreaView>
  );
};
export default ChatListScreen;
const styles = StyleSheet.create({});
