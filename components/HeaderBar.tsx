import { Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import * as React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { View } from "./Themed";

const { width } = Dimensions.get("window");

const HeaderBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Ionicons
          name="logo-youtube"
          size={24}
          color="red"
          style={styles.logo}
        />
        <Text style={styles.logoText}>Premium</Text>
      </View>
      <View style={styles.actionContainer}>
        <MaterialIcons
          name="cast"
          size={24}
          color="lightgrey"
          style={styles.icon}
          onPress={() => alert("Cast Button Pressed")}
        />
        <SimpleLineIcons
          name="camrecorder"
          size={24}
          color="lightgrey"
          style={styles.icon}
          onPress={() => alert("Go Live Button Pressed")}
        />
        <Ionicons
          name="ios-search"
          size={24}
          color="lightgrey"
          style={styles.icon}
          onPress={() => alert("Search Button Pressed")}
        />

        <Avatar
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
          containerStyle={styles.avatar}
          onPress={() => {
            alert("User Account Pressed");
          }}
        />
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  mainContainer: {
    height: 45,
    width: width,
    backgroundColor: "#292929",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#555555",
    borderBottomWidth: 1,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  logo: {
    marginLeft: 12,
    padding: 0,
    alignSelf: "center",
  },
  logoText: {
    color: "white",
    padding: 6,
    paddingLeft: 2,
    fontWeight: "700",
    fontSize: 22,
    letterSpacing: -1.5,
  },
  icon: {
    padding: 10,
    marginRight: 2,
    marginLeft: 2,
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  avatar: { padding: 2, marginLeft: 2, marginRight: 2 },
});
