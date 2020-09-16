import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SuggestedCategories from "../../components/SuggestedCategories";
import { View } from "../../components/Themed";
import { VideoList } from "../../components/VideoContainer/VideoList";
const { DATA } = require("../../DATA");

interface HomeProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.bodyWrapper}>
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
    width: "100%",
  },
  bodyWrapper: {
    marginTop: 52,
    flex: 1,
    backgroundColor: "#292929",
    width: "100%",
  },
});
