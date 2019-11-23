import React, { useRef } from "react";
import {
  Button,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import MapView, {
  Animated as AnimatedMapView,
  AnimatedRegion,
  Marker
} from "react-native-maps";
import Animated, { Easing } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

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
    name: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore delectus repellat aspernatur officia magni a excepturi repellendus, impedit hic aut natus blanditiis id! Nihil, architecto. Reiciendis molestiae repudiandae similique."
  };

  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.scrollRef = React.createRef();
    this.transYAnimated = new Animated.Value(400);
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
      this.setState({ name: "berkelmas", loading: false });
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
                  style={{ height: 200, width: "100%" }}
                  source={{
                    uri:
                      "https://bocadolobo.com/blog/wp-content/uploads/2017/12/luxury-restaurants-in-Paris-maison-et-objet.jpg"
                  }}
                />
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Roboto-Light"
                    }}
                  >
                    {this.state.loading ? (
                      <Text>PLEASE WAIT LOADING...</Text>
                    ) : (
                      this.state.name
                    )}
                  </Text>
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
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "Roboto-Light"
                    }}
                  >
                    Book Now!
                  </Text>
                  <Text style={{ fontSize: 15, fontFamily: "Roboto-Light" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum veritatis neque itaque? Quia blanditiis minima,
                    repellat iusto eos sunt aperiam consectetur, ullam commodi
                    quis ab, fugit neque adipisci corrupti tempora.\
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
                ...styles.singleCard
              }}
            />
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}

MapScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <Image
      style={{ height: 100, width: 120, resizeMode: "contain" }}
      source={{
        uri:
          "https://www.freepnglogos.com/uploads/turkish-air-lines-logo-png-2.png"
      }}
    />
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
    marginBottom: 20,
    bottom: 0
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
