import React from "react";
import { Button, IconButton, Paper } from "@mui/material";
import { ChevronRight, FiberManualRecord } from "@mui/icons-material";
import PreviewInvoice from "./invoices/PreviewInvoice";

function Main() {
  return (
    <main className="mx-auto grid w-2/3">
      <PreviewInvoice />
    </main>
  );
}

export default Main;
