import React, { useState } from "react";
import MoonSvg from "/public/images/icon-moon.svg";
import SunSvg from "/public/images/icon-sun.svg";
import { IconButton } from "@mui/material";

function ThemeToggler() {
  let theme = "dark";
  const [themeMode, setthemeMode] = useState(theme);
  return (
    <IconButton
      className="mx-4 p-3 tab:mx-auto tab:my-6"
      onClick={() => {
        setthemeMode((prev) => {
          return prev === "dark" ? "light" : "dark";
        });
      }}
      aria-label="Theme Toggler"
    >
      <img
        data-theme={themeMode}
        src={themeMode == "dark" ? MoonSvg : SunSvg}
        alt=""
      />
    </IconButton>
  );
}

export default ThemeToggler;
