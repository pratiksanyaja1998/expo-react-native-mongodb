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
import MainCointainer from "../../component/MainContainer"
const { width, height } = Dimensions.get("window");

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
          <MainContainer>
          <View style={styles.textInputContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              autoCapitalize="words"
              autoCorrect={false}
              placeholder={"First name"}
              placeholderTextColor={'#B4B9B9'}
              returnKeyType="done"
              style={styles.textInput}
              value={this.state.first_name}
              onChangeText={(first_name) => this.setState({ first_name })}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              autoCapitalize="words"
              autoCorrect={false}
              placeholder={"Last name"}
              placeholderTextColor={'#B4B9B9'}
              returnKeyType="done"
              style={styles.textInput}
              value={this.state.Last_name}
              onChangeText={(last_name) => this.setState({ last_name })}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder={"Email"}
              placeholderTextColor={'#B4B9B9'}
              keyboardType="email-address"
              returnKeyType="done"
              style={styles.textInput}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder={'Password'}
              placeholderTextColor={'#B4B9B9'}
              secureTextEntry={true}
              style={styles.textInput}
              returnKeyType="done"
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
            />
            
          </View>
          
          <Button
             title={"Registration"}
            style={styles.registerButton}
            onPress={this.onRegistration.bind(this)}
          />
          </MainContainer>
      </View>
    );
  }
}