import {
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { HeaderBar } from "../components/HeaderBar";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
  BottomTabParamList,
  ExploreParamList,
  HomeParamList,
  LibraryParamList,
  NotificationsParamList,
  SubscriptionsParamList,
} from "../types";
import ExploreScreen from "./../screens/ExploreScreen";
import HomeScreen from "../screens/Home/HomeScreen";
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
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ header: (props) => <HeaderBar /> }}
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
