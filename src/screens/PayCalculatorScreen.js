import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";

import { Dropdown } from "../components/Dropdown";

import {
  position,
  rank,
  seniorityBonus,
  classQualification,
  stateSecret,
  premium,
  specialConditions,
  airСategory,
  encryptionAuthorities,
  divisionsProtection,
  districtCoefficient,
  driversPositions,
  farNorth,
  flightPersonnel,
  legalEducation,
  marksOfExcellence,
  militaryAcademy,
  physicalFitness,
  positions1_4tr,
  riskToLife,
} from "../data";

import {
  setPosition,
  setRank,
  setSeniorityBonus,
  setClassQualification,
  setStateSecret,
  setPremium,
  setSpecialConditions,
  setAirСategory,
  setDivisionsProtection,
  setEncryptionAuthorities,
  setDistrictCoefficient,
  setDriversPositions,
  setFarNorth,
  setFlightPersonnel,
  setLegalEducation,
  setMarksOfExcellence,
  setMilitaryAcademy,
  setPhysicalFitness,
  setPositions1_4tr,
  setRiskToLife,
} from "../features/monetary/monetarySlice";

import {
  selectPosition,
  selectRank,
  selectSeniorityBonus,
  selectClassQualification,
  selectStateSecret,
  selectPremium,
  selectSpecialConditions,
} from "../features/monetary/monetarySelectors";

export const PayCalculatorScreen = () => {
  const position1 = useSelector(selectPosition);
  const rank1 = useSelector(selectRank);
  const seniorityBonus1 = useSelector(selectSeniorityBonus);
  return (
    <Container>
      {/* <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header> */}
      <View>
        <Text style={styles.title}>
          Расчет денежного довольствия на 2021 г.
        </Text>
        <ScrollView>
          {/* Оклад по воинской должности */}
          <Dropdown
            data={position.data}
            title={position.title}
            action={setPosition}
          />
          {/* Оклад по воинскому званию */}
          <Dropdown data={rank.data} title={rank.title} action={setRank} />
          {/* Надбавка за выслугу лет */}
          <Dropdown
            data={seniorityBonus.data}
            title={seniorityBonus.title}
            action={setSeniorityBonus}
          />
          {/* Надбавка за классную квалификацию */}
          <Dropdown
            data={classQualification.data}
            title={classQualification.title}
            action={setClassQualification}
          />
          {/* Надбавка за работу со сведениями, составляющими государственную тайну */}
          <Dropdown
            data={stateSecret.data}
            title={stateSecret.title}
            action={setStateSecret}
          />
          {/* Премия за добросовестное и эффективное исполнение должностных 
        обязанностей */}
          <Dropdown
            data={premium.data}
            title={premium.title}
            action={setPremium}
          />
          {/* Надбавка за особые условия военной службы, включая командование 
        подразделением */}
          <Dropdown
            data={specialConditions.data}
            title={specialConditions.title}
            action={setSpecialConditions}
          />
          {/* Надбавка за квалификационную категорию летному составу */}
          <Dropdown
            data={airСategory.data}
            title={airСategory.title}
            action={setAirСategory}
          />
          {/* Надбавка за стаж работы в структурных подразделениях по ЗГТ */}
          <Dropdown
            data={divisionsProtection.data}
            title={divisionsProtection.title}
            action={setDivisionsProtection}
          />
          {/* Надбавка за стаж работы в шифровальных органах */}
          <Dropdown
            data={encryptionAuthorities.data}
            title={encryptionAuthorities.title}
            action={setEncryptionAuthorities}
          />
          {/* Районный коэффициент за военную службу в районах Крайнего Севера и
        приравненных к ним местностях, с неблагоприятными экологическими и
        климатическими условиями, отдаленных, высокогорных районах, пустынных и
        безводных местностях */}
          <Dropdown
            data={districtCoefficient.data}
            title={districtCoefficient.title}
            action={setDistrictCoefficient}
          />
          {/* Ежемесячная надбавка за особые достижения в службе, военнослужащим,
        проходящим службу на воинских должностях водителей */}
          <Dropdown
            data={driversPositions.data}
            title={driversPositions.title}
            action={setDriversPositions}
          />
          {/* Надбавка за военную службу в районах Крайнего Севера и приравненных к
        ним местностях, а также в других местностях с неблагоприятными
        климатическими или экологическими условиями, в том числе отдаленных
        местностях */}
          <Dropdown
            data={farNorth.data}
            title={farNorth.title}
            action={setFarNorth}
          />
          {/* Ежемесячная надбавка за особые достижения в службе, военнослужащим,
        проходящим службу на воинских должностях лётного состава,
        лётно-испытательного состава, экипажей кораблей боевых катеров, кораблей
        и судов специального назначения, морских поисково-спасательных судов
        (катеров), Сил специальных операций, дивизионов ракетных полков, а также
        командирам (заместителям командиров) ракетных полков) */}
          <Dropdown
            data={flightPersonnel.data}
            title={flightPersonnel.title}
            action={setFlightPersonnel}
          />
          {/* Надбавка военнослужащим, имеющим высшее юридическое образование */}
          <Dropdown
            data={legalEducation.data}
            title={legalEducation.title}
            action={setLegalEducation}
          />
          {/* Ежемесячная надбавка при награждении знаками отличия Минобороны РФ */}
          <Dropdown
            data={marksOfExcellence.data}
            title={marksOfExcellence.title}
            action={setMarksOfExcellence}
          />
          {/* Надбавка за особые достижения в службе, проходящим обучение в ВА ГШ,
        занимающим отдельные воинские должности */}
          <Dropdown
            data={militaryAcademy.data}
            title={militaryAcademy.title}
            action={setMilitaryAcademy}
          />
          {/* Ежемесячная надбавка за уровень физической подготовленности (надбавка за
        ФИЗО) */}
          <Dropdown
            data={physicalFitness.data}
            title={physicalFitness.title}
            action={setPhysicalFitness}
          />
          {/* Ежемесячная надбавка за особые достижения в службе, военнослужащим,
        проходящим службу на воинских должностях 1-4 т.р. */}
          <Dropdown
            data={positions1_4tr.data}
            title={positions1_4tr.title}
            action={setPositions1_4tr}
          />
          {/* Надбавка за выполнение задач, связанных с риском для жизни и здоровья в
        мирное время, в т.ч. водолазные работы, прыжки с парашютом */}
          <Dropdown
            data={riskToLife.data}
            title={riskToLife.title}
            action={setRiskToLife}
          />
          <View style={styles.wrapper}>
            <Button
              block
              iconLeft
              primary
              onPress={() => console.log(position1, rank1, seniorityBonus1)}
            >
              <Icon type="MaterialCommunityIcons" name="calculator-variant" />
              <Text style={styles.textButton}>Расчитать</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 55,
    marginTop: 10,
    marginHorizontal: 10,
  },
  textButton: {
    paddingLeft: 10,
    paddingRight: 20,
    color: "white",
    fontSize: 20,
  },
});
