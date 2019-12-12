import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Ionicons, AntDesign, Foundation } from "@expo/vector-icons";
import { Transition } from "react-navigation-fluid-transitions";

const CreditCardScreen = props => {
  return (
    <Transition appear="right">
      <View style={styles.container}>
        {/* HEADER VIEW */}
        <View>
          <View
            style={{
              height: 80,
              backgroundColor: "white",
              width: Dimensions.get("window").width,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("PaymentChoose")}
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

        {/* MAIN CONTAINER */}
        <View style={{ padding: 20 }}>
          {/* CREDIT CARD */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <AntDesign
              name="creditcard"
              size={40}
              color="black"
              style={{ paddingRight: 15 }}
            />
            <Text
              style={{
                fontSize: 30,
                fontFamily: "Roboto-Light"
              }}
            >
              Credit Card
            </Text>
          </View>

          <View
            style={{
              paddingTop: 40,
              paddingBottom: 5,
              borderBottomWidth: 0.3,
              borderBottomColor: "#2E2E2E"
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Roboto-Light",
                paddingBottom: 2
              }}
            >
              Card Number
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10
              }}
            >
              <AntDesign
                name="creditcard"
                size={25}
                color="#e2e2e2"
                style={{ paddingRight: 10 }}
              />
              <TextInput
                style={{
                  fontSize: 20,
                  fontFamily: "Roboto-Light"
                }}
                placeholder="0000 0000 0000 0000"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            marginTop: "auto",
            width: Dimensions.get("window").width,
            height: 80,
            backgroundColor: "#FF5A5F",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9
          }}
        >
          <Text
            style={{ color: "white", fontSize: 25, fontFamily: "Roboto-Light" }}
          >
            Pay
          </Text>
        </TouchableOpacity>
      </View>
    </Transition>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CreditCardScreen;
