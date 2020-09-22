import React, { useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { View } from "../Themed";
import { DurationContainer } from "./DurationContainer";
import { VideoDetails } from "./VideoDetails";

const { width } = Dimensions.get("window");

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
  const [refreshing, setRefreshing] = useState(false);

  function myFunction() {
    setRefreshing(false);
  }

  const refresh = () => {
    setRefreshing(true);
    setTimeout(myFunction, 300);
  };

  return List.map((item) => {
    return (
      <TouchableNativeFeedback
        key={item.id}
        style={styles.touchContainer}
        onPress={(item) => navigation.push("Video")}
      >
        <View>
          <Image
            style={styles.thumbnail}
            source={{
              uri: item.thubmnail,
            }}
          />
          <DurationContainer duration={item.duration} />
          <VideoDetails item={item} />
        </View>
      </TouchableNativeFeedback>
    );
  });
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
