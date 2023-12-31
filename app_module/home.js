import {
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";

import { styles } from "./styles";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Icon1 from "@expo/vector-icons/MaterialIcons";
import { IconButton } from "@react-native-material/core";

const image1 = {
  uri: ".https://e0.pxfuel.com/wallpapers/1022/495/desktop-wallpaper-abstract-purple-purple-mobile.jpg",
};



import { NavigationContainer } from "@react-navigation/native" ;

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Tab = createMaterialBottomTabNavigator();
function HomeScreen(navigation) {
  return (
    <NavigationContainer independent={true}>
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Feed" component={Feed}  options={{ headerShown: false }}/>
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>

  </NavigationContainer>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();


function Feed(navigation) {
  return (

    <SafeAreaView style={styles.container}>
    <ImageBackground source={image1} resizeMode="cover" style={styles.image}>
      <View style={styles.header_welcome}>
        <IconButton
          icon={(props) => <Icon name="menu" {...props} title="Menu" />}
          color="#fff"
          onPress={() => navigation.toggleDrawer()}
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
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
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
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
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
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
              <Pressable onPress={() => navigation.navigate("CardView")}>
                <Image
                  style={styles.cardLatest}
                  source={{
                    uri: ".https://reactnative.dev/img/tiny_logo.png",
                  }}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.bottom_bar}>
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
      </View> */}
    </ImageBackground>
  </SafeAreaView>

  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

export function Home({ navigation }) {
  return (

    <NavigationContainer independent={true}>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>


  </NavigationContainer>


      );
}


