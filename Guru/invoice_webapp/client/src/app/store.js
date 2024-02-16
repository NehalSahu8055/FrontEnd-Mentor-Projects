import { configureStore } from "@reduxjs/toolkit";
import invoiceRootReducer from "../features/invoiceSlice";

export const store = configureStore({
  reducer: invoiceRootReducer,
});
