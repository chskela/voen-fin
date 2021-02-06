import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import { Card, CardItem, Body, Text, Title, Icon } from "native-base";

import { THEME } from "../theme";
import { AppButton } from "./AppButton";

export const AppModal = ({ visible, onCancel, result = 0 }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <Card>
          <CardItem header>
            <Title style={styles.colorPrimary}>
              Ваше денежное довольствие:
            </Title>
          </CardItem>
          <CardItem cardBody>
            <Body style={styles.body}>
              <Text style={styles.textStyle}>{result}</Text>
              <View style={styles.textStyle}>
                <Icon
                  style={styles.colorPrimary}
                  type="MaterialCommunityIcons"
                  name="currency-rub"
                />
              </View>
            </Body>
          </CardItem>

          <CardItem footer>
            <AppButton
              onPress={onCancel}
              text="Назад"
              icon={{
                type: "MaterialCommunityIcons",
                name: "keyboard-backspace",
              }}
            />
          </CardItem>
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: THEME.primaryColor,
    marginBottom: 10,
    marginTop: 10,
    marginHorizontal: 5,
    fontSize: 24,
  },
  body: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  colorPrimary: {
    color: THEME.primaryColor,
  },
});
