import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { VisaState, VisaFormData } from "./types";

const initialState: VisaState = {
  name: "",
  passport: "",
  country: "",
  submitted: false,
};

const visaSlice = createSlice({
  name: "visa",
  initialState,
  reducers: {
    setVisaData: (state, action: PayloadAction<VisaFormData>) => {
      state.name = action.payload.name;
      state.passport = action.payload.passport;
      state.country = action.payload.country;
    },
    submitVisa: (state) => {
      state.submitted = true;
    },
  },
});

export const { setVisaData, submitVisa } = visaSlice.actions;
export default visaSlice.reducer;
