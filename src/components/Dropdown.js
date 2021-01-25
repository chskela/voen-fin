import React, { useState } from "react";
import { Form, Item, Picker } from "native-base";
import { StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";

export const Dropdown = ({ data, title, action }) => {
  const dispatch = useDispatch();
  const [salaries, setSalaries] = useState(data[0].value);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{`${title}: ${salaries}`}</Text>
      <Form>
        <Item picker>
          <Picker
            mode="dropdown"
            placeholder="Select your SIM"
            selectedValue={salaries}
            style={styles.picker}
            onValueChange={(itemValue) => {
              setSalaries(itemValue);
              dispatch(action(itemValue));
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
