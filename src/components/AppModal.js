import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import { Image, TouchableOpacity, ScrollView } from "react-native";

import { AppButton } from "./AppButton";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Title,
  H3,
  Button,
  Icon,
} from "native-base";

export const AppModal = ({ visible, onCancel }) => {
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
              <Text style={styles.textStyle}>20000</Text>
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
    color: "#3F51B5",
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
    color: "#3F51B5",
  },
});
