import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DatePickerIOS
} from "react-native";
import MapView, {
  Animated as AnimatedMapView,
  AnimatedRegion,
  Marker
} from "react-native-maps";
import Animated, { Easing } from "react-native-reanimated";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default class MapScreen extends React.Component {
  mapRef;

  scrollRef;

  transYAnimated;

  state = {
    region: new AnimatedRegion({
      latitude: 37.099399,
      longitude: 27.493154,
      latitudeDelta: 0.006,
      longitudeDelta: 0.008
    }),
    loading: false,
    reservationDate: null,
    name: "",
    description:
      "Open since 1994, Sunset Grill & Bar today is one of the leading fine dining restaurants in Istanbul. Located on a hilltop below Ulus Park in the upscale neighborhood of Ulus, we offer a spectacular view of the Bosphorus, Bosphorus Bridge and Asian shoreline."
  };

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.scrollRef = React.createRef();
    this.transYAnimated = new Animated.Value(400);
    this.bottomDateAnimated = new Animated.Value(-300);
  }

  changeCord(reg) {
    reg.persist();
    // console.log(this.mapRef.current.getNode().fitToElements(true));
    this.scrollRef.current.getNode().scrollTo({ x: 0, y: 0 });
    const { region } = this.state;
    region
      .timing({
        latitude: reg.nativeEvent.coordinate.latitude - 0.001,
        longitude: reg.nativeEvent.coordinate.longitude + 0.002
      })
      .start();

    Animated.timing(this.transYAnimated, {
      toValue: -90,
      duration: 300,
      easing: Easing.linear
    }).start();

    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ name: "Sunset Bar", loading: false });
    }, 2000);
  }

  handleRegionChange(region) {
    this.state.region.setValue(region);

    Animated.timing(this.transYAnimated, {
      toValue: 400,
      duration: 500,
      easing: Easing.linear
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <AnimatedMapView
          zoomEnabled={false}
          rotateEnabled={false}
          ref={this.mapRef}
          style={{ ...styles.mapContainer }}
          onRegionChange={this.handleRegionChange.bind(this)}
          region={this.state.region}
        >
          <Marker
            onPress={region => this.changeCord(region)}
            coordinate={{ latitude: 37.099399, longitude: 27.493154 }}
          >
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/images/building-1.png")}
            />
          </Marker>
          <Marker
            onPress={this.changeCord.bind(this)}
            coordinate={{ latitude: 37.101433, longitude: 27.490551 }}
          >
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/images/building-1.png")}
            />
          </Marker>
          <Marker
            onPress={this.changeCord.bind(this)}
            coordinate={{ latitude: 37.101202, longitude: 27.489531 }}
          >
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/images/building-2.png")}
            />
          </Marker>
          <Marker
            onPress={this.changeCord.bind(this)}
            coordinate={{ latitude: 37.100023, longitude: 27.488601 }}
          >
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/images/building-3.png")}
            />
          </Marker>
          <Marker
            onPress={this.changeCord.bind(this)}
            coordinate={{ latitude: 37.098219, longitude: 27.490511 }}
          >
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/images/building-4.png")}
            />
          </Marker>
        </AnimatedMapView>

        <Animated.ScrollView
          ref={this.scrollRef}
          horizontal
          pagingEnabled
          centerContent
          showsHorizontalScrollIndicator={false}
          style={{
            ...styles.cardsContainer,
            transform: [{ translateY: this.transYAnimated }]
          }}
        >
          <View
            style={{
              ...styles.singleCardContainer
            }}
          >
            <View
              style={{
                ...styles.singleCard,
                overflow: "hidden"
              }}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                  style={{ height: 180, width: "100%" }}
                  source={{
                    uri:
                      "https://api.rezervin.com/uploads/MerchantImages/b740e984-94f3-48bd-b157-1233248961b7.jpg"
                  }}
                />
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Roboto-Medium"
                    }}
                  >
                    {this.state.loading ? (
                      <Text>PLEASE WAIT LOADING...</Text>
                    ) : (
                      this.state.name
                    )}
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
                  <Text style={{ fontSize: 15, fontFamily: "Roboto-Light" }}>
                    {this.state.description}
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <View
            style={{
              ...styles.singleCardContainer
            }}
          >
            <View
              style={{
                ...styles.singleCard,
                overflow: "hidden"
              }}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 20 }}>
                  <Text
                    style={{
                      fontSize: 23,
                      fontFamily: "Roboto-Medium"
                    }}
                  >
                    Menu
                  </Text>

                  {/* FIRST DAY */}
                  {Array(5)
                    .fill(0)
                    .map((res, index) => (
                      <View key={index}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontFamily: "Roboto-Light",
                            paddingVertical: 10,
                            paddingLeft: 10
                          }}
                        >
                          {index + 1} August 2020
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: "Roboto-Medium",
                            paddingLeft: 20
                          }}
                        >
                          Starter
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Roboto-Light",
                            fontSize: 13,
                            paddingLeft: 30
                          }}
                        >
                          - Turkish Borek
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Roboto-Light",
                            fontSize: 13,
                            paddingLeft: 30
                          }}
                        >
                          - Tea
                        </Text>

                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: "Roboto-Medium",
                            paddingLeft: 20
                          }}
                        >
                          Main Dishes
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Roboto-Light",
                            fontSize: 13,
                            paddingLeft: 30
                          }}
                        >
                          - Turkish Kebab
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Roboto-Light",
                            fontSize: 13,
                            paddingLeft: 30
                          }}
                        >
                          - Salad
                        </Text>

                        <Text
                          style={{
                            fontSize: 16,
                            fontFamily: "Roboto-Medium",
                            paddingLeft: 20
                          }}
                        >
                          Desert
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Roboto-Light",
                            fontSize: 13,
                            paddingLeft: 30
                          }}
                        >
                          - Kadayif
                        </Text>
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
                    ))}
                </View>
              </ScrollView>
            </View>
          </View>

          <View
            style={{
              ...styles.singleCardContainer
            }}
          >
            <View
              style={{
                ...styles.singleCard,
                overflow: "hidden"
              }}
            >
              <View style={{ height: "100%" }}>
                <View style={{ padding: 15 }}>
                  <Text style={{ fontFamily: "Roboto-Medium", fontSize: 22 }}>
                    Book Now
                  </Text>
                  <Text style={{ fontFamily: "Roboto-Light", fontSize: 13 }}>
                    *You can book on the hotel's restaurants from up here.
                  </Text>

                  <TouchableOpacity
                    onPress={() =>
                      Animated.timing(this.bottomDateAnimated, {
                        toValue: 70,
                        easing: Easing.linear,
                        duration: 400
                      }).start()
                    }
                    style={{
                      borderWidth: 0.4,
                      borderColor: "gray",
                      borderRadius: 5,
                      marginTop: 20,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Roboto-Light",
                        fontSize: 18,
                        paddingVertical: 5,
                        paddingHorizontal: 5
                      }}
                    >
                      {this.state.reservationDate
                        ? `${this.state.reservationDate.getDate()}/${this.state.reservationDate.getMonth()}/${this.state.reservationDate.getFullYear()}`
                        : "Please Select A Date"}
                    </Text>
                    <AntDesign
                      name="down"
                      size={26}
                      color="gray"
                      style={{ paddingRight: 5 }}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginTop: "auto",

                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTopColor: "gray",
                    borderTopWidth: 0.3,

                    height: 80
                  }}
                >
                  <View
                    style={{
                      paddingLeft: 10,
                      justifyContent: "center"
                    }}
                  >
                    <Text style={{ fontSize: 14, fontFamily: "Roboto-Light" }}>
                      211 $
                    </Text>
                    <Text style={{ fontSize: 14, fontFamily: "Roboto-Light" }}>
                      2 People Dinner
                    </Text>
                    <Text style={{ fontSize: 14, fontFamily: "Roboto-Light" }}>
                      Price breakdown
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("MapBookSuccess")
                    }
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      backgroundColor: "#FF5A5F",
                      marginRight: 10,
                      borderRadius: 5
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 18,
                        fontFamily: "Roboto-Light"
                      }}
                    >
                      Book
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Animated.ScrollView>

        {/* DATE PICKER COMPONENT */}
        <Animated.View
          style={{
            zIndex: 100,
            position: "absolute",
            bottom: this.bottomDateAnimated,
            height: Dimensions.get("window").height / 3,
            width: Dimensions.get("window").width,
            backgroundColor: "white"
          }}
        >
          <View
            style={{
              zIndex: 200,
              height: "15%",
              width: "100%",
              flexDirection: "row-reverse",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderBottomWidth: 0.5,
              borderBottomColor: "gray",
              borderTopWidth: 0.5,
              borderTopColor: "gray"
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Animated.timing(this.bottomDateAnimated, {
                  toValue: -300,
                  duration: 400,
                  easing: Easing.linear
                }).start()
              }
              style={{ padding: 10 }}
            >
              <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <DatePickerIOS
              mode="date"
              date={
                this.state.reservationDate
                  ? this.state.reservationDate
                  : new Date()
              }
              onDateChange={date => {
                this.setState({ reservationDate: date });
              }}
            />
          </View>
        </Animated.View>
      </View>
    );
  }
}

MapScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>Hotel Map</Text>
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
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    position: "relative"
  },
  mapContainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").height
  },
  cardsContainer: {
    height: (Dimensions.get("window").height * 2) / 5,
    width: Dimensions.get("window").width,
    position: "absolute",

    bottom: 20
  },
  singleCardContainer: {
    backgroundColor: "transparent",
    padding: 10,
    width: Dimensions.get("window").width
  },
  singleCard: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: 10
  }
});
