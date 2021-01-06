import React, { Component } from "react";
import { Center } from "@builderx/utils";
import Header42 from "../symbols/header42";
import Button131 from "../symbols/button131";
import MaterialMap from "../symbols/materialMap";
import { View, StyleSheet, Image } from "react-native";

export default class ViewPartyPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image source={require("../assets/forest.jpg")} style={styles.image} />
        <Header42
          style={styles.header42}
          title="View Party"
          rightIcon3Type="FontAwesome"
          rightIcon3Name="info-circle"
          rightIcon4Type="FontAwesome"
          rightIcon4Name="plus-circle"
        />
        <Center horizontal>
          <Image
            source={require("../assets/MissingPerson.jpg")}
            style={styles.image2}
          />
        </Center>
        <Center horizontal>
          <MaterialMap style={styles.materialMap} />
        </Center>
        <Center horizontal>
          <Button131
            style={styles.button1312}
            root={() => {
              this.props.navigation.push("RegisterPage");
            }}
            buttonContent="Join Party"
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
  image: {
    height: 740,
    width: 360,
    position: "absolute",
    left: "0%",
    top: "0%"
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
  image2: {
    height: "21.756756756756758%",
    width: "44.44444444444444%",
    position: "absolute",
    top: "9.77%"
  },
  materialMap: {
    top: 471,
    position: "absolute",
    height: "25.68%",
    width: 308,
    borderColor: "rgba(241,237,226,1)",
    borderWidth: 4,
    borderStyle: "inset"
  },
  button1312: {
    top: 679,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(115,115,115,1)",
    opacity: 1,
    borderWidth: 5,
    borderColor: "#000000",
    borderRadius: 100,
    borderStyle: "hidden",
    overflow: "visible"
  }
});
