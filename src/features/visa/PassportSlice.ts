import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { PassportState, PassportFormData } from "./types";

const initialState: PassportState = {
  name: "",
  passport: "",
  country: "",
  expiryDate: "",
  submitted: false,
};

const passportSlice = createSlice({
  name: "passport",
  initialState,
  reducers: {
    setPassportData: (state, action: PayloadAction<PassportFormData>) => {
      state.name = action.payload.name;
      state.passport = action.payload.passport;
      state.country = action.payload.country;
      state.expiryDate = action.payload.expiryDate;
    },
    submitPassport: (state) => {
      state.submitted = true;
    },
  },
});

export const { setPassportData, submitPassport } = passportSlice.actions;
export default passportSlice.reducer;
