import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StyledEngineProvider } from "@mui/material";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NewInvoice from "./components/invoices/NewInvoice.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import Main from "./components/Main.jsx";
import PreviewInvoice from "./components/invoices/PreviewInvoice.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/new-invoice" element={<NewInvoice />} />
      <Route path="/" element={<PreviewInvoice />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>,
);
