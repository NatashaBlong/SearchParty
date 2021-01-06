import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class toast1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 48,
    width: 322,
    defaultHeight: "fixed",
    defaultWidth: "auto"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text1} numberOfLines={1}>
          Toast Message
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    backgroundColor: "#323232",
    opacity: 1,
    paddingRight: 24,
    paddingLeft: 24,
    minWidth: 288,
    borderRadius: "2"
  },
  text1: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "rgba(255,255,255,1)"
  }
});
