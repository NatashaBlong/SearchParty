import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class header41 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 56,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon
            style={styles.leftIcon}
            name="menu"
            type="MaterialCommunityIcons"
          />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.title} numberOfLines={1}>
            {this.props.title ? this.props.title : "Title"}
          </Text>
        </View>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              style={styles.rightIcon1}
              name="magnify"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              style={styles.rightIcon2}
              name="heart"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              style={styles.rightIcon3}
              name="refresh"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              style={styles.rightIcon4}
              name={
                this.props.rightIcon4Name ? (
                  this.props.rightIcon4Name
                ) : (
                  "dots-vertical"
                )
              }
              type={
                this.props.rightIcon4Type ? (
                  this.props.rightIcon4Type
                ) : (
                  "MaterialCommunityIcons"
                )
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3F51B5",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  leftIconButton: {
    top: 5,
    left: 5,
    position: "absolute",
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  textWrapper: {
    left: 72,
    bottom: 19,
    position: "absolute"
  },
  title: {
    backgroundColor: "transparent",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Roboto",
    lineHeight: 18,
    color: "#FFFFFF"
  },
  leftWrapper: {
    top: 5,
    right: 5,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center"
  },
  iconButton: {
    padding: 11
  },
  rightIcon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  rightIcon4: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  }
});
