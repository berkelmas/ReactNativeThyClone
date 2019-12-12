import React from "react";
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Transition } from "react-navigation-fluid-transitions";

const ReservationLastDetailsScreen = props => {
  const [switchValue, setSwitchValue] = React.useState(false);
  const item = props.navigation.getParam("item");
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("RoomDetail")}
        style={{
          position: "absolute",
          top: 40,
          left: 20,
          width: 30,
          height: 30,
          zIndex: 100
        }}
      >
        <AntDesign name="close" size={32} color="#2E2E2E" />
      </TouchableOpacity>

      <View
        style={{
          height: 80,
          width: Dimensions.get("window").width
        }}
      />

      {/* MAIN CONTENT CONTAINER */}
      <View style={{ padding: 20 }}>
        {/* FIRST ROW */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Roboto-Medium",
                color: "#7B7B7B",
                paddingBottom: 15
              }}
            >
              {item.type.toUpperCase()}
            </Text>
            <Text
              style={{
                fontSize: 21,
                fontFamily: "Roboto-Light",
                paddingBottom: 10
              }}
            >
              {item.price} / Night
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign
                name="star"
                size={18}
                color="#ffbb33"
                style={{ paddingRight: 5 }}
              />
              <Text style={{ fontFamily: "Roboto-Light", fontSize: 13 }}>
                4.93 (893)
              </Text>
            </View>
          </View>

          <Image
            source={item.images[0]}
            style={{ height: 100, width: 100, borderRadius: 10, zIndex: 101 }}
          />
        </View>

        {/* TINY LINE */}
        <View
          style={{
            width: "100%",
            height: 0.2,
            backgroundColor: "gray",
            marginVertical: 20
          }}
        />

        {/* SECOND ROW */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Roboto-Medium",
                paddingBottom: 10,
                color: "#2E2E2E"
              }}
            >
              Check-in
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Roboto-Light",
                color: "#177477"
              }}
            >
              18 Dec
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Roboto-Medium",
                paddingBottom: 10,
                color: "#2E2E2E"
              }}
            >
              Check-out
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Roboto-Light",
                color: "#177477"
              }}
            >
              20 Dec
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Roboto-Medium",
                paddingBottom: 10,
                color: "#2E2E2E"
              }}
            >
              Guests
            </Text>
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Roboto-Light",
                color: "#177477"
              }}
            >
              1
            </Text>
          </View>
        </View>

        {/* TINY LINE */}
        <View
          style={{
            width: "100%",
            height: 0.3,
            backgroundColor: "gray",
            marginVertical: 20
          }}
        />

        {/* THIRD LINE */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Light" }}>
            I want transportation
          </Text>
          <Switch
            trackColor={{ true: "#FF5A5F", false: "blue" }}
            value={switchValue}
            onValueChange={() => setSwitchValue(prev => !prev)}
          />
        </View>

        {/* TINY LINE */}
        <View
          style={{
            width: "100%",
            height: 0.4,
            backgroundColor: "gray",
            marginVertical: 20
          }}
        />

        <View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Roboto-Medium",
              color: "#7B7B7B",
              paddingBottom: 10
            }}
          >
            FEES & TAX DETAILS
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
              {item.price} * 1 night
            </Text>
            <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
              {item.price.replace(/[\W]/g, "")} $
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
              Service Fee
            </Text>
            <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
              80 $
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 12
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
              Tax and Other Fees
            </Text>
            <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
              100 $
            </Text>
          </View>
        </View>

        {/* TINY LINE */}
        <View
          style={{
            width: "100%",
            height: 0.4,
            backgroundColor: "gray",
            marginVertical: 20
          }}
        />

        {/* TOTAL FEE PART */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 12
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
            Total
          </Text>
          <Text style={{ fontSize: 20, fontFamily: "Roboto-Medium" }}>
            100 $
          </Text>
        </View>
      </View>

      <Transition shared="button">
        <TouchableOpacity
          onPress={() => props.navigation.navigate("PaymentChoose")}
          style={{
            height: 80,
            width: Dimensions.get("window").width,
            backgroundColor: "#FF5A5F",
            marginTop: "auto",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
        >
          <Transition shared="text">
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Roboto-Light",
                color: "white"
              }}
            >
              Book Now
            </Text>
          </Transition>
        </TouchableOpacity>
      </Transition>
    </View>
  );
};

ReservationLastDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerShown: false
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ReservationLastDetailsScreen;
