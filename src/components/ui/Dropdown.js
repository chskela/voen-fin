import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { salariesByPosition } from "../../data/salariesByPosition";
import { StyleSheet, View } from "react-native";

export const Dropdown = ({ data }) => {
  const [salaries, setSalaries] = useState(0);
  return (
    <View style={styles.wrapper}>
      <Picker
        selectedValue={salaries}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setSalaries(itemValue);
        }}
      >
        {data.map((item) => (
          <Picker.Item
            label={`${item.label.toString()} т.р. - ${item.title}`}
            value={item.value}
            key={item.label}
            style={styles.item}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 40,
    width: "90%",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
  },
});
