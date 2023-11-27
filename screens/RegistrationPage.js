// RegistrationPage.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, marginBottom: 30, color: '#333' }}>Register</Text>
      <TextInput placeholder="Full Name" style={{ height: 40, borderColor: '#3498db', borderWidth: 1, marginBottom: 20, padding: 10, width: 200 }} />
      <TextInput placeholder="Email" style={{ height: 40, borderColor: '#3498db', borderWidth: 1, marginBottom: 20, padding: 10, width: 200 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ height: 40, borderColor: '#3498db', borderWidth: 1, marginBottom: 20, padding: 10, width: 200 }} />
      <Button title="Register" color="#3498db" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegistrationPage;
