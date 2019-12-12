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
        <View style={{ padding: 10 }}>
          <Image
            style={{ height: 120, resizeMode: "contain" }}
            source={{
              uri: "https://digitarc.net/images/digitarc-logo-icon.png"
            }}
          />
        </View>

        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default CustomDrawer;
