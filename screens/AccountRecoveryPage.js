// AccountRecoveryPage.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AccountRecoveryPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, marginBottom: 30, color: '#333' }}>Account Recovery</Text>
      <Text style={{ marginBottom: 20, color: '#333' }}>Enter your email to recover your account</Text>
      <TextInput placeholder="Email" style={{ height: 40, borderColor: '#3498db', borderWidth: 1, marginBottom: 20, padding: 10, width: 200 }} />
      <Button title="Recover Account" color="#3498db" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default AccountRecoveryPage;
