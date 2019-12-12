import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { Transition } from "react-navigation-fluid-transitions";

const CameraDocumentsScreen = props => {
  const [cameraPermission, setCameraPermission] = React.useState(false);
  const [cameraOpen, setCameraOpen] = React.useState(false);
  const [takenPassportPicture, setTakenPassportPicture] = React.useState(null);
  const [takenIdentityPictures, setTakenIdentityPictures] = React.useState([]);
  const cameraRef = React.useRef(null);

  const requestCameraPermission = async cameraFor => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setCameraPermission(status === "granted" && true);
    setCameraOpen(cameraFor);
  };

  const handleTakePicture = () => {
    if (cameraRef && cameraOpen === "passport") {
      cameraRef.current
        .takePictureAsync({ skipProcessing: true })
        .then(data => setTakenPassportPicture(data.uri));
    } else if (cameraRef && cameraOpen === "identityCard") {
      cameraRef.current
        .takePictureAsync({ skipProcessing: true })
        .then(data => setTakenIdentityPictures(prev => [...prev, data.uri]));
    }
    setCameraOpen(false);
  };

  return (
    <Transition appear="right">
      <View style={styles.container}>
        {cameraOpen && cameraPermission ? (
          <Camera
            ref={cameraRef}
            style={{
              flex: 1
            }}
            type={Camera.Constants.Type.back}
          >
            <TouchableOpacity
              onPress={() => setCameraOpen(false)}
              style={{ position: "absolute", top: 30, left: 30 }}
            >
              <AntDesign name="close" size={32} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleTakePicture()}
              style={{
                position: "absolute",
                bottom: 40,
                left: Dimensions.get("window").width / 2 - 40,
                backgroundColor: "white",
                height: 80,
                width: 80,
                borderRadius: 40
              }}
            />
          </Camera>
        ) : (
          <View style={{ flex: 1 }}>
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
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Ionicons
                  style={{ marginLeft: 20 }}
                  name="md-arrow-back"
                  size={40}
                />
              </TouchableOpacity>

              <View />
            </View>

            {/* MAIN VIEW */}
            <View style={{ padding: 20 }}>
              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 25,
                  paddingBottom: 7
                }}
              >
                Passport Picture
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Roboto-Light",
                  paddingBottom: 10
                }}
              >
                *You should take one side of your passport.
              </Text>

              {!takenPassportPicture ? (
                <TouchableOpacity
                  onPress={() => {
                    requestCameraPermission("passport");
                  }}
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#E6E6E6",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <AntDesign name="plus" size={40} color="#484848" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity>
                  <Image
                    style={{ height: 100, width: 100, borderRadius: 10 }}
                    source={{ uri: takenPassportPicture }}
                  />
                </TouchableOpacity>
              )}

              <Text
                style={{
                  fontFamily: "Roboto-Medium",
                  fontSize: 25,
                  paddingBottom: 7,
                  marginTop: 20
                }}
              >
                Identity Card Pictures
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Roboto-Light",
                  paddingBottom: 10
                }}
              >
                *You should take both sides of your identity card.
              </Text>

              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <TouchableOpacity
                  onPress={() => {
                    requestCameraPermission("identityCard");
                  }}
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#E6E6E6",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                    marginBottom: 10
                  }}
                >
                  <AntDesign name="plus" size={40} color="#484848" />
                </TouchableOpacity>

                {takenIdentityPictures.map((imgUri, index) => (
                  <TouchableOpacity key={index}>
                    <Image
                      style={{
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                        marginRight: 10,
                        marginBottom: 10
                      }}
                      source={{ uri: imgUri }}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity
              onPress={() => props.navigation.navigate("CheckinSuccess")}
              style={{
                height: 90,
                zIndex: 0,
                width: Dimensions.get("window").width,
                backgroundColor: "#FF5A5F",
                marginTop: "auto",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 25,
                  fontFamily: "Roboto-Light"
                }}
              >
                Complete Check-in
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Transition>
  );
};

CameraDocumentsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <Text style={{ fontSize: 25, fontFamily: "Roboto-Light" }}>Documents</Text>
  ),
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons style={{ marginLeft: 10 }} name="md-arrow-back" size={32} />
    </TouchableOpacity>
  )
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CameraDocumentsScreen;
