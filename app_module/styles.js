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

export const styles = StyleSheet.create({
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
    marginTop: 0,
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
});



