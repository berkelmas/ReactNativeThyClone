import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MapBookSuccessScreen = props => {
  return (
    <View style={styles.container}>
      {/* MAIN VIEW */}
      <View
        style={{
          paddingHorizontal: 10,
          flex: 1,
          marginTop: 80
        }}
      >
        <Text style={{ fontSize: 22, fontFamily: "Roboto-Medium" }}>
          Request Completed
        </Text>
        <Text
          style={{
            fontFamily: "Roboto-Light",
            fontSize: 16,
            paddingVertical: 10
          }}
        >
          * Your restorant reservation request is now being processed at this
          moment.
        </Text>

        <Image
          source={{
            uri:
              "https://api.rezervin.com/uploads/MerchantImages/b740e984-94f3-48bd-b157-1233248961b7.jpg"
          }}
          style={{
            height: 200,
            width: Dimensions.get("window").width - 20,
            borderRadius: 5
          }}
        />

        {/* SUB CONTAINER BELOW IMAGE */}
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontFamily: "Roboto-Light",
              fontSize: 20,
              paddingBottom: 5
            }}
          >
            Sunset Restaurant
          </Text>
          <Text style={{ fontFamily: "Roboto-Light", fontSize: 13 }}>
            Luxury Italian Cousine Restaurant
          </Text>
        </View>

        {/* TINY LINE */}
        <View
          style={{
            width: "100%",
            height: 0.2,
            backgroundColor: "gray",
            marginVertical: 10
          }}
        />

        {/* TINY LINE */}
        <View
          style={{
            width: "100%",
            height: 0.2,
            backgroundColor: "gray",
            marginVertical: 10
          }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          props.navigation.popToTop();
          props.navigation.navigate("Home");
        }}
        style={{
          height: 90,
          zIndex: 0,
          width: Dimensions.get("window").width,
          backgroundColor: "#FF5A5F",
          marginTop: "auto",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontFamily: "Roboto-Light"
          }}
        >
          Go Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

MapBookSuccessScreen.navigationOptions = ({ navigation }) => ({
  header: null
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MapBookSuccessScreen;
