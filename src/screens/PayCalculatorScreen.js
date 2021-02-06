import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Container, Content, H3 } from "native-base";

import { AppDropdown } from "../components/AppDropdown";
import { AppModal } from "../components/AppModal";
import { AppButton } from "../components/AppButton";
import { initialState } from "../data/state/initialState";
import { calculate } from "../calculate";
import { data } from "../data/order";
import { THEME } from "../theme";

export const PayCalculatorScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [allValue, setAllValue] = useState(initialState);

  const result = calculate(allValue);

  const returnValue = (name) => (value) => {
    setAllValue({
      ...allValue,
      [name]: value,
    });
  };

  const AllDropdown = ({ data }) => {
    return Object.keys(data).map((item) => {
      return (
        <AppDropdown
          data={data[item].data}
          title={data[item].title}
          cb={returnValue(item)}
          currentValue={allValue[item]}
          key={data[item].title}
        />
      );
    });
  };

  return (
    <Container>
      <Content>
        <View style={styles.wrapper}>
          <Text style={styles.colorPrimary}>
            Расчет денежного довольствия на 2021 г.
          </Text>
          <AppModal
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            result={result}
          />
          <ScrollView>
            <View style={styles.wrapper}>
              <AllDropdown data={data} />
              <AppButton
                onPress={() => setModalVisible(true)}
                icon={{
                  type: "MaterialCommunityIcons",
                  name: "calculator-variant",
                }}
                text="Расчитать"
              />
            </View>
          </ScrollView>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  colorPrimary: {
    color: THEME.primaryColor,
    fontSize: 18,
  },
});
