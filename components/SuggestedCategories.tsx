import * as React from "react";
import { ScrollView, Text } from "react-native";
import { View } from "./Themed";

export class SuggestedCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView horizontal style={{
        maxHeight: 50
      }} showsHorizontalScrollIndicator={false}>
        {this.props.list.map(item => {
          return <View key={item.id} style={{
            margin: 4,
            padding: 10,
            borderWidth: 1,
            borderColor: "grey",
            backgroundColor: "#303030",
            borderRadius: 20,
            minWidth: 50,
            alignItems: "center"
          }}>
            <Text style={{
              color: "white",
              fontSize: 16
            }}>
              {item.label}
            </Text>
          </View>;
        })}
      </ScrollView>
    );
  }
}
