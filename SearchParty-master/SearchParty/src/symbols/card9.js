import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class card9 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 359,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/cardImage10.jpg")}
        />
        <View style={styles.cardBody}>
          <View style={styles.bodyContent}>
            <Text style={styles.titleStyle}>Title goes here</Text>
            <Text style={styles.subtitleStyle}>Subtitle here</Text>
          </View>
          <View style={styles.actionBody}>
            <TouchableOpacity style={styles.actionButton1}>
              <Text style={styles.actionText1}>ACTION 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton2}>
              <Text style={styles.actionText2}>ACTION 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    flex: 1,
    backgroundColor: "#ccc",
    minHeight: 359
  },
  cardBody: {
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    paddingBottom: 12,
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#FFF"
  },
  subtitleStyle: {
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#FFF"
  },
  actionBody: {
    flexDirection: "row",
    padding: 8
  },
  actionButton1: {
    height: 36,
    padding: 8
  },
  actionText1: {
    opacity: 0.9,
    fontSize: 14,
    color: "#FFF"
  },
  actionButton2: {
    height: 36,
    padding: 8
  },
  actionText2: {
    opacity: 0.9,
    fontSize: 14,
    color: "#FFF"
  }
});
