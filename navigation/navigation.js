import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createFluidNavigator } from "react-navigation-fluid-transitions";

import CustomDrawer from "../components/CustomDrawer";

/// SCREENS
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ReservationScreen from "../screens/ReservationScreen";
import MapScreen from "../screens/MapScreen";
import CheckinScreen from "../screens/CheckinScreen";
import CallScreen from "../screens/CallScreen";
import ReservationSecondScreen from "../screens/ReservationSecondScreen";
import RoomDetailScreen from "../screens/RoomDetailScreen";
import ReservationLastDetailsScreen from "../screens/ReservationLastDetailsScreen";
import PaymentChooseScreen from "../screens/PaymentChooseScreen";
import CreditCardScreen from "../screens/CreditCardScreen";
import CameraDocumentsScreen from "../screens/CameraDocumentsScreen";
import CheckInSuccessScreen from "../screens/CheckInSuccessScreen";
import MapBookSuccessScreen from "../screens/MapBookSuccessScreen";

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const CheckinNavigator = createFluidNavigator(
  {
    Checkin: {
      screen: CheckinScreen
    },
    CameraDocuments: {
      screen: CameraDocumentsScreen
    },
    CheckinSuccess: {
      screen: CheckInSuccessScreen
    }
  },
  {
    initialRouteName: "Checkin"
  }
);

const fluidReservationNavigator = createFluidNavigator({
  Reservation: {
    screen: ReservationScreen
  },
  ReservationSecond: {
    screen: ReservationSecondScreen
  },
  RoomDetail: {
    screen: RoomDetailScreen
  },
  ReservationLastDetails: {
    screen: ReservationLastDetailsScreen
  },
  PaymentChoose: {
    screen: PaymentChooseScreen
  },
  CreditCard: {
    screen: CreditCardScreen
  }
});

const ReservationNavigator = createStackNavigator(
  {
    StartReservation: {
      screen: fluidReservationNavigator,
      navigationOptions: {
        headerShown: false,
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: "Reservation"
  }
);

const MapNavigator = createStackNavigator(
  {
    HotelMap: {
      screen: MapScreen
    },
    MapBookSuccess: {
      screen: MapBookSuccessScreen
    }
  },
  {
    initialRouteName: "HotelMap",
    mode: "modal"
  }
);

const CallNavigator = createStackNavigator(
  {
    Call: {
      screen: CallScreen
    }
  },
  {
    initialRouteName: "Call"
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator
    },
    Reservation: {
      screen: fluidReservationNavigator
    },
    Map: {
      screen: MapNavigator
    },
    Checkin: {
      screen: CheckinNavigator,
      navigationOptions: {
        title: "Check-in"
      }
    },
    Call: {
      screen: CallNavigator,
      navigationOptions: {
        title: "Phone Call"
      }
    }
  },
  {
    initialRouteName: "Map",
    drawerBackgroundColor: "rgba(255, 255, 255, 0.85)",
    hideStatusBar: true,
    statusBarAnimation: "none",
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: "#4B515D",
      labelStyle: {
        fontSize: 20,
        fontFamily: "Roboto-Light"
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);
