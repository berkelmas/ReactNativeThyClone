import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const ReservationDetailScreen = props => {
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
          style={{ marginLeft: 0 }}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons style={{ marginLeft: 15 }} name="md-arrow-back" size={40} />
        </TouchableOpacity>
      </View>

      {/* MAIN VIEW */}
      <View style={{ padding: 10 }}>
        <Image
          style={{
            height: Dimensions.get("window").height / 3,
            width: "100%",
            borderRadius: 10
          }}
          source={{
            uri:
              "https://media-cdn.tripadvisor.com/media/photo-s/12/91/fd/4c/the-most-luxury-retaurant.jpg"
          }}
        />
        <Text
          style={{ fontSize: 30, fontFamily: "Roboto-Medium", marginTop: 15 }}
        >
          Sunset Restaurant
        </Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <AntDesign
                key={index}
                name={index < 4 ? "star" : "staro"}
                size={15}
                color="#ffbb33"
                style={{ padding: 1 }}
              />
            ))}
        </View>

        <Text
          style={{ fontSize: 15, fontFamily: "Roboto-Light", marginTop: 10 }}
        >
          *You can use your QR code to get in the restaurant. The staff will
          take care of you during your delicious journey in our hotel.
        </Text>

        <Image
          style={{
            height: Dimensions.get("window").height / 3,
            resizeMode: "contain"
          }}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
          }}
        />
      </View>
    </View>
  );
};

ReservationDetailScreen.navigationOptions = ({ navigation }) => ({
  header: null
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ReservationDetailScreen;
