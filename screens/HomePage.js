// HomePage.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, marginBottom: 30, color: '#333' }}>Welcome to Your App</Text>
      <Button title="Logout" color="#3498db" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default HomePage;
