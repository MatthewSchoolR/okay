// LoginPage.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, marginBottom: 30, color: '#333' }}>Login</Text>
      <TextInput placeholder="Username" style={{ height: 40, borderColor: '#3498db', borderWidth: 1, marginBottom: 20, padding: 10, width: 200 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ height: 40, borderColor: '#3498db', borderWidth: 1, marginBottom: 20, padding: 10, width: 200 }} />
      <Button title="Login" color="#3498db" onPress={() => navigation.navigate('Home')} />
      <Button title="Register" color="#3498db" onPress={() => navigation.navigate('Registration')} />
      <Button title="Forgot Password?" color="#3498db" onPress={() => navigation.navigate('AccountRecovery')} />
    </View>
  );
};

export default LoginPage;
