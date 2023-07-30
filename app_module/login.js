import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  TextInput,
  Alert,
} from "react-native";

import { Flex, Button } from "@react-native-material/core";
import { styles } from "./styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";

const loginBG = {
  uri: "https://e0.pxfuel.com/wallpapers/1022/495/desktop-wallpaper-abstract-purple-purple-mobile.jpg",
};

export function Login({ navigation }) {


  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("User Login Successful!!")
      navigation.replace("FlashCards")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={loginBG} resizeMode="cover" style={styles.image}>

        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          <Text style={styles.LoginHeader}>
            Flash<Text style={{ color: "#fff" }}>Cards</Text>
          </Text>
<Flex m="2"  items="center" spacing={2}>
      <View
            style={{
              padding: 30,
              paddingBottom: 60,
              backgroundColor: "#fff",
              borderRadius: 30,
              margin: 20,
            }}
          >
            <Text
              style={{ textAlign: "center", color: "#111", marginBottom: 20 }}
            >
              Login to Access
            </Text>

            <TextInput style={styles.input} placeholder="Email" onChangeText={newText=>setEmail(newText)} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}  onChangeText={newText=>setPassword(newText)}
            />
            <Button
              style={styles.button}
              title="Login"
              onPress={() => login()}
              color="#6528F7"
            />
            <Text style={{ textAlign: "center", color: "#111", marginTop: 20 }}>
              Forgot Password?
            </Text>
            <View style={{ marginTop: 20 }}>
              <Button
                style={styles.button}
                color="#FF9DE0"
                title="Login with Google"
                onPress={() => Alert.alert("Google button pressed")}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                style={styles.button}
                color="#00008B"
                title="Login with Facebook"
                onPress={() => Alert.alert("Facebook button pressed")}
              />
            </View>
          </View>
          </Flex>

        </View>

        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          © All Rights Reerved.
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}



