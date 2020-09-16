import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { View } from "./Themed";

const SuggestedCategories = () => {
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

  const [selected, setSelected] = useState([]);

  return (
    <ScrollView
      horizontal
      style={styles.scrollBar}
      showsHorizontalScrollIndicator={false}
    >
      {list.map((item) => {
        return (
          <TouchableNativeFeedback key={item.id}>
            <View style={styles.labelContainer}>
              <Text style={styles.labelText}>{item.label}</Text>
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </ScrollView>
  );
};

export default SuggestedCategories;

const styles = StyleSheet.create({
  scrollBar: {
    backgroundColor: "#252525",
  },
  labelContainer: {
    margin: 5,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#555555",
    backgroundColor: "#303030",
    borderRadius: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  labelText: {
    color: "white",
    fontSize: 12,
    padding: 10,
    paddingBottom: 15,
  },
});
