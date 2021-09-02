import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, Button, Image ,Keyboard } from "react-native";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const signIn = (e) => {
    // const  email, password 
    // const { openAlert, navigation } = this.props;
    // const { navigation } = this.props;

    Keyboard.dismiss();

    if (!email || !(email && isEmail(email))) {
      return openAlert("Please enter a valid email address");
    }
    if (!password || (password && password.length < 6)) {
      return openAlert("Password must be at least 6 characters");
    }
    // return this.props.emailPassWOrdLogin(email, password,navigation);
    try {
      const response = axios
        .post("https://pratiksanyaja1998.pythonanywhere.com/api/user/login", {
          email,
          password,
        })
        .then((response) => response.data);
      console.log("EmailPasswordLogin", response);
      // dispatch(AuthActions.setUser(response));
      // navigation.navigate("HomeStack");
    } catch ({ message }) {
      // dispatch(CommonActions.setAlert({ visible: true, content: message }));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginView}>
        <View>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: "100%", resizeMode: "contain", height: 100 }}
          />
        </View>
        <TextInput
          placeholder="email"
          value={email}
          style={{ width: "100%" }}
          style={styles.input}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={signIn} />
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
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
export default Login;
