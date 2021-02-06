import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";
import { THEME } from "../theme";

export const AppButton = ({ text, icon, onPress }) => {
  return (
    <View style={styles.wrapper}>
      <Button block iconLeft primary rounded bordered onPress={onPress}>
        {icon ? <Icon type={icon.type} name={icon.name} /> : null}
        <Text style={styles.textButton}>{text}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
  textButton: {
    paddingLeft: 15,
    paddingRight: 20,
    color: THEME.primaryColor,
    fontSize: 20,
  },
});
