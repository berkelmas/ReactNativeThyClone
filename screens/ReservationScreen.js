import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  DatePickerIOS
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ReservationScreen = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date().getDate() + 1);
  const handleDateChange = date => {
    setStartDate(date);
  };

  return (
    <View style={{ ...styles.container }}>
      <TouchableOpacity>
        <View>
          <Text>Start Date</Text>
        </View>
      </TouchableOpacity>
      <DatePickerIOS
        mode="date"
        date={startDate}
        onDateChange={handleDateChange}
      />
      <Text>{startDate.toLocaleDateString()}</Text>
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
