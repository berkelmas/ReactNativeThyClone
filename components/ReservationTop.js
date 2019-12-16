import React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

const ReservationTop = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.openDatePicker.bind(this, "start")}
        style={{
          ...styles.singleTouchable
        }}
      >
        <View style={styles.topTextsContainer}>
          <Text style={{ ...styles.directionText, paddingLeft: 10 }}>
            Check-in
          </Text>
          <View style={styles.secondTextsContainer}>
            <Text style={styles.dayTextContainer}>
              {props.startDate.getUTCDate()}
            </Text>
            <View>
              <Text style={styles.monthTextContainer}>
                {props.startDate.toLocaleDateString("default", {
                  month: "short"
                })}
              </Text>
              <Text style={styles.yearTextContainer}>
                {props.startDate.getFullYear()}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          width: 1,
          height: "100%",
          backgroundColor: "#00A699",
          zIndex: 1000,
          transform: [{ rotate: "25deg" }]
        }}
      ></View>

      <TouchableOpacity
        onPress={props.openDatePicker.bind(this, "end")}
        style={styles.singleTouchable}
      >
        <View style={styles.topTextsContainer}>
          <Text
            style={{
              ...styles.directionText,
              textAlign: "right",
              paddingRight: 10
            }}
          >
            Check-out
          </Text>
          <View
            style={{
              ...styles.secondTextsContainer,
              justifyContent: "flex-end",
              paddingRight: 10
            }}
          >
            <Text style={styles.dayTextContainer}>
              {props.endDate.getUTCDate()}
            </Text>
            <View>
              <Text style={styles.monthTextContainer}>
                {props.endDate.toLocaleDateString("default", {
                  month: "short"
                })}
              </Text>
              <Text style={styles.yearTextContainer}>
                {props.endDate.getFullYear()}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  singleTouchable: {
    height: Dimensions.get("window").height / 6,
    backgroundColor: "#3E4551"
  },
  topTextsContainer: {
    backgroundColor: "white",
    width: Dimensions.get("window").width / 2,
    height: "100%"
  },
  directionText: {
    color: "#00A699",
    fontSize: 20,
    fontFamily: "Roboto-Light",
    marginTop: 20
  },
  secondTextsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -10
  },
  dayTextContainer: {
    fontFamily: "Roboto-Light",
    fontSize: 75,
    color: "#484848"
  },
  monthTextContainer: {
    color: "#484848",
    fontFamily: "Roboto-Light",
    fontSize: 30
  },
  yearTextContainer: {
    color: "#484848",
    fontFamily: "Roboto-Light",
    fontSize: 20
  }
});

ReservationTop.propTypes = {
  openDatePicker: PropTypes.func,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date)
};

export default ReservationTop;
