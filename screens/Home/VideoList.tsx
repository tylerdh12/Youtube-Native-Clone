import { SimpleLineIcons } from "@expo/vector-icons";
import * as React from "react";
import { FlatList, Image, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { View } from "../../components/Themed";

interface VideoListProps {
  List: {
    id: string;
    title: string;
    creator: string;
    avatar: string;
    thubmnail: string;
    stats: string;
    duration: string;
  }[];
}

const VideoList: React.FC<VideoListProps> = ({ List }) => {
  return (
    <FlatList
      data={List}
      renderItem={(item) => {
        return (
          <TouchableNativeFeedback style={styles.touchContainer}>
            <View>
              <Image
                style={styles.thumbnail}
                source={{
                  uri: item.item.thubmnail,
                }}
              />
              <View style={styles.durationContainer}>
                <Text style={styles.durationText}>{item.item.duration}</Text>
              </View>
              <View style={styles.bottomInfoContainer}>
                <View style={styles.leftSideContainer}>
                  <View style={styles.avatarContainer}>
                    <Avatar
                      rounded
                      source={{
                        uri: item.item.avatar,
                      }}
                    />
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text style={styles.videoTitle}>{item.item.title}</Text>
                    <Text style={styles.videoDetails}>
                      {item.item.creator} {item.item.stats}
                    </Text>
                  </View>
                </View>
                <View style={styles.menuButton}>
                  <SimpleLineIcons
                    name="options-vertical"
                    size={14}
                    color="lightgrey"
                  />
                </View>
              </View>
            </View>
          </TouchableNativeFeedback>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default VideoList;

const styles = StyleSheet.create({
  touchContainer: {
    backgroundColor: "#292929",
    height: 310,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  thumbnail: {
    width: "100%",
    height: 250,
  },
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
