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

const RoomType = props => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.handleRoomOpen}
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
        <Text style={{ fontFamily: "Roboto-Light", fontSize: 25 }}>
          Room Types
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: 10,
            paddingRight: 20
          }}
        >
          <Ionicons name="ios-home" size={50} color="#3E4551" />
        </View>
      </TouchableOpacity>

      <Animated.View
        style={{
          height: props.roomHeight,
          width: Dimensions.get("window").width,
          backgroundColor: "#f7f7f7",
          padding: props.paddingRoom,
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
            borderBottomWidth: props.borderRoom,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: "Roboto-Light" }}>
            Single Room
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
                props.setRoomVal(prev => ({
                  ...prev,
                  singleRoom: !prev.singleRoom
                }))
              }
            >
              <AntDesign
                style={{
                  fontFamily: "Roboto-Light",
                  fontSize: 40,
                  marginRight: 10,
                  color: "#3E4551"
                }}
                name={props.roomVal.singleRoom ? "checksquare" : "checksquareo"}
                size={45}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            borderBottomColor: "gray",
            borderBottomWidth: props.borderRoom,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: "Roboto-Light" }}>
            Family Room
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
                props.setRoomVal(prev => ({
                  ...prev,
                  familyRoom: !prev.familyRoom
                }))
              }
            >
              <AntDesign
                style={{
                  fontFamily: "Roboto-Light",
                  fontSize: 40,
                  marginRight: 10,
                  color: "#3E4551"
                }}
                name={props.roomVal.familyRoom ? "checksquare" : "checksquareo"}
                size={45}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 24, fontFamily: "Roboto-Light" }}>
            King Suite
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
                props.setRoomVal(prev => ({
                  ...prev,
                  kingRoom: !prev.kingRoom
                }))
              }
            >
              <AntDesign
                style={{
                  fontFamily: "Roboto-Light",
                  fontSize: 40,
                  marginRight: 10,
                  color: "#3E4551"
                }}
                name={props.roomVal.kingRoom ? "checksquare" : "checksquareo"}
                size={45}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

RoomType.propTypes = {
  handleRoomOpen: PropTypes.func,
  roomHeight: PropTypes.any,
  paddingRoom: PropTypes.any,
  borderRoom: PropTypes.any,
  setRoomVal: PropTypes.func,
  roomVal: PropTypes.object
};

export default RoomType;
