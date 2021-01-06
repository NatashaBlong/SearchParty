import React, { Component } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default class materialPicker extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 174,
    width: 150,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Picker style={styles.itemPicker2} enabled={true} itemStyle={{}}>
          <pickerItem label="Lorem Ipsum Dolor Sit" value="one" />
          <pickerItem label="Lorem Ipsum Dolor Sit" value="two" />
          <pickerItem label="Lorem Ipsum Dolor Sit" value="three" />
        </Picker>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white"
  },
  itemPicker2: {
    width: 150,
    height: 174
  }
});
