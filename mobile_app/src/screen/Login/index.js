import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";
import Logo from '../../assets';

function Login(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.loginView}>
        <View>
          <Image source={Logo} style={{width: 200, height: 200}} />
        </View>
        <TextInput
          placeholder="Username"
          value={username}
          style={{ width: "100%" }}
          style={styles.input}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          title="Sign in"
          onPress={() => signIn({ username, password })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  loginView: {
    // maxWidth: 600,
    // borderWidth: 1,
    // borderColor: "#000",
    padding: 10,
  },
  input: {
    marginBottom: 10,
    width: 250,
    backgroundColor: "#fff",
    padding: 5,
    fontSize: 18,
    // width: '100%'
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export default Login;
