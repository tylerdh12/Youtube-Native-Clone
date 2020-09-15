import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import SuggestedCategories from "../components/SuggestedCategories";
import { View } from "../components/Themed";

const HomeScreen = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      creator: "Creator Name",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      creator: "Creator Name",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      creator: "Creator Name",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53ab28ba",
      title: "First Item",
      creator: "Creator Name",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91a97f63",
      title: "Second Item",
      creator: "Creator Name",
    },
    {
      id: "58694a0f-3da1-471f-bd96-14557129d72",
      title: "Third Item",
      creator: "Creator Name",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View
        style={{
          marginTop: 52,
          flex: 1,
          backgroundColor: "#292929",
          width: "100%",
        }}
      >
        <SuggestedCategories />
        <FlatList
          data={DATA}
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
                    style={{ width: "100%", height: 250 }}
                    source={{
                      uri: "https://reactnative.dev/img/tiny_logo.png",
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "transparent",
                      width: "100%",
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
                      }}
                    >
                      <Avatar
                        rounded
                        source={{
                          uri:
                            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
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
                          color: "white",
                          textAlign: "left",
                        }}
                      >
                        {item.item.creator}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
