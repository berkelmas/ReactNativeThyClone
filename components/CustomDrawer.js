import React from "react";
import { SafeAreaView, Image, Text, View } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { AntDesign } from "@expo/vector-icons";

const CustomDrawer = props => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Image
          style={{ height: 80, resizeMode: "contain" }}
          source={{
            uri: "https://i.ibb.co/pRdP7sw/digitarc-logo-airbnb.png"
          }}
        />
      </View>

      <DrawerItems {...props} />
      <View
        style={{
          marginTop: "auto",
          backgroundColor: "#F5F7F9",
          height: 50,
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <AntDesign
          name="logout"
          size={30}
          style={{ paddingHorizontal: 15 }}
          color="#484848"
        />
        <Text
          style={{
            fontFamily: "Roboto-Light",
            fontSize: 18,
            paddingHorizontal: 20
          }}
        >
          Log Out
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
