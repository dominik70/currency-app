import { RootState } from "../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/helpers";
import { sub } from "date-fns";

interface UserInput {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  date: string;
  fromDate: string;
  toDate: string;
}

const initialState: UserInput = {
  amount: 1,
  date: formatDate(new Date()),
  fromCurrency: "USD",
  toCurrency: "PLN",
  fromDate: formatDate(sub(new Date(), { years: 1 })),
  toDate: formatDate(new Date()),
};

export const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    updateUserInput: (state, action: PayloadAction<Partial<UserInput>>) => {
      return { ...state, ...action.payload };
    },
    swapCurrencies: (state) => {
      [state.fromCurrency, state.toCurrency] = [
        state.toCurrency,
        state.fromCurrency,
      ];
    },
  },
});

export const { updateUserInput, swapCurrencies } = userInputSlice.actions;

export const selectUserInput = (state: RootState) => state.userInput;

export const userInputReducer = userInputSlice.reducer;
