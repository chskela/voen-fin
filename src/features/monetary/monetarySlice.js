import { createSlice } from "@reduxjs/toolkit";

export const monetarySlice = createSlice({
  name: "monetaryAllowance",
  initialState: {
    airСategoryValue: 1,
    classQualificationValue: 0,
    districtCoefficientValue: 1,
    divisionsProtection: 0,
    driversPositionsValue: 0,
    encryptionAuthoritiesValue: 0,
    farNorthValue: 0,
    flightPersonnelValue: 0,
    legalEducationValue: 0,
    marksOfExcellenceValue: 0,
    militaryAcademyValue: 0,
    physicalFitnessValue: 0,
    positionValue: 0,
    positions1_4trValue: 0,
    premiumValue: 0,
    rankValue: 0,
    riskToLifeValue: 0,
    seniorityBonusValue: 0,
    specialConditionsValue: 0,
    stateSecretValue: 0,
  },
  reducers: {
    setPosition: (state, action) => {
      state.positionValue = action.payload;
    },
    setRank: (state, action) => {
      state.rankValue = action.payload;
    },
    setSeniorityBonus: (state, action) => {
      state.seniorityBonusValue = action.payload;
      // ((state.positionValue + state.rankValue) * action.payload) / 100;
    },
    setClassQualification: (state, action) => {
      state.classQualificationValue = action.payload;
      // (state.positionValue * action.payload) / 100;
    },
    setStateSecret: (state, action) => {
      state.stateSecretValue = action.payload; //(state.positionValue * action.payload) / 100;
    },
    setPremium: (state, action) => {
      state.premiumValue = action.payload;
      // ((state.positionValue + state.rankValue) * action.payload) / 100;
    },
    setSpecialConditions: (state, action) => {
      state.specialConditionsValue = action.payload;
      // (state.positionValue * action.payload) / 100;
    },
    setAirСategory: (state, action) => {
      state.airСategoryValue = action.payload;
      // state.positionValue =
      //   Math.ceil(state.positionValue * state.airСategoryValue * 100) / 100;
      // console.log(
      //   "state.positionValue",
      //   state.positionValue * state.airСategoryValue * 100,
      //   Math.ceil(state.positionValue * state.airСategoryValue * 100) / 100
      // );
    },
    // +========================================================
    setLegalEducation: (state, action) => {
      state.legalEducationValue = action.payload;
    },
    setRiskToLife: (state, action) => {
      state.riskToLifeValue = action.payload;
    },
    setMilitaryAcademy: (state, action) => {
      state.militaryAcademyValue = action.payload;
    },
    setPhysicalFitness: (state, action) => {
      state.physicalFitnessValue = action.payload;
    },
    setMarksOfExcellence: (state, action) => {
      state.marksOfExcellenceValue = action.payload;
    },
    setPositions1_4tr: (state, action) => {
      state.positions1_4trValue = action.payload;
    },
    setDriversPositions: (state, action) => {
      state.driversPositionsValue = action.payload;
    },
    setFlightPersonnel: (state, action) => {
      state.flightPersonnelValue = action.payload;
    },
    setDistrictCoefficient: (state, action) => {
      state.districtCoefficientValue = action.payload;
    },
    setFarNorth: (state, action) => {
      state.farNorthValue = action.payload;
    },
    setDivisionsProtection: (state, action) => {
      state.divisionsProtectionValue = action.payload;
    },
    setEncryptionAuthorities: (state, action) => {
      state.encryptionAuthoritiesValue = action.payload;
    },
  },
});

export const {
  setPosition,
  setRank,
  setSeniorityBonus,
  setClassQualification,
  setStateSecret,
  setPremium,
  setSpecialConditions,
  setAirСategory,
  setLegalEducation,
  setRiskToLife,
  setMilitaryAcademy,
  setPhysicalFitness,
  setMarksOfExcellence,
  setPositions1_4tr,
  setDriversPositions,
  setFlightPersonnel,
  setDistrictCoefficient,
  setFarNorth,
  setDivisionsProtection,
  setEncryptionAuthorities,
} = monetarySlice.actions;

export default monetarySlice.reducer;
