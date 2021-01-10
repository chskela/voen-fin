import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Dropdown } from "../components/Dropdown";

import {
  position,
  rank,
  airСategory,
  encryptionAuthorities,
  specialConditions,
  seniorityBonus,
  premium,
  divisionsProtection,
  classQualification,
  stateSecret,
} from "../data";

import {
  selectPosition,
  setPosition,
  selectRank,
  setRank,
  setSeniorityBonus,
  selectSeniorityBonus,
} from "../features/monetary/monetarySlice";

import { Button } from "native-base";

export const PayCalculatorScreen = () => {
  const position1 = useSelector(selectPosition);
  const rank1 = useSelector(selectRank);
  const seniorityBonus1 = useSelector(selectSeniorityBonus);
  return (
    <View>
      <Text>Расчет денежного довольствия на 2021 г.</Text>
      <ScrollView style={{ marginBottom: 55 }}>
        <Dropdown
          data={position.data}
          title={position.title}
          action={setPosition}
        />
        <Dropdown data={rank.data} title={rank.title} action={setRank} />
        <Dropdown
          data={seniorityBonus.data}
          title={seniorityBonus.title}
          action={setSeniorityBonus}
        />
        {/*<Dropdown
          data={classQualification.data}
          title={classQualification.title}
        />
        <Dropdown
          data={stateSecret.data}
          title={stateSecret.title}
        />
        <Dropdown
          data={airСategory.data}
          title={airСategory.title}
        />
        <Dropdown
          data={specialConditions.data}
          title={specialConditions.title}
        />
        <Dropdown
          data={premium.data}
          title={premium.title}
        />
        <Dropdown
          data={divisionsProtection.data}
          title={divisionsProtection.title}
        />
        <Dropdown
          data={encryptionAuthorities.data}
          title={encryptionAuthorities.title}
        /> */}
      </ScrollView>
      <Button
        iconLeft
        light
        onPress={() => console.log(position1, rank1, seniorityBonus1)}
      >
        <Text>_________ Back ___________</Text>
      </Button>
    </View>
  );
};
