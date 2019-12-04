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

const CheckinNavigator = createStackNavigator(
  {
    Checkin: {
      screen: CheckinScreen
    }
  },
  {
    initialRouteName: "Checkin"
  }
);

const ReservationNavigator = createStackNavigator(
  {
    Reservation: {
      screen: ReservationScreen
    },
    ReservationSecond: {
      screen: ReservationSecondScreen
    },
    RoomDetail: {
      screen: RoomDetailScreen
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
    }
  },
  {
    initialRouteName: "HotelMap"
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
      screen: ReservationNavigator
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
    initialRouteName: "Reservation",
    drawerBackgroundColor: "rgba(255, 255, 255, 0.85)",
    hideStatusBar: true,
    statusBarAnimation: "slide",
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
