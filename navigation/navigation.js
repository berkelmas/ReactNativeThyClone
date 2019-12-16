import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { createFluidNavigator } from "react-navigation-fluid-transitions";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

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
import AllReservationsScreen from "../screens/AllReservationsScreen";
import ReservationDetailScreen from "../screens/ReservationDetailScreen";
import NewHomeScreen from "../screens/NewHomeScreen";
import PaymentSuccessScreen from "../screens/PaymentSuccessScreen";

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    NewHome: {
      screen: NewHomeScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: "NewHome"
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

const fluidReservationNavigator = createStackNavigator({
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
  },
  PaymentSuccess: {
    screen: PaymentSuccessScreen
  }
});

const AllReservationsNavigator = createStackNavigator(
  {
    AllReservations: {
      screen: AllReservationsScreen
    },
    ReservationDetail: {
      screen: ReservationDetailScreen
    }
  },
  {
    initialRouteName: "AllReservations"
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
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: <AntDesign name="home" size={30} color="#484848" />
      }
    },
    Reservation: {
      screen: fluidReservationNavigator,
      navigationOptions: {
        drawerIcon: <AntDesign name="calendar" size={30} color="#484848" />
      }
    },
    AllReservations: {
      screen: AllReservationsNavigator,
      navigationOptions: {
        title: "All Reservations",
        drawerIcon: <AntDesign name="book" size={30} color="#484848" />
      }
    },
    Map: {
      screen: MapNavigator,
      navigationOptions: {
        drawerIcon: <AntDesign name="info" size={30} color="#484848" />
      }
    },
    Checkin: {
      screen: CheckinNavigator,
      navigationOptions: {
        title: "Check-in",
        drawerIcon: <AntDesign name="check" size={30} color="#484848" />
      }
    },
    Call: {
      screen: CallNavigator,
      navigationOptions: {
        title: "Phone Call",
        drawerIcon: <AntDesign name="phone" size={30} color="#484848" />
      }
    }
  },
  {
    initialRouteName: "Home",
    drawerBackgroundColor: "rgba(255, 255, 255, 1)",
    hideStatusBar: true,
    statusBarAnimation: "none",
    contentComponent: CustomDrawer,
    contentOptions: {
      activeTintColor: "#4B515D",
      activeBackgroundColor: "#F5F7F9",
      labelStyle: {
        fontSize: 18,
        fontFamily: "Roboto-Light"
      },
      iconContainerStyle: {
        height: 35,
        width: 30,
        opacity: 1
      }
    }
  }
);

export default createAppContainer(DrawerNavigator);
