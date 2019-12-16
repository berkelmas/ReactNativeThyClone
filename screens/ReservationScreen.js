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
import { Calendar } from "react-native-calendars";

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

  const [selectedStartDate, setSelectedStartDate] = React.useState({
    [`${new Date().getFullYear()}-${new Date().getMonth() +
      1}-${new Date().getDate()}`]: {
      selected: true,
      marked: true
    }
  });

  const [selectedEndDate, setSelectedEndDate] = React.useState({
    [`${new Date().getFullYear()}-${new Date().getMonth() +
      1}-${new Date().getDate()}`]: {
      selected: true,
      marked: true
    }
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
      endDateBottom.setValue(100);
      startDateBottom.setValue(-300);
    } else if (selection === "start") {
      startDateBottom.setValue(100);
      endDateBottom.setValue(-300);
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
          <Ionicons
            style={{ marginLeft: 10 }}
            name="ios-menu"
            size={42}
            color="#484848"
          />
        </TouchableOpacity>

        <View />
      </View>

      <Text
        style={{
          fontSize: 25,
          fontFamily: "Roboto-Medium",
          padding: 10,
          color: "#484848"
        }}
      >
        New Reservation
      </Text>

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

      <TouchableOpacity
        onPress={() => props.navigation.navigate("ReservationSecond")}
        style={{
          height: 80,
          backgroundColor: "#FF5A5F",
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
            color: "white",
            fontSize: 25,
            fontFamily: "Roboto-Light"
          }}
        >
          See Deals
        </Animated.Text>
      </TouchableOpacity>

      {/* START DATE PICKER COMPONENT */}
      <Animated.View
        style={{
          zIndex: 100,
          position: "absolute",
          bottom: startDateBottom,
          height: Dimensions.get("window").height / 3,
          width: Dimensions.get("window").width,
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            zIndex: 200,
            height: "15%",
            width: "100%",
            flexDirection: "row-reverse",
            alignItems: "center",
            backgroundColor: "#F5F8F9",
            borderBottomWidth: 0.5,
            borderBottomColor: "gray",
            borderTopWidth: 0.5,
            borderTopColor: "gray"
          }}
        >
          <TouchableOpacity
            onPress={() =>
              // Animated.timing(birthDateBottom, { toValue: -300 }).start()
              startDateBottom.setValue(-300)
            }
            style={{ padding: 10 }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Roboto-Light",
                color: "#FF5A5F"
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: "95%" }}>
          <Calendar
            // Initially visible month. Default = Date()
            current={new Date()}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              setSelectedStartDate({
                [day.dateString]: { selected: true, marked: true }
              });
              setStartDate(new Date(day.dateString));
              startDateBottom.setValue(-300);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={"yyyy MM"}
            theme={{
              arrowColor: "#FF5A5F",
              selectedDayBackgroundColor: "#FF5A5F",
              textSectionTitleColor: "#FF5A5F",
              selectedDayTextColor: "white",
              todayTextColor: "#FF5A5F"
            }}
            markedDates={selectedStartDate}
          />
          <View
            style={{ height: 100, width: "100%", backgroundColor: "white" }}
          />
        </View>
      </Animated.View>

      {/* END DATE PICKER COMPONENT */}
      <Animated.View
        style={{
          zIndex: 100,
          position: "absolute",
          bottom: endDateBottom,
          height: Dimensions.get("window").height / 3,
          width: Dimensions.get("window").width,
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            zIndex: 200,
            height: "15%",
            width: "100%",
            flexDirection: "row-reverse",
            alignItems: "center",
            backgroundColor: "#F5F8F9",
            borderBottomWidth: 0.5,
            borderBottomColor: "gray",
            borderTopWidth: 0.5,
            borderTopColor: "gray"
          }}
        >
          <TouchableOpacity
            onPress={() =>
              // Animated.timing(birthDateBottom, { toValue: -300 }).start()
              endDateBottom.setValue(-300)
            }
            style={{ padding: 10 }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Roboto-Light",
                color: "#FF5A5F"
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: "95%" }}>
          <Calendar
            // Initially visible month. Default = Date()
            current={new Date()}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={day => {
              setEndDate(new Date(day.dateString));
              endDateBottom.setValue(-300);
            }}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={"yyyy MM"}
            theme={{
              arrowColor: "#FF5A5F",
              selectedDayBackgroundColor: "#FF5A5F",
              textSectionTitleColor: "#FF5A5F",
              selectedDayTextColor: "white",
              todayTextColor: "#FF5A5F"
            }}
            markedDates={selectedEndDate}
          />
          <View
            style={{ height: 100, width: "100%", backgroundColor: "white" }}
          />
        </View>
      </Animated.View>
    </View>
  );
};

ReservationScreen.navigationOptions = ({ navigation }) => ({
  header: null
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default ReservationScreen;
