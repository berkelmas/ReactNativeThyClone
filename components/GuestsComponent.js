import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";

const GuestsComponent = props => {
  return (
    <View>
      {/* PERSON AREA */}
      <TouchableOpacity
        onPress={props.handleOpenGuest}
        style={{
          height: 100,
          width: Dimensions.get("window").width,
          padding: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: "gray",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{ fontFamily: "Roboto-Light", fontSize: 26 }}>Guests</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 45,
              fontFamily: "Roboto-Light",
              paddingRight: 4,
              paddingLeft: 5,
              color: "#3E4551"
            }}
          >
            {Object.values(props.guestVal).reduce(
              (prev, curr) => prev + curr,
              0
            )}
          </Text>
          <AntDesign name="user" size={45} color="#3E4551" />
        </View>
      </TouchableOpacity>

      <Animated.View
        style={{
          height: props.guestHeight,
          width: Dimensions.get("window").width,
          backgroundColor: "#f7f7f7",
          padding: props.paddingBottom,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            borderBottomColor: "gray",
            borderBottomWidth: props.borderWidth,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: "Roboto-Light" }}>
            Adult
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={() =>
                props.setGuestVal(prev => ({ ...prev, adult: prev.adult + 1 }))
              }
            >
              <AntDesign
                name="plus"
                style={{ color: "#2E2E2E", marginRight: 10 }}
                size={30}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 40,
                marginRight: 10,
                color: "#3E4551"
              }}
            >
              {props.guestVal.adult}
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.setGuestVal(prev =>
                  prev.adult - 1 >= 0
                    ? { ...prev, adult: prev.adult - 1 }
                    : { ...prev, adult: 0 }
                )
              }
            >
              <AntDesign name="minus" style={{ color: "#2E2E2E" }} size={30} />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            borderBottomColor: "gray",
            borderBottomWidth: props.borderWidth,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <Text style={{ fontSize: 24, fontFamily: "Roboto-Light" }}>
              Child
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Roboto-Light",
                marginLeft: 15
              }}
            >
              (0 - 12)
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={() =>
                props.setGuestVal(prev => ({
                  ...prev,
                  childSmall: prev.childSmall + 1
                }))
              }
            >
              <AntDesign
                name="plus"
                style={{ color: "#2E2E2E", marginRight: 10 }}
                size={30}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 40,
                marginRight: 10,
                color: "#3E4551"
              }}
            >
              {props.guestVal.childSmall}
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.setGuestVal(prev =>
                  prev.childSmall - 1 >= 0
                    ? { ...prev, childSmall: prev.childSmall - 1 }
                    : { ...prev, childSmall: 0 }
                )
              }
            >
              <AntDesign name="minus" style={{ color: "#2E2E2E" }} size={30} />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            borderBottomColor: "gray",
            borderBottomWidth: props.borderWidth,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start"
            }}
          >
            <Text style={{ fontSize: 24, fontFamily: "Roboto-Light" }}>
              Child
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Roboto-Light",
                marginLeft: 15
              }}
            >
              (12 - 18)
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={() =>
                props.setGuestVal(prev => ({
                  ...prev,
                  childBig: prev.childBig + 1
                }))
              }
            >
              <AntDesign
                name="plus"
                style={{ color: "#2E2E2E", marginRight: 10 }}
                size={30}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 40,
                marginRight: 10,
                color: "#3E4551"
              }}
            >
              {props.guestVal.childBig}
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.setGuestVal(prev =>
                  prev.childBig - 1 >= 0
                    ? { ...prev, childBig: prev.childBig - 1 }
                    : { ...prev, childBig: 0 }
                )
              }
            >
              <AntDesign name="minus" style={{ color: "#2E2E2E" }} size={30} />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <View
          style={{
            flex: 1,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: "Roboto-Light" }}>
            Disabled
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={() =>
                props.setGuestVal(prev => ({
                  ...prev,
                  disabled: prev.disabled + 1
                }))
              }
            >
              <AntDesign
                name="plus"
                style={{ color: "#2E2E2E", marginRight: 10 }}
                size={30}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 40,
                marginRight: 10,
                color: "#3E4551"
              }}
            >
              {props.guestVal.disabled}
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.setGuestVal(prev =>
                  prev.disabled - 1 >= 0
                    ? { ...prev, disabled: prev.disabled - 1 }
                    : { ...prev, disabled: 0 }
                )
              }
            >
              <AntDesign name="minus" style={{ color: "#2E2E2E" }} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

GuestsComponent.propTypes = {
  handleOpenGuest: PropTypes.func,
  guestHeight: PropTypes.instanceOf(Animated.Value),
  paddingBottom: PropTypes.any,
  borderWidth: PropTypes.any,
  setGuestVal: PropTypes.func,
  guestVal: PropTypes.object
};

export default GuestsComponent;
