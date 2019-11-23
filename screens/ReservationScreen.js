import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
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
      {/* RESERVATION TOP DATE SELECTION */}
      <ReservationTop
        openDatePicker={openDatePicker}
        startDate={startDate}
        endDate={endDate}
      />

      {/* PERSON AREA */}
      <TouchableOpacity
        style={{
          height: 100,
          width: Dimensions.get("window").width,
          padding: 10,
          borderBottomWidth: 0.5,
          borderBottomColor: "gray"
        }}
      >
        <Text style={{ fontFamily: "Roboto-Light", fontSize: 20 }}>Guests</Text>
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
              paddingRight: 8,
              paddingLeft: 5,
              color: "#0d47a1"
            }}
          >
            0
          </Text>
          <Ionicons name="md-person" size={45} color="#0d47a1" />
        </View>
        <View style={{ height: 4, width: 80, backgroundColor: "#0d47a1" }} />
      </TouchableOpacity>

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
