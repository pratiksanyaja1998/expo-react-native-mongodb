import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Keyboard,
  Platform,
  StyleSheet,
  List,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#003f5c",
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

function Home(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // const getdata = async (e) => {
  //   setLoading(true);
  //   console.log("get data ========")
    
  //   try {
  //     const response = await axios
  //       .get("/auth/users/list")
  //       .then((response) => response.data);
  //       console.log("response ====");
  //       console.log("response " , response)
  //       setLoading(false);
  //     // console.log("Users", response);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log("error ", error.response);
  //     alert(error.response.data.message);
  //   }
  //   console.log("catch over ===");
  // };

  useEffect(()=>{
    console.log("use effect call ====")
    console.log(axios)
    axios.get("/auth/users/list").then((response)=>{
      console.log("response ====");
        console.log("response " , response)
        setData (response.data.data)
    }).catch(error=>{
      console.log("error ", error);
      alert(error.response.data.message);
    })
    // await getdata()
  },[])

  

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <>
          <Text>Home</Text>
        </>
      )}
    </View>
  );
}

export default Home;
