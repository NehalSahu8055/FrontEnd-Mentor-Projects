import { createSlice, nanoid } from "@reduxjs/toolkit";
import mockDataInvoice from "../data/mockDataInvoice";

const initialState = {
  invoice: [...mockDataInvoice],
  detailInvoice: {},
};

export const invoiceSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getInvoiceDetail: (state, action) => {
      state.detailInvoice = action.payload;
    },
  },
});

export const { getInvoiceDetail } = invoiceSlice.actions;

export default invoiceSlice.reducer;
