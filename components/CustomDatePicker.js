import React from "react";
import {
  View,
  TouchableOpacity,
  DatePickerIOS,
  Text,
  Dimensions
} from "react-native";
import Animated from "react-native-reanimated";
import PropTypes from "prop-types";

const CustomDatePicker = props => {
  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: props.pos,
        width: (Dimensions.get("window").width * 5) / 6,
        marginLeft: Dimensions.get("window").width / 12,
        borderColor: "gray",
        borderRadius: 10,
        borderWidth: 0.5
      }}
    >
      <TouchableOpacity onPress={props.handleClose}>
        <View
          style={{
            marginLeft: "auto",
            marginTop: 10,
            marginRight: 20
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Light" }}>Done</Text>
        </View>
      </TouchableOpacity>
      <DatePickerIOS
        mode="date"
        date={props.startDate}
        onDateChange={props.handleDateChange}
        minimumDate={new Date()}
      />
    </Animated.View>
  );
};

CustomDatePicker.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func,
  pos: PropTypes.instanceOf(Animated.Value),
  minimumDate: PropTypes.instanceOf(Date)
};

export default CustomDatePicker;
