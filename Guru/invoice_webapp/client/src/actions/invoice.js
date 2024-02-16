import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchInvoiceData = createAsyncThunk(
  "fetchInvoiceData",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/invoices");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const postInvoiceData = createAsyncThunk(
  "postInvoiceData",
  async (billData, thunkAPI) => {
    try {
      const response = await axios.post(
        `/api/invoices`,
        billData,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const deleteInvoiceData = createAsyncThunk(
  "deleteInvoiceData",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/invoices/${id}`);
      return dataId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
export const updateStatusInvoiceData = createAsyncThunk(
  "updateStatusInvoiceData",
  async (id, thunkAPI) => {
    try {
      await axios.put(`/api/invoices/${id}`);
      return dataId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
