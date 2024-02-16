import { createSlice } from "@reduxjs/toolkit";
import {
  deleteInvoiceReducers,
  fetchInvoiceReducers,
  postInvoiceReducers,
  updateStatusInvoiceReducers,
} from "../reducers/invoice";
import {
  deleteInvoiceData,
  fetchInvoiceData,
  postInvoiceData,
  updateStatusInvoiceData,
} from "../actions/invoice";

const initialState = {
  invoice: [
    {
      id: "",
      createdAt: "",
      paymentDue: "",
      description: "",
      paymentTerms: 0,
      clientName: "",
      clientEmail: "",
      status: "",
      senderAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      clientAddress: {
        street: "",
        city: "",
        postCode: "",
        country: "",
      },
      items: [
        {
          name: "",
          quantity: 0,
          price: 0,
          total: 0,
        },
      ],
      total: 0,
    },
  ],
  editing: { id: "", isEditing: false },
  loading: false,
  updating: false,
  deleting: false,
  error: null,
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setisEditing: (state, action) => {
      return {
        ...state,
        editing: {
          id: action.payload.id,
          isEditing: action.payload.isEditing,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoiceData.pending, fetchInvoiceReducers.pending)
      .addCase(fetchInvoiceData.fulfilled, fetchInvoiceReducers.fulfilled)
      .addCase(fetchInvoiceData.rejected, fetchInvoiceReducers.rejected)
      .addCase(postInvoiceData.pending, postInvoiceReducers.pending)
      .addCase(postInvoiceData.fulfilled, postInvoiceReducers.fulfilled)
      .addCase(postInvoiceData.rejected, postInvoiceReducers.rejected)
      .addCase(deleteInvoiceData.pending, deleteInvoiceReducers.pending)
      .addCase(deleteInvoiceData.fulfilled, deleteInvoiceReducers.fulfilled)
      .addCase(deleteInvoiceData.rejected, deleteInvoiceReducers.rejected)
      .addCase(
        updateStatusInvoiceData.pending,
        updateStatusInvoiceReducers.pending,
      )
      .addCase(
        updateStatusInvoiceData.fulfilled,
        updateStatusInvoiceReducers.fulfilled,
      )
      .addCase(
        updateStatusInvoiceData.rejected,
        updateStatusInvoiceReducers.rejected,
      );
  },
});

export const { setisEditing } = invoiceSlice.actions;

export default invoiceSlice.reducer;
