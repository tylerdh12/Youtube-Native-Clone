import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import HeaderBar from "../../components/HeaderBar";
import SuggestedCategories from "../../components/SuggestedCategories";
import { View } from "../../components/Themed";
import { VideoList } from "../../components/VideoContainer/VideoList";
const { DATA } = require("../../DATA");

const { width } = Dimensions.get("window");

interface HomeProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.bodyWrapper}>
        <HeaderBar />
        <SuggestedCategories />
        <VideoList navigation={navigation} List={DATA} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    backgroundColor: "#292929",
  },
  bodyWrapper: {
    flex: 1,
    backgroundColor: "#292929",
    width: width,
  },
});
