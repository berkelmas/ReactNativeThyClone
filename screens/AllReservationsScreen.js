import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const AllReservationsScreen = props => {
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
          style={{ marginLeft: 25 }}
          onPress={() => props.navigation.toggleDrawer()}
        >
          <Ionicons name="ios-menu" size={42} />
        </TouchableOpacity>
      </View>

      {/* MAIN CONTAINER */}
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* ROOM RESERVATIONS */}
        <View>
          <Text style={{ fontFamily: "Roboto-Medium", fontSize: 25 }}>
            Room Reservations
          </Text>

          {Array(2)
            .fill(0)
            .map((res, index) => (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ReservationDetail")}
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10
                }}
              >
                <View>
                  <Text style={{ fontFamily: "Roboto-Light", fontSize: 25 }}>
                    King Suite
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
                </View>
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    resizeMode: "cover",
                    borderRadius: 10
                  }}
                  source={{
                    uri:
                      "http://www.ramadaresortkusadasi.com/Photos/Agac/82/RAMADA_RESORT_KING_SUIT_ROOM_2.JPG"
                  }}
                />
              </TouchableOpacity>
            ))}

          <Text
            style={{ fontSize: 25, fontFamily: "Roboto-Medium", marginTop: 10 }}
          >
            In Hotel Reservations
          </Text>

          {Array(2)
            .fill(0)
            .map((res, index) => (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ReservationDetail")}
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 10
                }}
              >
                <View>
                  <Text style={{ fontFamily: "Roboto-Light", fontSize: 25 }}>
                    Sunset Restaurant
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
                </View>
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    resizeMode: "cover",
                    borderRadius: 10
                  }}
                  source={{
                    uri:
                      "https://api.rezervin.com/uploads/MerchantImages/b740e984-94f3-48bd-b157-1233248961b7.jpg"
                  }}
                />
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

AllReservationsScreen.navigationOptions = ({ navigation }) => ({
  header: null
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AllReservationsScreen;
