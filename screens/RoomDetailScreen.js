import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
  Animated
} from "react-native";
import MapView, {
  Animated as AnimatedMapView,
  AnimatedRegion,
  Marker
} from "react-native-maps";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useMemoOne } from "use-memo-one";
import ImageViewer from "react-native-image-zoom-viewer";
import { descriptions } from "../assets/data/descriptions";
import { amenities } from "../assets/data/amenities";
import { Transition } from "react-navigation-fluid-transitions";

let nonStateImages = [];

class RoomDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: new AnimatedRegion({
        latitude: 37.099399,
        longitude: 27.493154,
        latitudeDelta: 0.006,
        longitudeDelta: 0.008
      }),
      images: [],
      imageIndex: 0,
      modalVisible: false,
      imageHeight: new Animated.Value(Dimensions.get("window").height / 3)
    };
  }

  componentDidMount() {
    this.setState({ images: this.props.navigation.getParam("item").images });
    let newImages = [];
    this.props.navigation.getParam("item").images.map((item, index) => {
      newImages.push({ url: item.uri });
    });
    nonStateImages = newImages;
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={{ position: "relative" }}>
          <Transition shared={this.props.navigation.getParam("pictureId")}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.images.map((img, index) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.setState({ imageIndex: index, modalVisible: true });
                  }}
                  key={index}
                  style={{
                    height: this.state.imageHeight,
                    width: Dimensions.get("window").width
                  }}
                >
                  <View>
                    <Animated.Image
                      key={index}
                      source={img}
                      style={{
                        height: this.state.imageHeight,
                        width: Dimensions.get("window").width
                      }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </ScrollView>
          </Transition>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ReservationSecond")}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: "transparent",
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
            <EvilIcons name="close" size={40} color="white" />
          </TouchableOpacity>
        </View>

        <ScrollView
          onScroll={e => {
            const offsetY = e.nativeEvent.contentOffset.y;
            if (offsetY < 200) {
              this.state.imageHeight.setValue(
                Dimensions.get("window").height / 3 - offsetY / 2
              );

              //console.log(this.state.imageHeight._value);
            }
          }}
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={{ padding: 18 }}
        >
          <Text style={{ fontSize: 30, fontFamily: "Roboto-Light" }}>
            {this.props.navigation.getParam("item").type}
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
            style={{
              marginTop: 22,
              fontFamily: "Roboto-Light",
              fontSize: 18
            }}
          >
            Entire Suit hosted by Turkish Airlines.
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontFamily: "Roboto-Light",
              fontSize: 18
            }}
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
            style={{
              height: Dimensions.get("window").height / 3,
              width: "100%"
            }}
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
              style={{ height: "80%", width: "100%", borderRadius: 10 }}
              region={this.state.region}
            >
              <Marker
                coordinate={{ latitude: 37.099399, longitude: 27.493154 }}
              >
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
            <Transition shared="button">
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("ReservationLastDetails", {
                    item: this.props.navigation.getParam("item")
                  })
                }
                style={{
                  backgroundColor: "#FF5A5F",
                  marginBottom: 10,
                  borderRadius: 10,
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Transition shared="text">
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
                </Transition>
              </TouchableOpacity>
            </Transition>
          </View>
        </ScrollView>

        <Modal visible={this.state.modalVisible} transparent={true}>
          <TouchableOpacity
            onPress={() => this.setState({ modalVisible: false })}
            style={{ position: "absolute", top: 20, right: 20, zIndex: 1000 }}
          >
            <AntDesign name="close" size={32} color="white" />
          </TouchableOpacity>
          <ImageViewer
            index={this.state.imageIndex}
            imageUrls={nonStateImages}
            enableSwipeDown={false}
          />
        </Modal>
      </View>
    );
  }
}

RoomDetailScreen.navigationOptions = ({ navigation }) => ({
  headerShown: false
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RoomDetailScreen;
