import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SuggestedCategories from "../../components/SuggestedCategories";
import { View } from "../../components/Themed";
import VideoList from "./VideoList";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    creator: "Creator Name",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    thubmnail: "https://reactnative.dev/img/tiny_logo.png",
    stats: "6.4M views 4 days ago",
    duration: "6:37",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    creator: "Creator Name",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    thubmnail: "https://reactnative.dev/img/tiny_logo.png",
    stats: "6.4M views 4 days ago",
    duration: "6:37",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    creator: "Creator Name",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    thubmnail: "https://reactnative.dev/img/tiny_logo.png",
    stats: "6.4M views 4 days ago",
    duration: "6:37",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53ab28ba",
    title: "First Item",
    creator: "Creator Name",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    thubmnail: "https://reactnative.dev/img/tiny_logo.png",
    stats: "6.4M views 4 days ago",
    duration: "6:37",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91a97f63",
    title: "Second Item",
    creator: "Creator Name",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    thubmnail: "https://reactnative.dev/img/tiny_logo.png",
    stats: "6.4M views 4 days ago",
    duration: "6:37",
  },
  {
    id: "58694a0f-3da1-471f-bd96-14557129d72",
    title: "Third Item",
    creator: "Creator Name",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    thubmnail: "https://reactnative.dev/img/tiny_logo.png",
    stats: "6.4M views 4 days ago",
    duration: "6:37",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.bodyWrapper}>
        <SuggestedCategories />
        <VideoList List={DATA} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  bodyWrapper: {
    marginTop: 52,
    flex: 1,
    backgroundColor: "#292929",
    width: "100%",
  },
});
