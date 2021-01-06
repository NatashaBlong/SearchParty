import React, { Component } from "react";
import Button13 from "../symbols/button13";
import Button131 from "../symbols/button131";
import FixedLabel from "../symbols/fixedLabel";
import { Center } from "@builderx/utils";
import Toast1 from "../symbols/toast1";
import { View, StyleSheet, Image } from "react-native";

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image source={require("../assets/person.jpg")} style={styles.image} />
        <Button13
          style={styles.button13}
          buttonContent="Login"
          root={() => {
            this.props.navigation.push("PartyListPage");
          }}
        />
        <Button131
          style={styles.button131}
          buttonContent="Register"
          root={() => {
            this.props.navigation.push("RegisterPage");
          }}
        />
        <Center horizontal>
          <FixedLabel style={styles.fixedLabel} label="Username" />
        </Center>
        <Center horizontal>
          <FixedLabel style={styles.fixedLabel2} label="Password" />
        </Center>
        <Toast1 style={styles.toast1} />
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
    height: 720,
    width: 360,
    position: "absolute",
    left: "0%",
    top: "0%"
  },
  button13: {
    top: 395.5,
    position: "absolute",
    height: 35,
    transform: [
      {
        rotate: "0deg"
      }
    ],
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 5,
    borderStyle: "hidden",
    left: "24.17%"
  },
  button131: {
    top: 396,
    left: 185,
    position: "absolute",
    height: 35,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 5,
    borderStyle: "hidden"
  },
  fixedLabel: {
    top: 282,
    position: "absolute",
    width: 186,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100
  },
  fixedLabel2: {
    width: 186,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100,
    top: "45.88%"
  },
  toast1: {
    top: 241.08,
    left: -521.56,
    position: "absolute",
    height: 48
  }
});
