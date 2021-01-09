import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Dropdown } from "../components/ui/Dropdown";
import { salariesByPosition } from "../data/salariesByPosition";

export const PayCalculatorScreen = () => {
  return (
    <View>
      <Text>
        Калькулятор денежного довольствия на 2020-2021 гг. военнослужащих,
        проходящих военную службу по контракту
      </Text>
      <ScrollView>
        <View>
          <Text>
            Оклад по воинской должности (тарифный разряд по штатной воинской
            должности)
          </Text>
          <Dropdown data={salariesByPosition} />
        </View>
      </ScrollView>
    </View>
  );
};
