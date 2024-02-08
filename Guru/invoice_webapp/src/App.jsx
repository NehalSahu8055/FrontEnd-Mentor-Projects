import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Box } from "@mui/material";

function App() {
  return (
    <Box className="bg-main dark:bg-d-main flex flex-col tab:flex-row">
      <Header />
      <Main />
    </Box>
  );
}

export default App;
