import React, { Component } from "react";
import { Center } from "@builderx/utils";
import FixedLabel from "../symbols/fixedLabel";
import Checkbox from "../symbols/checkbox";
import Button131 from "../symbols/button131";
import { View, StyleSheet, Image } from "react-native";

export default class RegisterPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Image
          source={require("../assets/pineTrees.jpg")}
          style={styles.image}
        />
        <FixedLabel style={styles.fixedLabel} label="First Name" />
        <Center horizontal>
          <FixedLabel style={styles.fixedLabel2} label="Last Name" />
        </Center>
        <FixedLabel style={styles.fixedLabel3} label="Email" />
        <Center horizontal>
          <FixedLabel style={styles.fixedLabel4} label="Username" />
        </Center>
        <Center horizontal>
          <FixedLabel style={styles.fixedLabel5} label="Confirm Password" />
        </Center>
        <FixedLabel style={styles.fixedLabel6} label="Password" />
        <Checkbox style={styles.checkbox} />
        <Center horizontal>
          <Button131
            style={styles.button131}
            root={() => {
              this.props.navigation.push("RegisterPage");
            }}
            buttonContent="Register"
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
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  fixedLabel: {
    top: 134,
    width: 186,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100,
    backgroundColor: "#E6E6E6",
    left: "4.17%"
  },
  fixedLabel2: {
    top: 194,
    width: 186,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100
  },
  fixedLabel3: {
    top: 253,
    width: 186,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100,
    left: "48.33%"
  },
  fixedLabel4: {
    top: 311,
    width: 186,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100
  },
  fixedLabel5: {
    width: 186,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100,
    top: "59.72%"
  },
  fixedLabel6: {
    width: 186,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100,
    top: "51.53%",
    left: "0%"
  },
  checkbox: {
    top: 490,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100,
    left: "75.83%"
  },
  button131: {
    top: 549,
    height: 35,
    position: "absolute",
    borderWidth: 5,
    borderColor: "#000000",
    borderRadius: 100,
    borderStyle: "hidden",
    backgroundColor: "rgba(115,115,115,1)",
    opacity: 1,
    overflow: "visible"
  }
});
