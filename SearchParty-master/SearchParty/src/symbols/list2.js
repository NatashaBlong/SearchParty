import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default class list2 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 500,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <FlatList
        style={[styles.root, this.props.style]}
        renderItem={({ item, separators }) => {
          return (
            <View style={styles.rect1}>
              <Text style={styles.text1}>Single-line Item</Text>
            </View>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 4
  },
  rect1: {
    height: 40,
    flexDirection: "row",
    marginLeft: 16,
    padding: 16,
    paddingLeft: 0,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 0.5
  },
  text1: {
    fontSize: 13,
    color: "#212121"
  }
});
