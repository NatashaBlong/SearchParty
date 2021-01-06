import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default class list14 extends Component {
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
              <Text style={styles.text1}>Two-line Item</Text>
              <Text style={styles.subText}>
                {" "}
                BuilderX is a screen design tool which codes React Native for\n
                you.
              </Text>
            </View>
          );
        }}
        ListHeaderComponent={({ highlighted }) => {
          return (
            <View style={styles.rect2}>
              <Text style={styles.text2}>List Header</Text>
            </View>
          );
        }}
        ListFooterComponent={({ highlighted }) => {
          return (
            <View style={styles.rect3}>
              <Text style={styles.text3}>List Footer</Text>
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
    paddingTop: 8
  },
  rect1: {
    height: 88,
    marginLeft: 16,
    padding: 16,
    paddingLeft: 0
  },
  text1: {
    paddingBottom: 8,
    fontSize: 16,
    color: "#212121"
  },
  subText: {
    fontSize: 13,
    lineHeight: 16,
    color: "#9E9E9E"
  },
  rect2: {
    backgroundColor: "#fff",
    padding: 16
  },
  text2: {
    color: "#616161"
  },
  rect3: {
    backgroundColor: "#fff",
    padding: 16
  },
  text3: {
    color: "#616161"
  }
});
