import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "../components/Themed";
import { SuggestedCategories } from "../components/SuggestedCategories";


export default function HomeScreen() {
  const list = [
    { id: 0, label: "All" },
    { id: 1, label: "JavaScript" },
    { id: 2, label: "CSS" },
    { id: 3, label: "Comedy" },
    { id: 4, label: "Cooking" },
    { id: 5, label: "Computer Science" },
    { id: 6, label: ".NET" },
    { id: 7, label: "Linux" },
    { id: 8, label: "OSX" },
    { id: 9, label: "TypeScript" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView
        style={{ flex: 1, marginTop: 60, backgroundColor: "#292929" }}
      >
        <SuggestedCategories list={list}></SuggestedCategories>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
