import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Switch
} from "react-native";
import Animated, { Easing } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useMemoOne } from "use-memo-one";

const LoginScreen = props => {
  const [rememberMeState, setRememberMeState] = React.useState(false);
  const { bottomUsername, bottomPassword } = useMemoOne(
    () => ({
      bottomUsername: new Animated.Value(0),
      bottomPassword: new Animated.Value(0)
    }),
    []
  );

  const handleFocus = param => {
    Animated.timing(param === "username" ? bottomUsername : bottomPassword, {
      toValue: 30,
      easing: Easing.linear,
      duration: 300
    }).start();
  };

  const handleBlur = param => {
    Animated.timing(param === "username" ? bottomUsername : bottomPassword, {
      toValue: 0,
      easing: Easing.linear,
      duration: 300
    }).start();
  };

  const fontSizeUsername = Animated.interpolate(bottomUsername, {
    inputRange: [0, 30],
    outputRange: [22, 18]
  });

  const fontSizePassword = Animated.interpolate(bottomPassword, {
    inputRange: [0, 30],
    outputRange: [22, 18]
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ ...styles.container }}>
        <TouchableOpacity
          style={{ height: 90, justifyContent: "flex-end" }}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons style={{ marginLeft: 20 }} name="md-arrow-back" size={40} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            marginTop: 40
          }}
        >
          <View
            style={{
              width: (Dimensions.get("window").width * 4) / 5,
              paddingVertical: 20
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 25,
                color: "#2E2E2E"
              }}
            >
              Login
            </Text>
          </View>
          <View style={{ ...styles.inputContainer }}>
            <Animated.Text
              style={{
                position: "absolute",
                bottom: bottomUsername,
                fontSize: fontSizeUsername,
                fontFamily: "Roboto-Light",
                color: "#2E2E2E"
              }}
            >
              Username
            </Animated.Text>
            <TextInput
              onFocus={handleFocus.bind(this, "username")}
              onBlur={handleBlur.bind(this, "username")}
              style={{ ...styles.singleInput }}
            />
          </View>

          <View style={{ ...styles.inputContainer, marginVertical: 30 }}>
            <Animated.Text
              style={{
                position: "absolute",
                bottom: bottomPassword,
                fontSize: fontSizePassword,
                fontFamily: "Roboto-Light",
                color: "#2E2E2E"
              }}
            >
              Password
            </Animated.Text>
            <TextInput
              onFocus={handleFocus.bind(this, "password")}
              onBlur={handleBlur.bind(this, "password")}
              style={{ ...styles.singleInput }}
            />
          </View>

          <View style={{ marginTop: 25, alignSelf: "center" }}>
            <View
              style={{
                width: (Dimensions.get("window").width * 4) / 5,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Switch
                trackColor={{ true: "#FF5A5F", false: "blue" }}
                onValueChange={val => setRememberMeState(val)}
                value={rememberMeState}
              />
              <Text
                style={{
                  fontFamily: "Roboto-Light",
                  marginLeft: 10
                }}
              >
                Remember Me?
              </Text>
            </View>
          </View>

          <TouchableOpacity style={{ height: 70, marginTop: 80 }}>
            <View
              style={{
                width: (Dimensions.get("window").width * 4) / 5,
                height: 70,
                borderColor: "#FF5A5F",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "Roboto-Light",
                  color: "#FF5A5F"
                }}
              >
                Sign in
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View
              style={{ height: 0.5, width: 130, backgroundColor: "black" }}
            />
            <Text
              style={{
                paddingHorizontal: 20,
                fontSize: 18,
                fontFamily: "Roboto-Light"
              }}
            >
              Or
            </Text>
            <View
              style={{ height: 0.5, width: 130, backgroundColor: "black" }}
            />
          </View>

          <TouchableOpacity>
            <View
              style={{
                width: (Dimensions.get("window").width * 4) / 5,
                height: 70,
                borderColor: "#484848",
                borderWidth: 1,
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "Roboto-Light",
                  color: "#484848"
                }}
              >
                Sign up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

LoginScreen.navigationOptions = () => ({
  header: null
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start"
  },
  inputContainer: {
    position: "relative"
  },
  singleInput: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    width: (Dimensions.get("window").width * 4) / 5,
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 20,
    fontSize: 20,
    fontFamily: "Roboto-Light"
  }
});

export default LoginScreen;
