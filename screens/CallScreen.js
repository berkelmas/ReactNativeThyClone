import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "expo";
import CallComponent from "../components/CallComponent";

const CallScreen = props => {
  const handleCall = uri => {
    Linking.openURL(uri);
    // "tel:+905073978264"
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View
        style={{
          height: 90,
          justifyContent: "flex-end",
          backgroundColor: "transparent"
        }}
      >
        <TouchableOpacity
          style={{ marginLeft: 25 }}
          onPress={() => props.navigation.toggleDrawer()}
        >
          <Ionicons name="ios-menu" size={42} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <TouchableOpacity
          style={styles.shadow}
          onPress={handleCall.bind(this, "tel:+905073978264")}
        >
          <CallComponent
            img={{
              uri:
                "https://i.pinimg.com/originals/9d/42/b1/9d42b1779351931414dc45c2ac03aa4c.jpg"
            }}
            bigTitle="Reservation"
            smallContent="**You can ask for general help about the hotel here."
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shadow}
          onPress={handleCall.bind(this, "tel:+905073978264")}
        >
          <CallComponent
            img={{
              uri:
                "https://www.compasshospitality.com/wp-content/uploads/2018/07/SOI7_SUPERIOR_REVISE_22022018.jpg"
            }}
            bigTitle="House Keeping"
            smallContent="**You can ask for general help about the hotel here."
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shadow}
          onPress={handleCall.bind(this, "tel:+905073978264")}
        >
          <CallComponent
            img={{
              uri:
                "https://cdn-ak.f.st-hatena.com/images/fotolife/h/healthblog232/20161114/20161114155023.jpg"
            }}
            bigTitle="Infirmary"
            smallContent="**You can ask for general help about the hotel here."
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shadow}
          onPress={handleCall.bind(this, "tel:+905073978264")}
        >
          <CallComponent
            img={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzleeaZcQD-Q52OHmfADLXG2VSdgCshtTX3Z0s7QgC_rAssLA&s"
            }}
            bigTitle="Technical Support"
            smallContent="**You can ask for general help about the hotel here."
          />
        </TouchableOpacity>
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

CallScreen.navigationOptions = () => ({
  header: null
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12
  }
});

export default CallScreen;
