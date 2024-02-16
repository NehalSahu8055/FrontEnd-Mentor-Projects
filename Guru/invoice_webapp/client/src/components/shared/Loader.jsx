import { Box } from "@mui/material";
import React from "react";

function Loader({ classes }) {
  return (
    <Box
      className={`${classes} grid  place-content-center`}
      component="section"
    >
      <div className=" flex flex-wrap justify-center gap-4">
        <img
          className="h-12 w-12 animate-spin"
          src="/images/icon-loading.svg"
          alt="Loading icon"
        />
      </div>
    </Box>
  );
}

export default Loader;
