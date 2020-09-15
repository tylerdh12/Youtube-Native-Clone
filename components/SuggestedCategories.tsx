import * as React from "react";
import { ScrollView, Text } from "react-native";
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

  return (
    <ScrollView
      horizontal
      style={{
        backgroundColor: "#252525",
        maxHeight: 70,
        padding: 5,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {list.map((item) => {
        return (
          <View
            key={item.id}
            style={{
              margin: 5,
              borderWidth: 1,
              borderColor: "#555555",
              backgroundColor: "#303030",
              borderRadius: 20,
              minWidth: 50,
              minHeight: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                padding: 10,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              {item.label}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SuggestedCategories;
