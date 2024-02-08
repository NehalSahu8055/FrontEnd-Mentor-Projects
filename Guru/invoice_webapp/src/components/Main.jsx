import React from "react";
import { Button, IconButton, Paper } from "@mui/material";
import { ChevronRight, FiberManualRecord } from "@mui/icons-material";
import PreviewInvoice from "./invoices/PreviewInvoice";

function Main() {
  return (
    <main className="w-full">
      <PreviewInvoice />
    </main>
  );
}

export default Main;
