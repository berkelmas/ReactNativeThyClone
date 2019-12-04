import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Transition } from "react-navigation-fluid-transitions";
import { RoomsData } from "../assets/data/rooms-data";

const ReservationSecondScreen = props => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      containerStyle={styles.container}
    >
      {RoomsData.map((item, index) => (
        <View
          key={index}
          style={{
            height: Dimensions.get("window").height / 3,
            width: Dimensions.get("window").width,
            position: "relative",
            marginTop: 5,
            marginBottom: 5
          }}
        >
          <ScrollView
            pagingEnabled={true}
            horizontal={true}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            onScroll={() => console.log("i got scrolled...")}
          >
            {item.images.map((img, index) => (
              <View key={index} onStartShouldSetResponder={() => true}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("RoomDetail", {
                      item: item
                    })
                  }
                >
                  <Image
                    style={{
                      height: "100%",
                      width: Dimensions.get("window").width
                    }}
                    source={img}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <View
            pointerEvents="none"
            style={{
              backgroundColor: "black",
              opacity: 0.3,
              height: "100%",
              width: "100%",
              position: "absolute",
              justifyContent: "center",
              alignItems: "center"
            }}
          />
          {/* TOP RIGHT CORNER */}
          <View
            pointerEvents="none"
            style={{ position: "absolute", top: 10, right: 20 }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 35,
                color: "white",
                textAlign: "right"
              }}
            >
              {item.price}
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 15,
                color: "white",
                textAlign: "right"
              }}
            >
              Per Night (DLR)
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 14,
                color: "white",
                textAlign: "right"
              }}
            >
              Honors Discount
            </Text>
          </View>

          {/* BOTTOM LEFT CORNER */}
          <View
            pointerEvents="none"
            style={{ position: "absolute", bottom: 50, left: 10 }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 25,
                color: "white"
              }}
            >
              {item.type}
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 13,
                color: "white"
              }}
            >
              *For our private guests with discount
            </Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <AntDesign name="book" size={32} color="white" />
              <AntDesign
                name="phone"
                size={32}
                color="white"
                style={{ paddingLeft: 3 }}
              />
              <AntDesign
                name="bells"
                size={32}
                color="white"
                style={{ paddingLeft: 3 }}
              />
              <AntDesign
                name="medicinebox"
                size={32}
                color="white"
                style={{ paddingLeft: 3 }}
              />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

ReservationSecondScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <Text style={{ fontSize: 25, fontFamily: "Roboto-Light" }}>Rooms </Text>
  ),
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons style={{ marginLeft: 10 }} name="md-arrow-back" size={32} />
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ReservationSecondScreen;
