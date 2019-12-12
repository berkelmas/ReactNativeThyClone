import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

const CallComponent = props => {
  return (
    <View style={styles.singleContainer}>
      <Image style={styles.singleImage} source={props.img} />
      <View style={styles.singleOverlay} />
      <View style={styles.singleContent}>
        <Text style={{ ...styles.contentText, fontSize: 30 }}>
          {props.bigTitle}
        </Text>
        <Text style={{ ...styles.contentText, fontSize: 13 }}>
          {props.smallContent}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  singleContainer: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 3,
    position: "relative",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden"
  },
  singleImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    resizeMode: "cover",
    top: 0,
    left: 0,
    zIndex: 0
  },
  singleOverlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.3,
    zIndex: 2,

    justifyContent: "center",
    alignItems: "center"
  },
  singleContent: {
    position: "absolute",
    zIndex: 5,
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  contentText: {
    fontFamily: "Roboto-Light",
    color: "white"
  }
});

export default CallComponent;
