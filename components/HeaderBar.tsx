import { Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import * as React from "react";
import { Text } from "react-native";
import { Avatar } from "react-native-elements";
import { View } from "./Themed";

const HeaderBar = () => {
  return (
    <View
      style={{
        height: 100,
        width: "100%",
        backgroundColor: "#292929",
        position: "absolute",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        borderBottomColor: "#555555",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          marginTop: 50,
          height: 40,
          width: "100%",
          backgroundColor: "transparent",
          position: "absolute",
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
        >
          <Ionicons
            name="logo-youtube"
            size={35}
            color="red"
            style={{
              marginLeft: 8,
              padding: 0,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              color: "white",
              padding: 6,
              fontWeight: "700",
            }}
          >
            YouTube
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "transparent",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 8,
          }}
        >
          <MaterialIcons
            name="cast"
            size={26}
            color="lightgrey"
            style={{
              padding: 10,
            }}
          />
          <SimpleLineIcons
            name="camrecorder"
            size={26}
            color="lightgrey"
            style={{
              padding: 10,
            }}
          />
          <Ionicons
            name="ios-search"
            size={26}
            color="lightgrey"
            style={{
              padding: 10,
            }}
          />
          <Avatar
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
            onPress={() => {
              alert("User Account Pressed");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;
