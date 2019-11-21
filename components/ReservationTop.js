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
          ...styles.singleTouchable,
          borderRightColor: "#f7f7f7",
          borderRightWidth: 0.5
        }}
      >
        <View style={styles.topTextsContainer}>
          <Text style={styles.directionText}>Check-in</Text>
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

      <TouchableOpacity
        onPress={props.openDatePicker.bind(this, "end")}
        style={styles.singleTouchable}
      >
        <View style={styles.topTextsContainer}>
          <Text style={styles.directionText}>Check-out</Text>
          <View style={styles.secondTextsContainer}>
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
    backgroundColor: "#2e2e2e"
  },
  topTextsContainer: {
    backgroundColor: "#2E2E2E",
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
    height: "100%"
  },
  directionText: {
    color: "#f7f7f7",
    fontSize: 20,
    fontFamily: "Roboto-Light",
    paddingLeft: 23,
    marginTop: 20
  },
  secondTextsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10
  },
  dayTextContainer: {
    fontFamily: "Roboto-Light",
    fontSize: 85,
    color: "white"
  },
  monthTextContainer: {
    color: "white",
    fontFamily: "Roboto-Light",
    fontSize: 40
  },
  yearTextContainer: {
    color: "white",
    fontFamily: "Roboto-Light",
    fontSize: 25
  }
});

ReservationTop.propTypes = {
  openDatePicker: PropTypes.func,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date)
};

export default ReservationTop;
