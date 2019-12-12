import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Ionicons, AntDesign, Foundation } from "@expo/vector-icons";
import { Transition } from "react-navigation-fluid-transitions";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const PaymentChooseScreen = props => {
  return (
    <Transition appear="bottom">
      <View style={styles.container}>
        <View>
          <View
            style={{
              height: 90,
              backgroundColor: "white",
              width: Dimensions.get("window").width,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("ReservationLastDetails")
              }
              style={{ marginLeft: 20 }}
            >
              <Ionicons
                style={{ marginLeft: 10 }}
                name="md-arrow-back"
                size={40}
              />
            </TouchableOpacity>

            <View />
          </View>
        </View>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Roboto-Medium",
            paddingLeft: 20
          }}
        >
          Choose Payment
        </Text>

        {/* MAIN CONTAINER */}
        <View style={{ padding: 20, marginTop: 10 }}>
          {/* CREDIT CARD */}
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate("CreditCard")}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "35%"
            }}
          >
            <AntDesign name="creditcard" size={32} color="black" />
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Roboto-Light"
              }}
            >
              Credit
            </Text>
          </TouchableWithoutFeedback>
          {/* TINY LINE */}
          <View
            style={{
              width: "100%",
              height: 0.2,
              backgroundColor: "gray",
              marginVertical: 20
            }}
          />

          {/* PAYPAL */}
          <TouchableWithoutFeedback
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "35%"
            }}
          >
            <Foundation name="paypal" size={32} color="black" />
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Roboto-Light"
              }}
            >
              Paypal
            </Text>
          </TouchableWithoutFeedback>
          {/* TINY LINE */}
          <View
            style={{
              width: "100%",
              height: 0.4,
              backgroundColor: "gray",
              marginVertical: 20
            }}
          />

          {/* AMAZON */}
          <TouchableWithoutFeedback
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "35%"
            }}
          >
            <AntDesign name="amazon" size={32} color="black" />
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Roboto-Light"
              }}
            >
              Amazon
            </Text>
          </TouchableWithoutFeedback>

          {/* TINY LINE */}
          <View
            style={{
              width: "100%",
              height: 0.4,
              backgroundColor: "gray",
              marginVertical: 20
            }}
          />
        </View>
      </View>
    </Transition>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default PaymentChooseScreen;
