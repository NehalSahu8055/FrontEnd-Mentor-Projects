import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Backdrop,
  CircularProgress,
  StyledEngineProvider,
} from "@mui/material";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import PreviewInvoice from "./pages/PreviewInvoice";
import NewInvoice from "./pages/NewInvoice";
import { Provider } from "react-redux";
import { store } from "./app/store";
import DetailInvoice from "./components/invoices/DetailInvoice.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/new-invoice" element={<NewInvoice />} />
      <Route path="/" element={<PreviewInvoice />} />
      <Route
        path="/invoice/:userid"
        // loader={}
        // load data of this route on just hovering over it before rendering
        element={<DetailInvoice />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
