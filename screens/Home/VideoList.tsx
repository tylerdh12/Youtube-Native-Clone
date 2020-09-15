import { SimpleLineIcons } from "@expo/vector-icons";
import * as React from "react";
import { FlatList, Image, Text } from "react-native";
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
          <TouchableNativeFeedback
            style={{
              backgroundColor: "#292929",
              height: 310,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <View>
              <Image
                style={{
                  width: "100%",
                  height: 250,
                }}
                source={{
                  uri: item.item.thubmnail,
                }}
              />
              <View
                style={{
                  backgroundColor: "rgba(0, 0, 0, .4)",
                  padding: 4,
                  position: "absolute",
                  top: "67%",
                  right: "1.5%",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 12,
                  }}
                >
                  {item.item.duration}
                </Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "transparent",
                    width: "90%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "transparent",
                      padding: 10,
                      alignItems: "center",
                      justifyContent: "flex-start",
                      position: "relative",
                    }}
                  >
                    <Avatar
                      rounded
                      source={{
                        uri: item.item.avatar,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "transparent",
                    }}
                  >
                    <Text
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        textAlign: "left",
                        fontSize: 18,
                        fontWeight: "400",
                      }}
                    >
                      {item.item.title}
                    </Text>
                    <Text
                      style={{
                        textAlign: "left",
                        fontSize: 14,
                        color: "grey",
                      }}
                    >
                      {item.item.creator} {item.item.stats}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: 5,
                  }}
                >
                  <Text style={{ color: "red", padding: 10 }}>
                    <SimpleLineIcons
                      name="options-vertical"
                      size={14}
                      color="lightgrey"
                    />
                  </Text>
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
