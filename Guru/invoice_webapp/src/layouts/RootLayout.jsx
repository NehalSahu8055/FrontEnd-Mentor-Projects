import React from "react";
import { Box, Button, IconButton, Paper } from "@mui/material";
import { ChevronRight, FiberManualRecord } from "@mui/icons-material";
// import PreviewInvoice from "./invoices/PreviewInvoice";
import { Outlet } from "react-router-dom";
import Header from "./../components/Header";

function RootLayout() {
  return (
    <Box className="flex min-h-screen flex-col bg-main font-spartan tab:flex-row dark:bg-d-main">
      <Header />
      <main className="mb-10 mt-14 min-h-screen w-full">
        <Outlet />
      </main>
    </Box>
  );
}

export default RootLayout;
