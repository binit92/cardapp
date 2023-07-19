export
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

                  <Pressable onPress={() => navigation.navigate('CardDetails')}>
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
