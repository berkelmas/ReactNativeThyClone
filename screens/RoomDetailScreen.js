import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import MapView, {
  Animated as AnimatedMapView,
  AnimatedRegion,
  Marker
} from "react-native-maps";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { descriptions } from "../assets/data/descriptions";
import { amenities } from "../assets/data/amenities";

const RoomDetailScreen = props => {
  const [region, setRegion] = React.useState(
    new AnimatedRegion({
      latitude: 37.099399,
      longitude: 27.493154,
      latitudeDelta: 0.006,
      longitudeDelta: 0.008
    })
  );
  const mapRef = React.useRef(null);
  const handleRegionChange = region => {};

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={{ position: "relative" }}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          {props.navigation.getParam("item").images.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={{
                height: Dimensions.get("window").height / 3,
                width: Dimensions.get("window").width
              }}
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: "white",
            opacity: 1,
            position: "absolute",
            top: 20,
            left: 30,
            justifyContent: "center",
            alignItems: "center",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 0
            },
            shadowOpacity: 0.32,
            shadowRadius: 10,

            elevation: 9
          }}
        >
          <EvilIcons name="close" size={32} />
        </TouchableOpacity>
      </View>

      <ScrollView bounces={false} contentContainerStyle={{ padding: 18 }}>
        <Text style={{ fontSize: 30, fontFamily: "Roboto-Light" }}>
          {props.navigation.getParam("item").type}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <AntDesign
                key={index}
                name={index < 3 ? "star" : "staro"}
                size={20}
                color="#ffbb33"
                style={{ padding: 3 }}
              />
            ))}
        </View>

        <Text
          style={{ marginTop: 22, fontFamily: "Roboto-Light", fontSize: 18 }}
        >
          Entire Suit hosted by Turkish Airlines.
        </Text>
        <Text
          style={{ marginTop: 20, fontFamily: "Roboto-Light", fontSize: 18 }}
        >
          2 Guests <Text>&#8226;</Text> 1 Bedroom <Text>&#8226;</Text> 1 Bed{" "}
          <Text>&#8226;</Text> 1 Bath{" "}
        </Text>

        {/* TINY LINE */}
        <View
          style={{
            width: "100%",
            height: 0.2,
            backgroundColor: "gray",
            marginVertical: 20
          }}
        />

        {descriptions.map((item, index) => (
          <View
            key={index}
            style={{
              marginVertical: 5,
              flexDirection: "row",
              alignItems: "flex-start"
            }}
          >
            {item.icon}
            <View
              style={{
                flex: 1,
                flexWrap: "wrap"
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Light",
                  fontSize: 18,
                  paddingBottom: 5
                }}
              >
                {item.descriptionTitle}
              </Text>
              <Text style={{ fontFamily: "Roboto-Light", fontSize: 14 }}>
                {item.descriptionText}
              </Text>
            </View>
          </View>
        ))}

        {/* TINY LINE */}
        <View
          style={{
            width: "100%",
            height: 0.3,
            backgroundColor: "gray",
            marginVertical: 20
          }}
        />

        {/* AMENITIES SECTION START */}
        <View>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Roboto-Light",
              paddingBottom: 20
            }}
          >
            Amenities
          </Text>
          {amenities.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 5
              }}
            >
              <Text style={{ fontFamily: "Roboto-Light", fontSize: 20 }}>
                {item.name}
              </Text>
              {item.icon}
            </View>
          ))}
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

        {/* LOCATION MAP */}
        <View
          style={{ height: Dimensions.get("window").height / 3, width: "100%" }}
        >
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Roboto-Light",
              paddingBottom: 20
            }}
          >
            Location
          </Text>
          <AnimatedMapView
            zoomEnabled={true}
            rotateEnabled={false}
            ref={mapRef}
            style={{ height: "80%", width: "100%", borderRadius: 10 }}
            onRegionChange={handleRegionChange.bind(this)}
            region={region}
          >
            <Marker coordinate={{ latitude: 37.099399, longitude: 27.493154 }}>
              <Image
                style={{ height: 50, width: 60, resizeMode: "contain" }}
                source={{
                  uri:
                    "https://myrealdomain.com/images/airbnb-logo-clipart-9.png"
                }}
              />
            </Marker>
          </AnimatedMapView>
        </View>

        {/* BOOK NOW BUTTON */}
        <View
          style={{
            // backgroundColor: "#FF5A5F",
            backgroundColor: "white",
            height: 80,
            width: Dimensions.get("window").width,
            marginLeft: -18,
            marginBottom: -20,
            flexDirection: "row",
            justifyContent: "space-between",
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
            style={{
              fontSize: 20,
              fontFamily: "Roboto-Light",
              padding: 20,
              marginBottom: 10,
              color: "#3E4551"
            }}
          >
            400$ / night
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF5A5F",
              marginBottom: 10,
              borderRadius: 10,
              marginRight: 20
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Roboto-Light",
                color: "white",
                padding: 10
              }}
            >
              Book
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

RoomDetailScreen.navigationOptions = ({ navigation }) => ({
  headerShown: false
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RoomDetailScreen;
