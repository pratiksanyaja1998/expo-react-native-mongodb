import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import SignupScreen from "./screen/Signup";
import LoginScreen from "./screen/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/Home";

const Stack = createNativeStackNavigator();

export default function App(props) {
  const [isSignedIn, setSignedIn] = useState(null);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        console.log("signInclick ....");
      },
      signOut: () => {
        // // console.log("signOut .....")
        // AsyncStorage.removeItem("user");
        // dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {},
    }),
    []
  );

  if (isSignedIn == null) {
    // We haven't finished checking for the token yet
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <UseContext.Provider value={authContext}>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} /> */}
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </UseContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
