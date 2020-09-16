import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Video } from "expo-av";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text } from "react-native";
import { View } from "../../components/Themed";

const { width } = Dimensions.get("window");

interface VideoScreenProps {
  item: {
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
  };
}

export const VideoScreen: React.FC<VideoScreenProps> = ({ item }) => {
  console.log(item);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.bodyWrapper}>
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          isLooping={false}
          useNativeControls={true}
          style={{ width: width, height: width * 0.5625 }}
        />
        <View>
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <Text style={styles.title}>
                The Coolest Project Ever Created in the world of YouTube
              </Text>
              <Text style={styles.videoDetails}>200k views</Text>
            </View>
            <View>
              <Feather name="chevron-down" style={styles.minimizeIcon} />
            </View>
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.iconContainer}>
              <Feather name="thumbs-up" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>40k</Text>
            </View>
            <View style={styles.iconContainer}>
              <Feather name="thumbs-down" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>2</Text>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="share-outline"
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Share</Text>
            </View>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="arrow-collapse-down"
                style={styles.buttonIcon}
              />
              <Text style={styles.buttonText}>Download</Text>
            </View>
            <View style={styles.iconContainer}>
              <AntDesign style={styles.buttonIcon} name="plussquareo" />
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
  },
  bodyWrapper: {
    flex: 1,
    backgroundColor: "#292929",
    width: width,
  },
  detailsContainer: {
    flexDirection: "row",
    padding: 15,
    paddingBottom: 5,
    justifyContent: "space-between",
  },
  details: {
    flexDirection: "column",
  },
  title: { color: "white", fontSize: 18, fontWeight: "500", padding: 2 },
  videoDetails: {
    color: "grey",
    padding: 2,
    fontSize: 12,
  },
  minimizeIcon: { color: "white", fontSize: 18 },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "column",
    paddingTop: 0,
    padding: 5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonIcon: {
    color: "white",
    fontWeight: "100",
    fontSize: 20,
    padding: 4,
  },
  buttonText: {
    color: "white",
    padding: 2,
  },
});
