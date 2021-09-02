import React, { Component } from "react";
import {
  Button,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    // width: "100%",
    // height: 44,
    // padding: 10,
    // borderWidth: 1,
    // borderColor: "black",
    // marginBottom: 10,
    height: 50,
    color: "white",
  },
});

export default class RegistrationScreen extends Component {
  wRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  }
  onRegistration() {
    const { first_name, last_name, email, password } = this.state;

    Alert.alert(
      "Credentials",
      `${first_name} +${last_name} + ${email} + ${password}`
    );
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}
