import React, { memo, useState } from "react";
import MoonSvg from "/images/icon-moon.svg";
import SunSvg from "/images/icon-sun.svg";
import { IconButton } from "@mui/material";
import useThemeToggle from "../../../hooks/useThemeToggle";

function ThemeToggler() {
  let theme = "dark";

  const { toggleMode } = useThemeToggle();

  const mode = localStorage.getItem("theme");

  return (
    <IconButton
      className="mx-4 p-3 tab:mx-auto tab:my-6"
      onClick={toggleMode}
      aria-label="Theme Toggler"
    >
      <img data-theme={mode} src={mode == "dark" ? MoonSvg : SunSvg} alt="" />
    </IconButton>
  );
}

export default memo(ThemeToggler);
