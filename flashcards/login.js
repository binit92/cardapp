export

function LoginScreen({ navigation }) {
    /* 2. Get the param */
    //const { itemId } = route.params;
    //const { otherParam } = route.params;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={loginBG} resizeMode="cover" style={styles.image}>
          <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <Text style={styles.LoginHeader}>
              Flash<Text style={{ color: "#fff" }}>Cards</Text>
            </Text>
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

              <TextInput style={styles.input} placeholder="Email" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
              />
              <Button
                style={styles.button}
                title="Login"
                onPress={() => navigation.navigate("FlashCards")}
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
