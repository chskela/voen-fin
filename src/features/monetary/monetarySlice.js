import { createSlice } from "@reduxjs/toolkit";

export const monetarySlice = createSlice({
  name: "monetaryAllowance",
  initialState: {
    positionValue: 0,
    rankValue: 0,
    seniorityBonusValue: 0,
  },
  reducers: {
    setPosition: (state, action) => {
      state.positionValue = action.payload;
    },
    setRank: (state, action) => {
      state.rankValue = action.payload;
    },
    setSeniorityBonus: (state, action) => {
      state.seniorityBonusValue =
        ((state.positionValue + state.rankValue) * action.payload) / 100;
    },
  },
});

export const {
  setPosition,
  setRank,
  setSeniorityBonus,
} = monetarySlice.actions;

export const selectPosition = (state) => {
  return state.monetaryAllowance.positionValue;
};

export const selectRank = (state) => {
  return state.monetaryAllowance.rankValue;
};

export const selectSeniorityBonus = (state) => {
  return state.monetaryAllowance.seniorityBonusValue;
};

export default monetarySlice.reducer;
