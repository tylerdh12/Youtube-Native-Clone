import { SimpleLineIcons } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { View } from "../Themed";

interface VideoDetailsProps {
  item: {
    id: string;
    title: string;
    creator: string;
    avatar: string;
    thubmnail: string;
    stats: string;
    duration: string;
  };
}

export const VideoDetails: React.FC<VideoDetailsProps> = ({ item }) => (
  <View style={styles.bottomInfoContainer}>
    <View style={styles.leftSideContainer}>
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          source={{
            uri: item.avatar,
          }}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.videoTitle}>{item.title}</Text>
        <Text style={styles.videoDetails}>
          {item.creator} {item.stats}
        </Text>
      </View>
    </View>
    <TouchableNativeFeedback
      onPress={() => {
        alert("Menu button pressed");
      }}
    >
      <View style={styles.menuButton}>
        <SimpleLineIcons name="options-vertical" size={14} color="lightgrey" />
      </View>
    </TouchableNativeFeedback>
  </View>
);

const styles = StyleSheet.create({
  bottomInfoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSideContainer: {
    backgroundColor: "transparent",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  avatarContainer: {
    backgroundColor: "transparent",
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  detailsContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  videoTitle: {
    backgroundColor: "transparent",
    color: "white",
    textAlign: "left",
    fontSize: 18,
    fontWeight: "400",
  },
  videoDetails: {
    textAlign: "left",
    fontSize: 14,
    color: "grey",
  },
  menuButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
  },
});
