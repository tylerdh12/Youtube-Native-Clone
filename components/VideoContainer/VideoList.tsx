import * as React from "react";
import { Dimensions, FlatList, Image, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { View } from "../Themed";
import { DurationContainer } from "./DurationContainer";
import { VideoDetails } from "./VideoDetails";

const window = Dimensions.get("window");
const width = window.width;

interface VideoListProps {
  List: {
    id: string;
    title: string;
    creator: string;
    avatar: string;
    thubmnail: string;
    stats: string;
    duration: string;
    videoLink: string;
    likes: number;
    dislikes: number;
    views: number;
  }[];
  navigation: any;
}

export const VideoList: React.FC<VideoListProps> = ({ List, navigation }) => {
  return (
    <FlatList
      data={List}
      renderItem={(item) => {
        return (
          <TouchableNativeFeedback
            style={styles.touchContainer}
            onPress={(item) => navigation.push("Video")}
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
    width: width,
    height: 250,
  },
});
