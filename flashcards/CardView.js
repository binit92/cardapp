
export function CardDetails({ navigation }) {
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

