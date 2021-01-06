import React, { Component } from "react";

import { Center } from "@builderx/utils";
import List91 from "../symbols/list91";
import Header42 from "../symbols/header42";

import { View, StyleSheet } from "react-native";

export default class PartyListPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <List91
          style={styles.list91}
          text1="Name"
          text2="Loction"
          iconStyleType="FontAwesome"
          iconStyleName="info"
        />
        <Header42
          style={styles.header42}
          title="Find a Party"
          rightIcon4Type="FontAwesome"
          rightIcon4Name="plus-circle"
          rightIcon3Type="FontAwesome"
          rightIcon3Name="info-circle"
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
  list91: {
    top: 53,
    left: 0,
    position: "absolute",
    height: 687,
    width: 360
  },
  header42: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 53,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1,
    right: 0
  }
});
