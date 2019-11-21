import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { useMemoOne } from "use-memo-one";
import { Ionicons } from "@expo/vector-icons";
import CustomDatePicker from "../components/CustomDatePicker";
import ReservationTop from "../components/ReservationTop";

const ReservationScreen = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const handleStartDateChange = date => {
    setStartDate(date);
  };
  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const { endDateBottom, startDateBottom } = useMemoOne(
    () => ({
      endDateBottom: new Animated.Value(-300),
      startDateBottom: new Animated.Value(-300)
    }),
    []
  );

  const openDatePicker = selection => {
    if (selection === "end") {
      Animated.timing(endDateBottom, {
        toValue: 0,
        duration: 400,
        easing: Easing.back()
      }).start();
      Animated.timing(startDateBottom, {
        toValue: -300,
        duration: 400,
        easing: Easing.back()
      }).start();
    } else if (selection === "start") {
      Animated.timing(startDateBottom, {
        toValue: 0,
        duration: 400,
        easing: Easing.back()
      }).start();
      Animated.timing(endDateBottom, {
        toValue: -300,
        duration: 400,
        easing: Easing.back()
      }).start();
    }
  };

  const closeDatePicker = selection => {
    if (selection === "end") {
      Animated.timing(endDateBottom, {
        toValue: -300,
        duration: 400,
        easing: Easing.back()
      }).start();
    } else if (selection === "start") {
      Animated.timing(startDateBottom, {
        toValue: -300,
        duration: 400,
        easing: Easing.back()
      }).start();
    }
  };

  return (
    <View style={{ ...styles.container }}>
      <ReservationTop
        openDatePicker={openDatePicker}
        startDate={startDate}
        endDate={endDate}
      />

      {/* END DATE */}
      <CustomDatePicker
        handleClose={closeDatePicker.bind(this, "end")}
        pos={endDateBottom}
        startDate={endDate}
        handleDateChange={handleEndDateChange}
      />

      {/* START DATE */}
      <CustomDatePicker
        handleClose={closeDatePicker.bind(this, "start")}
        pos={startDateBottom}
        startDate={startDate}
        handleDateChange={handleStartDateChange}
      />
    </View>
  );
};

ReservationScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <Text style={{ fontSize: 25, fontFamily: "Roboto-Light" }}>
      Reservation
    </Text>
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
    flex: 1,
    backgroundColor: "white"
  }
});

export default ReservationScreen;
