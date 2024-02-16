import React, { useEffect } from "react";
import { Box, Button, IconButton, Paper } from "@mui/material";
import { ChevronRight, FiberManualRecord } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import Header from "./../components/Header";

function RootLayout() {
  return (
    <Box className="flex min-h-screen flex-col bg-main font-spartan dark:bg-d-main tab:flex-row">
      <Header />
      <main className="mb-10 mt-32 min-h-screen w-full px-6 tab:mt-14">
        <Outlet />
      </main>
    </Box>
  );
}

export default RootLayout;
