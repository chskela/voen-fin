import { configureStore } from "@reduxjs/toolkit";
import monetaryReducer from "../features/monetary/monetarySlice";

export default configureStore({
  reducer: {
    monetaryAllowance: monetaryReducer,
  },
});
