import {
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import * as React from "react";
import HeaderBar from "../components/HeaderBar";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import AccountScreen from "../screens/Account/AccountScreen";
import GetYoutubeTVScreen from "../screens/Account/GetYoutubeTVScreen";
import HelpScreen from "../screens/Account/HelpScreen";
import PaidMembershipsScreen from "../screens/Account/PaidMembershipsScreen";
import SettingsScreen from "../screens/Account/SettingsScreen";
import StudioScreen from "../screens/Account/StudioScreen";
import SwitchAccountScreen from "../screens/Account/SwitchAccountScreen";
import TimeWatchedScreen from "../screens/Account/TimeWatchedScreen";
import TurnOnIncognitoScreen from "../screens/Account/TurnOnIncognitoScreen";
import YourChannelScreen from "../screens/Account/YourChannelScreen";
import YourDataScreen from "../screens/Account/YourDataScreen";
import { HomeScreen } from "../screens/Home/HomeScreen";
import { VideoScreen } from "../screens/Home/VideoScreen";
import {
  AccountParamList,
  BottomTabParamList,
  ExploreParamList,
  HomeParamList,
  LibraryParamList,
  NotificationsParamList,
  SubscriptionsParamList,
} from "../types";
import ExploreScreen from "./../screens/ExploreScreen";
import LibraryScreen from "./../screens/LibraryScreen";
import NotificationsScreen from "./../screens/NotificationsScreen";
import SubscriptionsScreen from "./../screens/SubscriptionsScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        inactiveBackgroundColor: "#292929",
        activeBackgroundColor: "#292929",
        style: {
          backgroundColor: "#292929",
          paddingBottom: 35,
          paddingTop: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={26} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="compass-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Subscriptions"
        component={SubscriptionsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="subscriptions" size={26} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="bell" size={26} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="video-library" size={26} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
        }}
      />
    </HomeStack.Navigator>
  );
}

const ExploreStack = createStackNavigator<ExploreParamList>();

function ExploreNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{ headerTitle: "Explore" }}
      />
    </ExploreStack.Navigator>
  );
}

const SubscriptionsStack = createStackNavigator<SubscriptionsParamList>();

function SubscriptionsNavigator() {
  return (
    <SubscriptionsStack.Navigator>
      <SubscriptionsStack.Screen
        name="SubscriptionsScreen"
        component={SubscriptionsScreen}
        options={{ headerTitle: "Subscriptions" }}
      />
    </SubscriptionsStack.Navigator>
  );
}

const NotificationsStack = createStackNavigator<NotificationsParamList>();

function NotificationsNavigator() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ headerTitle: "Notifications" }}
      />
    </NotificationsStack.Navigator>
  );
}

const LibraryStack = createStackNavigator<LibraryParamList>();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator>
      <LibraryStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerTitle: "Library" }}
      />
    </LibraryStack.Navigator>
  );
}

const AccountStack = createStackNavigator<AccountParamList>();

function AccountNavigator() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    >
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          header: () => <HeaderBar />,
          gestureEnabled: true,
          gestureDirection: "vertical",
        }}
      />
      <AccountStack.Screen
        name="YourChannel"
        component={YourChannelScreen}
        options={{}}
      />
      <AccountStack.Screen
        name="Studio"
        component={StudioScreen}
        options={{}}
      />
      <AccountStack.Screen
        name="TimeWatched"
        component={TimeWatchedScreen}
        options={{}}
      />
      <AccountStack.Screen
        name="GetYoutubeTV"
        component={GetYoutubeTVScreen}
        options={{}}
      />
      <AccountStack.Screen
        name="PaidMemberships"
        component={PaidMembershipsScreen}
        options={{}}
      />
      <AccountStack.Screen
        name="SwitchAccount"
        component={SwitchAccountScreen}
        options={{}}
      />
      <AccountStack.Screen
        name="TurnOnIncognito"
        component={TurnOnIncognitoScreen}
        options={{}}
      />
      <AccountStack.Screen
        name="YourData"
        component={YourDataScreen}
        options={{}}
      />
      <AccountStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{}}
      />
      <AccountStack.Screen name="Help" component={HelpScreen} options={{}} />
    </AccountStack.Navigator>
  );
}
