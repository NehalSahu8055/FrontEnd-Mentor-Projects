export const fetchInvoiceReducers = {
  pending: (state) => {
    state.loading = true;
    state.error = null;
  },
  fulfilled: (state, action) => {
    state.loading = false;
    state.invoice = action.payload;
  },
  rejected: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
};

export const postInvoiceReducers = {
  pending: (state) => {
    state.loading = true;
    state.error = null;
  },
  fulfilled: (state, action) => {
    state.loading = false;
    state.invoice = [...state.invoice, action.payload];
  },
  rejected: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
};
export const updateStatusInvoiceReducers = {
  pending: (state) => {
    state.updating = true;
    state.error = null;
  },
  fulfilled: (state) => {
    state.updating = false;
  },
  rejected: (state, action) => {
    state.updating = false;
    state.error = action.payload;
  },
};

export const deleteInvoiceReducers = {
  pending: (state) => {
    state.deleting = true;
    state.error = null;
  },
  fulfilled: (state) => {
    state.deleting = true;
  },
  rejected: (state, action) => {
    state.deleting = false;
    state.error = action.payload;
  },
};
