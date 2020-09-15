import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "../Themed";

interface DurationProps {
  duration: string;
}

export const DurationContainer: React.FC<DurationProps> = ({ duration }) => (
  <View style={styles.durationContainer}>
    <Text style={styles.durationText}>{duration}</Text>
  </View>
);

const styles = StyleSheet.create({
  durationContainer: {
    backgroundColor: "rgba(0, 0, 0, .4)",
    padding: 4,
    position: "absolute",
    top: "67%",
    right: "1.5%",
    borderRadius: 5,
  },
  durationText: {
    color: "white",
    fontSize: 12,
  },
});
