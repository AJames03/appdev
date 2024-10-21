// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.inputContainer}>
        <Icon name="user" style={styles.icon} />
        <TextInput
        style={styles.input}
        placeholder="Username"
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={isPasswordVisible} />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={24} color="lightgray" style={styles.iconSecurity} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    gap: 20,
  },
  title: {
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    padding: 10,
    width: 300,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
  }
});

export default LoginScreen;
