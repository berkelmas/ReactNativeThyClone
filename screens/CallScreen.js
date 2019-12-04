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

const CallScreen = () => {
  const handleCall = uri => {
    Linking.openURL(uri);
    // "tel:+905073978264"
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity onPress={handleCall.bind(this, "tel:+905073978264")}>
          <CallComponent
            img={{
              uri:
                "https://i.pinimg.com/originals/9d/42/b1/9d42b1779351931414dc45c2ac03aa4c.jpg"
            }}
            bigTitle="Reservation"
            smallContent="**You can ask for general help about the hotel here."
          />
        </TouchableOpacity>
        <CallComponent
          img={{
            uri:
              "https://www.compasshospitality.com/wp-content/uploads/2018/07/SOI7_SUPERIOR_REVISE_22022018.jpg"
          }}
          bigTitle="House Keeping"
          smallContent="**You can ask for general help about the hotel here."
        />
        <CallComponent
          img={{
            uri:
              "https://cdn-ak.f.st-hatena.com/images/fotolife/h/healthblog232/20161114/20161114155023.jpg"
          }}
          bigTitle="Infirmary"
          smallContent="**You can ask for general help about the hotel here."
        />
        <CallComponent
          img={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzleeaZcQD-Q52OHmfADLXG2VSdgCshtTX3Z0s7QgC_rAssLA&s"
          }}
          bigTitle="Technical Support"
          smallContent="**You can ask for general help about the hotel here."
        />
      </ScrollView>
    </View>
  );
};

CallScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <Text style={{ fontSize: 25, fontFamily: "Roboto-Light" }}>
      Important Numbers
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
    alignItems: "center"
  }
});

export default CallScreen;
