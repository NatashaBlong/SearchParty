import React, { Component } from "react";
import Header42 from "../symbols/header42";
import MaterialMap from "../symbols/materialMap";
import Button131 from "../symbols/button131";
import { Center } from "@builderx/utils";
import { View, StyleSheet } from "react-native";

export default class SearchPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header42
          style={styles.header42}
          title="Searching"
          rightIcon3Type="FontAwesome"
          rightIcon3Name="info-circle"
          rightIcon4Type="FontAwesome"
          rightIcon4Name="plus-circle"
        />
        <MaterialMap style={styles.materialMap} />
        <Center horizontal>
          <Button131
            style={styles.button131}
            buttonContent="Add Evidence"
            root={() => {
              this.props.navigation.push("RegisterPage");
            }}
          />
        </Center>
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
  },
  materialMap: {
    top: 53,
    left: 0,
    width: "100.28%",
    height: "92.84%",
    position: "absolute",
    borderWidth: 4,
    borderColor: "rgba(241,237,226,1)",
    borderStyle: "inset"
  },
  button131: {
    top: 680.08,
    height: 36,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1,
    borderWidth: 5,
    borderColor: "#000000",
    borderRadius: 100,
    borderStyle: "hidden"
  }
});
