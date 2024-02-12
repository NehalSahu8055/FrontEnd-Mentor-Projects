import { createSlice } from "@reduxjs/toolkit";
import mockDataInvoice from "./../data/mockDataInvoice";

const initialState = {
  invoice: [...mockDataInvoice],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
});

export const { getInvoiceDetail } = invoiceSlice.actions;

export default invoiceSlice.reducer;
