import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.topContainer }}>
        <View style={{ ...styles.topContainerBig }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontFamily: "Roboto-Light",
                marginBottom: 10
              }}
            >
              Are You A Digitarc Club Member?
            </Text>
            <Text
              style={{
                color: "white",
                fontFamily: "Roboto-Light",
                fontSize: 18
              }}
            >
              Join Digitarc Club to take advantage of fantastic benefits like
              award tickets and free upgrades.
            </Text>
          </View>
        </View>

        <View style={{ ...styles.topContainerSmall }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Ionicons
              style={{ color: "white", padding: 30 }}
              name="ios-arrow-forward"
              size={45}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View
          pointerEvents="box-none"
          style={{ ...styles.bottomButtonsContainer }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Reservation")}
            style={{ ...styles.bottomButton, marginBottom: 10 }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Roboto-Light",
                fontSize: 22
              }}
            >
              Make Reservation
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Checkin")}
            style={{ ...styles.bottomButton }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "Roboto-Light",
                fontSize: 25
              }}
            >
              Check-in
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          bounces={false}
          horizontal={true}
          keyboardDismissMode={"on-drag"}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ position: "relative" }}>
            <Image
              style={{
                height: SCREEN_HEIGHT,
                width: SCREEN_WIDTH,
                resizeMode: "cover"
              }}
              source={{
                uri:
                  "https://en.seyvillas.com/img/guide/49/2450x0_90/denis-island-seychelles-2.jpg"
              }}
            />
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 25,
                position: "absolute",
                color: "white",
                top: "70%",
                left: 30
              }}
            >
              Beach Suite
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 45,
                position: "absolute",
                color: "white",
                top: "75%",
                left: 30
              }}
            >
              USD619
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 15,
                position: "absolute",
                color: "white",
                top: "83%",
                left: 30
              }}
            >
              All Inclusive, Best Suite
            </Text>
          </View>
          <View style={{ position: "relative" }}>
            <Image
              style={{
                height: SCREEN_HEIGHT,
                width: SCREEN_WIDTH,
                resizeMode: "cover"
              }}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1554899199-f6d99e6be6f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              }}
            />
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 25,
                position: "absolute",
                color: "white",
                top: "70%",
                left: 30
              }}
            >
              Zurich
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 45,
                position: "absolute",
                color: "white",
                top: "75%",
                left: 30
              }}
            >
              USD619
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 15,
                position: "absolute",
                color: "white",
                top: "83%",
                left: 30
              }}
            >
              All Inclusive, Round Trip
            </Text>
          </View>
          <View style={{ position: "relative" }}>
            <Image
              style={{
                height: SCREEN_HEIGHT,
                width: SCREEN_WIDTH,
                resizeMode: "cover"
              }}
              source={{
                uri:
                  "https://en.seyvillas.com/img/guide/49/2450x0_90/denis-island-seychelles-2.jpg"
              }}
            />
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 25,
                position: "absolute",
                color: "white",
                top: "70%",
                left: 30
              }}
            >
              Sychelles
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 45,
                position: "absolute",
                color: "white",
                top: "75%",
                left: 30
              }}
            >
              USD619
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 15,
                position: "absolute",
                color: "white",
                top: "83%",
                left: 30
              }}
            >
              All Inclusive, Round Trip
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <Text style={{ fontFamily: "Roboto-Light", fontSize: 20 }}>Home</Text>
  ),
  headerLeft: (
    <TouchableOpacity
      style={{ marginLeft: 15 }}
      onPress={() => navigation.toggleDrawer()}
    >
      <Ionicons name="ios-menu" size={32} />
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    backgroundColor: "#484848",
    flex: 1,
    flexDirection: "row"
  },
  topContainerBig: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flex: 5,
    padding: 10
  },
  topContainerSmall: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomContainer: {
    flex: 4
  },
  bottomButtonsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomButton: {
    width: 190,
    height: 70,
    backgroundColor: "#FF5A5F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }
});

export default HomeScreen;
