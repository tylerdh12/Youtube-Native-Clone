import * as React from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { View } from "../Themed";
import { DurationContainer } from "./DurationContainer";
import { VideoDetails } from "./VideoDetails";

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
          <TouchableNativeFeedback
            style={styles.touchContainer}
            onPress={() => {
              alert(`${item.item.title} has been pressed`);
            }}
          >
            <View>
              <Image
                style={styles.thumbnail}
                source={{
                  uri: item.item.thubmnail,
                }}
              />
              <DurationContainer duration={item.item.duration} />
              <VideoDetails item={item.item} />
            </View>
          </TouchableNativeFeedback>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default VideoList;

export const styles = StyleSheet.create({
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
});
