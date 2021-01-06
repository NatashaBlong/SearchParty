import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class toast3 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 80,
    width: 322,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text1}>
          Multiline Text added to the toast of BuilderX
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>UNDO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#323232",
    opacity: 1,
    padding: 24,
    minWidth: 288,
    borderRadius: "2"
  },
  text1: {
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 20,
    color: "rgba(255,255,255,1)"
  },
  button: {
    marginLeft: 24
  },
  buttonText: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#4CAF50"
  }
});
