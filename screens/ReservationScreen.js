import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing,
  ScrollView
} from "react-native";
import { useMemoOne } from "use-memo-one";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CustomDatePicker from "../components/CustomDatePicker";
import ReservationTop from "../components/ReservationTop";
import GuestsComponent from "../components/GuestsComponent";
import RoomType from "../components/RoomType";
import { Transition } from "react-navigation-fluid-transitions";

const ReservationScreen = props => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [guestVal, setGuestVal] = React.useState({
    adult: 0,
    childSmall: 0,
    childBig: 0,
    disabled: 0
  });
  const [roomVal, setRoomVal] = React.useState({
    singleRoom: false,
    familyRoom: false,
    kingRoom: false
  });

  const {
    startDateBottom,
    endDateBottom,
    guestHeight,
    roomHeight
  } = useMemoOne(
    () => ({
      startDateBottom: new Animated.Value(-300),
      endDateBottom: new Animated.Value(-300),
      guestHeight: new Animated.Value(0),
      roomHeight: new Animated.Value(0)
    }),
    []
  );

  const handleStartDateChange = date => {
    setStartDate(date);
  };
  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const paddingBottom = guestHeight.interpolate({
    inputRange: [0, 400],
    outputRange: [0, 10]
  });

  const borderWidth = guestHeight.interpolate({
    inputRange: [0, 400],
    outputRange: [0, 0.3]
  });

  const paddingRoom = roomHeight.interpolate({
    inputRange: [0, 300],
    outputRange: [0, 10]
  });

  const borderRoom = roomHeight.interpolate({
    inputRange: [0, 300],
    outputRange: [0, 0.3]
  });

  const openDatePicker = selection => {
    if (selection === "end") {
      Animated.timing(endDateBottom, {
        toValue: 0,
        duration: 400
      }).start();
      Animated.timing(startDateBottom, {
        toValue: -300,
        duration: 400
      }).start();
    } else if (selection === "start") {
      Animated.timing(startDateBottom, {
        toValue: 0,
        duration: 400
      }).start();
      Animated.timing(endDateBottom, {
        toValue: -300,
        duration: 400
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

  const handleOpenGuest = () => {
    if (guestHeight._value === 0) {
      Animated.timing(guestHeight, { toValue: 300 }).start();
    } else {
      Animated.timing(guestHeight, { toValue: 0 }).start();
    }
  };

  const handleRoomOpen = () => {
    if (roomHeight._value === 0) {
      Animated.timing(roomHeight, { toValue: 300 }).start();
    } else {
      Animated.timing(roomHeight, { toValue: 0 }).start();
    }
  };

  return (
    <View style={{ ...styles.container }}>
      <View
        style={{
          height: 90,
          backgroundColor: "white",
          width: Dimensions.get("window").width,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
          <Ionicons style={{ marginLeft: 10 }} name="ios-menu" size={32} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "Roboto-Light",
            marginBottom: 8,
            marginRight: 5
          }}
        >
          Rooms{" "}
        </Text>
        <View />
      </View>

      {/* RESERVATION TOP DATE SELECTION */}
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <ReservationTop
          openDatePicker={openDatePicker}
          startDate={startDate}
          endDate={endDate}
        />

        <GuestsComponent
          handleOpenGuest={handleOpenGuest}
          guestHeight={guestHeight}
          paddingBottom={paddingBottom}
          setGuestVal={setGuestVal}
          guestVal={guestVal}
          borderWidth={borderWidth}
        />

        {/* ROOM TYPE COMPONENT */}
        <RoomType
          handleRoomOpen={handleRoomOpen}
          roomHeight={roomHeight}
          paddingRoom={paddingRoom}
          borderRoom={borderRoom}
          setRoomVal={setRoomVal}
          roomVal={roomVal}
        />
      </ScrollView>

      <Transition shared="seedeals">
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ReservationSecond")}
          style={{
            height: 80,
            backgroundColor: "white",
            width: Dimensions.get("window").width,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
        >
          <Animated.Text
            style={{
              color: "#2E2E2E",
              fontSize: 25,
              fontFamily: "Roboto-Light"
            }}
          >
            See Deals
          </Animated.Text>
        </TouchableOpacity>
      </Transition>

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
