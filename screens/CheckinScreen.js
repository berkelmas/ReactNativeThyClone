import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Dimensions,
  Picker,
  Animated,
  ScrollView,
  TextInput,
  DatePickerIOS
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useMemoOne } from "use-memo-one";

const CheckinScreen = props => {
  const [
    existingReservationState,
    setExistingReservationState
  ] = React.useState(false);

  const [reservations, setReservations] = React.useState([
    { key: 232, label: "PNR: 2312321131", value: "2312321131" },
    { key: 132, label: "PNR: 756456756456", value: "756456756456" }
  ]);
  const [choosenReservation, setChoosenReservation] = React.useState(null);
  const [generalInformations, setGeneralInformations] = React.useState({
    pnrNumber: null,
    identityNumber: null,
    name: null,
    surname: null,
    birthDate: new Date(),
    origin: null
  });
  const {
    reservationBottom,
    existingReservationInputHeight,
    birthDateBottom
  } = useMemoOne(() => ({
    reservationBottom: new Animated.Value(-300),
    existingReservationInputHeight: new Animated.Value(40),
    birthDateBottom: new Animated.Value(-300)
  }));

  const handleDateChange = date => {
    setGeneralInformations(prev => ({ ...prev, birthDate: date }));
  };

  const closeDatePicker = () => {
    Animated.timing(birthDateBottom, { toValue: -300 }).start();
  };

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={styles.container}>
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
          <Ionicons style={{ marginLeft: 20 }} name="ios-menu" size={40} />
        </TouchableOpacity>

        <View />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20
        }}
      >
        <Text style={{ fontFamily: "Roboto-Light", fontSize: 18 }}>
          I have an existing Reservation
        </Text>
        <Switch
          trackColor={{ true: "#FF5A5F", false: "blue" }}
          onValueChange={val => setExistingReservationState(val)}
          value={existingReservationState}
        />
      </View>

      {/* EXISTING RESERVATIONS */}
      {existingReservationState && (
        <View style={{ paddingHorizontal: 20 }}>
          <AnimatedTouchable
            onPress={() =>
              Animated.timing(reservationBottom, { toValue: 0 }).start()
            }
            style={{
              marginTop: 20,
              borderWidth: 0.5,
              borderColor: "gray",
              borderRadius: 10,
              height: existingReservationInputHeight,
              opacity: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 6,
              paddingLeft: 10
            }}
          >
            <Text
              style={{
                color: "black",
                fontFamily: "Roboto-Light",
                fontSize: 18
              }}
            >
              {choosenReservation ? choosenReservation : "Please Select One"}
            </Text>
            <AntDesign name="down" size={28} color="gray" />
          </AnimatedTouchable>
        </View>
      )}

      {!existingReservationState && (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Roboto-Light", fontSize: 18 }}>
              PNR Number
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 0.3,
                borderBottomColor: "gray",
                marginTop: 10,
                fontSize: 18,
                fontFamily: "Roboto-Light"
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Roboto-Light", fontSize: 18 }}>
              Identity Number
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 0.3,
                borderBottomColor: "gray",
                marginTop: 10,
                fontSize: 18,
                fontFamily: "Roboto-Light"
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Roboto-Light", fontSize: 18 }}>
              Name
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 0.3,
                borderBottomColor: "gray",
                marginTop: 10,
                fontSize: 18,
                fontFamily: "Roboto-Light"
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Roboto-Light", fontSize: 18 }}>
              Surname
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 0.3,
                borderBottomColor: "gray",
                marginTop: 10,
                fontSize: 18,
                fontFamily: "Roboto-Light"
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Roboto-Light", fontSize: 18 }}>
              Birth Date
            </Text>
            <TouchableOpacity
              onPress={() =>
                Animated.timing(birthDateBottom, { toValue: 0 }).start()
              }
              style={{
                marginTop: 10,
                borderBottomColor: "gray",
                borderBottomWidth: 0.5
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto-Light",
                  fontSize: 17,
                  paddingBottom: 3,
                  color: "black"
                }}
              >
                {generalInformations.birthDate
                  ? `${generalInformations.birthDate.getDate()} / ${generalInformations.birthDate.getMonth() +
                      1} / ${generalInformations.birthDate.getFullYear()}`
                  : "Select A Date"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

      {/* PICKER COMPONENT */}
      <Animated.View
        style={{
          zIndex: 100,
          position: "absolute",
          bottom: reservationBottom,
          height: Dimensions.get("window").height / 3,
          width: Dimensions.get("window").width,
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            height: "15%",
            width: "100%",
            flexDirection: "row-reverse",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            borderBottomWidth: 0.5,
            borderBottomColor: "gray",
            borderTopWidth: 0.5,
            borderTopColor: "gray"
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Animated.timing(reservationBottom, { toValue: -300 }).start()
            }
            style={{ padding: 10 }}
          >
            <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Picker
            selectedValue={choosenReservation}
            style={{ height: "100%", width: "100%" }}
            onValueChange={(itemValue, itemIndex) =>
              setChoosenReservation(itemValue)
            }
            value={choosenReservation}
          >
            <Picker.Item label="Please Select One" value={null} />
            {reservations.map(res => (
              <Picker.Item key={res.key} label={res.label} value={res.value} />
            ))}
          </Picker>
        </View>
      </Animated.View>

      {/* DATE PICKER COMPONENT */}
      <Animated.View
        style={{
          zIndex: 100,
          position: "absolute",
          bottom: birthDateBottom,
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
            backgroundColor: "#f5f5f5",
            borderBottomWidth: 0.5,
            borderBottomColor: "gray",
            borderTopWidth: 0.5,
            borderTopColor: "gray"
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Animated.timing(birthDateBottom, { toValue: -300 }).start()
            }
            style={{ padding: 10 }}
          >
            <Text style={{ fontSize: 20, fontFamily: "Roboto-Light" }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <DatePickerIOS
            mode="date"
            date={generalInformations.birthDate}
            onDateChange={date =>
              setGeneralInformations(prev => ({ ...prev, birthDate: date }))
            }
          />
        </View>
      </Animated.View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("CameraDocuments")}
        style={{
          backgroundColor: "#FF5A5F",
          height: 90,
          width: Dimensions.get("window").width,
          alignItems: "center",
          justifyContent: "center",
          marginTop: "auto"
        }}
      >
        <Text
          style={{ fontFamily: "Roboto-Light", fontSize: 25, color: "white" }}
        >
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CheckinScreen;
