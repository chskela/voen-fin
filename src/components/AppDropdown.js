import React from "react";
import { Form, Item, Picker } from "native-base";
import { StyleSheet, View, Text } from "react-native";

export const AppDropdown = ({ data, title, cb, currentValue }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{`${title}: ${currentValue}`}</Text>
      <Form>
        <Item picker>
          <Picker
            mode="dropdown"
            placeholder="Select your SIM"
            selectedValue={currentValue}
            style={styles.picker}
            onValueChange={(itemValue) => {
              cb(itemValue);
            }}
          >
            {data.map((item) => (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.label}
              />
            ))}
          </Picker>
        </Item>
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: "white",
    height: 40,
    width: "100%",
    marginTop: 5,
    borderColor: "#000",
    borderBottomWidth: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  title: {
    fontSize: 15,
  },
});
