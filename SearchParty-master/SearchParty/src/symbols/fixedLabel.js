import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default class fixedLabel extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 43,
    width: 375,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.label}>
          {this.props.label ? this.props.label : "FixedLabel"}
        </Text>
        <TextInput style={styles.inputStyle} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingLeft: 16,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  label: {
    flex: 0,
    alignSelf: "flex-start",
    opacity: 0.5,
    paddingTop: 16,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000"
  },
  inputStyle: {
    flex: 1,
    alignSelf: "flex-start",
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    paddingLeft: 30,
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000"
  }
});
