import React from "react";
import { Box } from "@mui/material";

function ErrorPage() {
  return (
    <Box
      className="mx-auto flex h-full max-w-xl flex-grow flex-col justify-center text-t-bold dark:text-white"
      component="section"
    >
      <span className="text-2xl">Oops! Something went wrong...</span>
      <br />
      <span> Leave your concerns here: </span>
      <a
        href="mailto:professionalnehal@outlook.com?subject=Feedback&body=Hello, I encountered an error in your web application. Here are the details: [describe the error]"
        className="text-logo"
      >
        Send Feedback
      </a>
    </Box>
  );
}

export default ErrorPage;
