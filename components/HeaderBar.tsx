import { Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import * as React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { View } from "./Themed";

const { width } = Dimensions.get("window");

const HeaderBar = () => {
  /**
   * Sample JavaScript code for youtube.videos.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  // function authenticate() {
  //   return gapi.auth2
  //     .getAuthInstance()
  //     .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
  //     .then(
  //       function () {
  //         console.log("Sign-in successful");
  //       },
  //       function (err) {
  //         console.error("Error signing in", err);
  //       }
  //     );
  // }
  // function loadClient() {
  //   gapi.client.setApiKey("YOUR_API_KEY");
  //   return gapi.client
  //     .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
  //     .then(
  //       function () {
  //         console.log("GAPI client loaded for API");
  //       },
  //       function (err) {
  //         console.error("Error loading GAPI client for API", err);
  //       }
  //     );
  // }
  // // Make sure the client is loaded and sign-in is complete before calling this method.
  // function execute() {
  //   return gapi.client.youtube.videos.list({}).then(
  //     function (response) {
  //       // Handle the results here (response.result has the parsed body).
  //       console.log("Response", response);
  //     },
  //     function (err) {
  //       console.error("Execute error", err);
  //     }
  //   );
  // }
  // gapi.load("client:auth2", function () {
  //   gapi.auth2.init({ client_id: "YOUR_CLIENT_ID" });
  // });

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
            // 
          }}
        />
        {/* <button onclick="authenticate().then(loadClient)">
          authorize and load
        </button> */}
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
