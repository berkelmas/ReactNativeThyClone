import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { howToHelpData } from "../assets/data/what-help-data";
import { RoomsData } from "../assets/data/rooms-data";

const NewHomeScreen = props => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View
        style={{
          height: 90,
          justifyContent: "flex-end",
          backgroundColor: "transparent"
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => props.navigation.toggleDrawer()}
        >
          <Ionicons name="ios-menu" size={42} color="#484848" />
        </TouchableOpacity>
      </View>

      {/* MAIN CONTENT */}
      <ScrollView contentContainerStyle={{ padding: 0 }}>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 25,
            color: "#484848",
            paddingHorizontal: 10
          }}
        >
          What can we help you find?
        </Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 20, height: 180 }}
        >
          {howToHelpData.map((item, index) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(item.goTo)}
              key={index}
              style={{
                height: 170,
                width: 150,
                borderRadius: 10,
                backgroundColor: "white",
                shadowColor: "#000",
                marginLeft: 10,
                shadowOffset: {
                  width: 0,
                  height: 2
                },
                shadowOpacity: 0.15,
                shadowRadius: 4,

                elevation: 12
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: 10
                }}
              >
                <Image
                  source={{
                    uri: item.image
                  }}
                  style={{
                    height: "70%",
                    width: "100%"
                  }}
                />
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1
                  }}
                >
                  <Text style={{ fontSize: 19, fontFamily: "Roboto-Light" }}>
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontSize: 25,
            marginTop: 25,
            color: "#484848",
            paddingHorizontal: 10
          }}
        >
          Top Rated Rooms
        </Text>
        <Text
          style={{
            fontFamily: "Roboto-Light",
            fontSize: 17,
            paddingTop: 8,
            paddingHorizontal: 10
          }}
        >
          You and your family deserve the best suites for your holiday journey
        </Text>

        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 15,
            height: (Dimensions.get("window").height * 5) / 12 + 20
          }}
        >
          {RoomsData.map(item => (
            <View
              key={item.id}
              style={{
                height: (Dimensions.get("window").height * 5) / 12,
                width: Dimensions.get("window").width,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 0
                },
                shadowOpacity: 0.2,
                shadowRadius: 5.0,

                elevation: 12
              }}
            >
              <View
                style={{
                  height: "100%",
                  width: "100%",
                  padding: 10
                }}
              >
                <View
                  style={{
                    borderRadius: 10,
                    overflow: "hidden"
                  }}
                >
                  <Image
                    style={{
                      height: "70%",
                      resizeMode: "cover"
                    }}
                    source={{
                      uri: item.images[0].uri
                    }}
                  />
                  <View
                    style={{
                      height: "30%",
                      backgroundColor: "white",
                      padding: 10
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Roboto-Medium",
                        fontSize: 20,
                        color: "#484848"
                      }}
                    >
                      {item.type}
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                      {Array(5)
                        .fill(0)
                        .map((item, index) => (
                          <AntDesign
                            key={index}
                            name={index < 3 ? "star" : "staro"}
                            size={15}
                            color="#ffbb33"
                            style={{ padding: 1 }}
                          />
                        ))}
                    </View>
                    <TouchableOpacity
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: "auto",
                        height: 20
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Roboto-Light",
                          fontSize: 17,
                          color: "#00A699"
                        }}
                      >
                        Book
                      </Text>
                      <Entypo name="chevron-right" size={20} color="#00A699" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Login")}
          style={{
            height: 60,
            width: "95%",
            borderColor: "#00A699",
            marginLeft: 10,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Roboto-Light",
              color: "#00A699"
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 60,
            width: "95%",
            borderColor: "#FF5A5F",
            marginLeft: 10,
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
            marginBottom: 20
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Roboto-Light",
              color: "#FF5A5F"
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

NewHomeScreen.navigationOptions = ({ navigation }) => ({
  header: null
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NewHomeScreen;
