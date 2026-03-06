import { configureStore } from "@reduxjs/toolkit";
import visaReducer from "../features/visa/VisaSlice";
import PassportReducer from "../features/visa/PassportSlice";


export const store = configureStore({
  reducer: {
    visa: visaReducer,
    Passport: PassportReducer ,
  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
