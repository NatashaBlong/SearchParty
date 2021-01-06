import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class card6 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 528,
    width: 359,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          style={styles.cardItemImagePlace}
          source={require("../assets/cardImage9.jpg")}
        />
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
          <TouchableOpacity style={styles.actionButton3}>
            <Icon
              style={styles.iconStyle}
              name="chevron-up"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            BuilderX is a screen design tool which codes React Native for you\n
            which design without boundaries, the code is generated\n
            simultaneously. Save your designed components as symbol and then\n
            simply add it to your design next time.Live preview works on real\n
            device. Shout out to the Expo team to make it happen.
          </Text>
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
    minHeight: 210
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
    color: "#000"
  },
  subtitleStyle: {
    opacity: 0.5,
    fontSize: 14,
    fontFamily: "Roboto",
    lineHeight: 16,
    color: "#000"
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
    color: "#000"
  },
  actionButton2: {
    height: 36,
    padding: 8
  },
  actionText2: {
    opacity: 0.9,
    fontSize: 14,
    color: "#000"
  },
  actionButton3: {
    bottom: 12,
    right: 8,
    height: 36,
    position: "absolute",
    padding: 8
  },
  iconStyle: {
    opacity: 0.7,
    color: "#000",
    fontSize: 24
  },
  body: {
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#424242"
  }
});
