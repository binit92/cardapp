import * as React from "react";
import {
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
  View,
  ScrollView,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppBar, IconButton, Avatar } from "@react-native-material/core";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icon1 from "@expo/vector-icons/MaterialIcons";


const image1 = {
  uri: ".https://e0.pxfuel.com/wallpapers/1022/495/desktop-wallpaper-abstract-purple-purple-mobile.jpg",
};
const loginBG = {
  uri: "https://e0.pxfuel.com/wallpapers/1022/495/desktop-wallpaper-abstract-purple-purple-mobile.jpg",
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FlashCards" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CardView" component={CardDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image1} resizeMode="cover" style={styles.image}>
        <View style={styles.header_welcome}>
          <IconButton
            icon={(props) => <Icon name="menu" {...props} title="Menu" />}
            color="#fff"
          />
          <Text style={styles.header}>
            Flash<Text style={{ color: "#fff" }}>Cards</Text>
          </Text>

          <IconButton
            icon={(props) => (
              <Icon name="bell-outline" {...props} title="Add" />
            )}
            color="#fff"
          />
        </View>
        <ScrollView>
          <View style={styles.card_container}>
            <View style={styles.cardTitle}>
              <Text style={styles.deckName}>
                <Icon name="animation" size={24} /> Search Cards
              </Text>
              <IconButton
                style={styles.setting}
                icon={(props) => (
                  <Icon1 name="search" {...props} title="Edit" />
                )}
                color="#333"
              />
            </View>

            <View style={styles.fixToText}>
              <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
                Latest Cards
              </Text>
              <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
                View all
              </Text>
            </View>
            <View style={{}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 0,
                  padding: 0,
                  justifyContent: "center",
                }}

              >

                <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                /></Pressable>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <View style={styles.fixToText}>
              <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
                Top Trending Cards
              </Text>
              <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
                View all
              </Text>
            </View>
            <View style={{}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 0,
                  padding: 0,
                  justifyContent: "center",
                }}
              >
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <View style={styles.fixToText}>
              <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
                Favorite Cards
              </Text>
              <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
                View all
              </Text>
            </View>
            <View style={{}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 0,
                  padding: 0,
                  justifyContent: "center",
                }}
              >
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottom_bar}>
          <IconButton
            icon={(props) => <Icon name="home" {...props} title="Home" />}
            color="#111"
          />

          <IconButton
            style={styles.add}
            icon={(props) => <Icon name="plus" {...props} title="Add" />}
            color="#fff"
          />

          <IconButton
            icon={(props) => (
              <Icon name="bookmark-multiple-outline" {...props} title="Menu" />
            )}
            color="#111"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

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

function CardDetails({ navigation }) {
  /* 2. Get the param */
  //const { itemId } = route.params;
  //const { otherParam } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image1} resizeMode="cover" style={styles.image}>
        <View style={styles.header_welcome}>
          <IconButton
            icon={(props) => <Icon name="menu" {...props} title="Menu" />}
            color="#fff"
          />
          <Text style={styles.header}>
            Flash<Text style={{ color: "#fff" }}>Cards</Text>
          </Text>

          <IconButton
            icon={(props) => (
              <Icon name="bell-outline" {...props} title="Add" />
            )}
            color="#fff"
          />
        </View>
        <View style={styles.card_container}>
          <View style={styles.cardTitle}>
            <Text style={styles.deckName}>
              <Icon name="animation" size={24} /> General Convo
            </Text>
            <IconButton
              style={styles.setting}
              icon={(props) => <Icon1 name="search" {...props} title="Edit" />}
              color="#333"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              backgroundColor: "#f194ff",
            }}
          >
            <Text style={styles.quest}>Know about Hello.</Text>
            <IconButton
              style={{ margin: 5, backgroundColor: "#f194ff" }}
              icon={(props) => (
                <Icon name="rotate-3d-variant" {...props} title="Edit" />
              )}
              color="#fff"
            />
          </View>
          <ScrollView style={styles.ans}>
            <Text style={{ fontSize: 17, padding: 5, textAlign: "justify" }}>
              Hello is a salutation or greeting in the English language. It is
              first attested in writing from 1826. The greeting "Hello" became
              associated with telephones. Hello is a salutation or greeting in
              the English language. It is first attested in writing from 1826.
              It is first attested in writing from 1826. The greeting "Hello"
              became associated with telephones.
            </Text>
          </ScrollView>

          <View style={styles.fixToText}>
            <IconButton
              style={styles.setting}
              icon={(props) => (
                <Icon name="heart-outline" {...props} title="Edit" />
              )}
              color="#fff"
            />

            <View style={styles.fixToText}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  margin: 0,
                  marginTop: 10,
                  padding: 0,
                  justifyContent: "center",
                }}
              >
                <Image
                  style={styles.cardBullet}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardBullet}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardBullet}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
                <Image
                  style={styles.cardBullet}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </View>
            </View>
            <IconButton
              style={styles.setting}
              icon={(props) => (
                <Icon name="comment-outline" {...props} title="Edit" />
              )}
              color="#fff"
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 0 }}>
            <Button
              style={{ flex: 1, marginRight: 5 }}
              title="Memorize"
              onPress={() => Alert.alert("Memorize button pressed")}
              color="lightblue"
            />

            <Button
              style={{ flex: 1, marginLeft: 5 }}
              color="#f194ff"
              title="I know"
              onPress={() => Alert.alert("I know button pressed")}
            />
          </View>

          <View style={styles.fixToText}>
            <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
              More like this
            </Text>
            <Text style={{ color: "#fff", fontSize: 16, marginTop: 10 }}>
              View all
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                margin: 0,
                padding: 0,
                justifyContent: "center",
              }}
            >
              <Image
                style={styles.cardThumbnail}
                source={{
                  uri: ".https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Image
                style={styles.cardThumbnail}
                source={{
                  uri: ".https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Image
                style={styles.cardThumbnail}
                source={{
                  uri: ".https://reactnative.dev/img/tiny_logo.png",
                }}
              />
              <Image
                style={styles.cardThumbnail}
                source={{
                  uri: ".https://reactnative.dev/img/tiny_logo.png",
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottom_bar}>
          <IconButton
            icon={(props) => (
              <Icon name="home-outline" {...props} title="Home" />
            )}
            onPress={HomeScreen()}
            color="#111"
          />

          <IconButton
            style={styles.add}
            icon={(props) => <Icon name="plus" {...props} title="Add" />}
            color="#fff"
          />

          <IconButton
            icon={(props) => (
              <Icon name="bookmark-multiple-outline" {...props} title="Menu" />
            )}
            color="#111"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header_welcome: {
    backgroundColor: "#6528F7",
    padding: 5,
    flexDirection: "row",
  },
  fixToText: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card_container: {
    margin: 30,
    marginTop: 20,
    paddingBottom: 50,
    textAlign: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f194ff",
    textAlign: "center",
    padding: 0,
    flex: 1,
  },
  LoginHeader: {
    marginTop: 0,
    fontSize: 50,
    fontWeight: "bold",
    color: "#f194ff",
    textAlign: "center",
    padding: 0,
  },
  image: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#301E67",
  },
  cardTitle: {
    flexDirection: "row",
    textAlign: "center",
    backgroundColor: "#fff",
    marginBottom: 20,

    borderRadius: 50,
  },
  deckName: {
    fontSize: 16,
    padding: 10,
    flex: 2,
  },
  quest: {
    color: "#fff",
    fontSize: 24,
    margin: 20,
  },
  ans: {
    backgroundColor: "#fff",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  bottom_bar: {
    flex: 5,
    backgroundColor: "#fff",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 2,
    left: 0,
    bottom: 0,
    width: "100%",
  },
  next: {
    backgroundColor: "#ddd",
    padding: 20,
    fontSize: 30,
    flex: 1,
  },
  prev: {
    flex: 1,
    backgroundColor: "#ddd",
    padding: 20,
    fontSize: 30,
  },
  add: {
    backgroundColor: "#6528F7",
  },
  setting: {},

  //Flipcards---------------
  cardBullet: {
    width: 10,
    height: 10,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 60,
    margin: 5,
  },
  cardThumbnail: {
    width: 80,
    height: 80,
    backgroundColor: "#6528F7",
    margin: 5,
    borderRadius: 5,
  },

  cardLatest: {
    width: 150,
    height: 180,
    backgroundColor: "#6528F7",
    margin: 5,
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "#fff",
    borderRadius: 60,
    marginTop: 0,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    borderRadius: 50,
  },
});
