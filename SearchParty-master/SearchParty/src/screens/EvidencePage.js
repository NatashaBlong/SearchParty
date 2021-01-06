import React, { Component } from "react";
import Header42 from "../symbols/header42";
import { View, StyleSheet } from "react-native";

export default class EvidencePage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header42
          style={styles.header42}
          title="Evidence"
          rightIcon3Type="FontAwesome"
          rightIcon3Name="info-circle"
          rightIcon4Type="FontAwesome"
          rightIcon4Name="plus-circle"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  header42: {
    top: 0,
    left: 0,
    right: 0,
    height: 53,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  }
});
