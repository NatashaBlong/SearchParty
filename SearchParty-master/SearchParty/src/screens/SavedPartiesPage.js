import React, { Component } from "react";

import List91 from "../symbols/list91";
import Header42 from "../symbols/header42";
import { View, StyleSheet, Image } from "react-native";

export default class SavedPartiesPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/pineTrees.jpg")}
          style={styles.image}
        />
        <List91
          style={styles.list91}
          iconStyleType="FontAwesome"
          iconStyleName="info"
          text1="Name"
          text2="Location"
        />
        <Header42
          style={styles.header42}
          title="Saved Parties"
          rightIcon3Type="FontAwesome"
          rightIcon3Name="info-circle"
          rightIcon4Type="FontAwesome"
          rightIcon4Name="plus-circle"
          rightIcon2Type="MaterialCommunityIcons"
          rightIcon2Name="home"
        />
        <Header42
          style={styles.header422}
          title="Saved Parties"
          rightIcon2Type="MaterialCommunityIcons"
          rightIcon2Name="home"
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
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  },
  list91: {
    top: 53,
    left: 0,
    width: 360,
    height: 687,
    position: "absolute"
  },
  header42: {
    top: 0,
    left: 0,
    right: 0,
    height: 53,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  },
  header422: {
    top: 0,
    left: 0,
    right: 0,
    height: 53,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  }
});
