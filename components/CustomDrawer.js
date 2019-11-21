import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Text,
  View
} from "react-native";
import { DrawerItems } from "react-navigation-drawer";

const CustomDrawer = props => {
  return (
    <ScrollView
      contentContainerStyle={{
        height: Dimensions.get("window").height
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Image
          style={{ height: 100, resizeMode: "contain" }}
          source={{
            uri:
              "https://images.hertz.com/partners/360x160_Turkish_logo_July2019.png"
          }}
        />

        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default CustomDrawer;
