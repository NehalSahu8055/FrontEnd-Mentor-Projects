import React from "react";
import Logo from "./invoices/sidebar/Logo";
import ThemeToggler from "./invoices/Sidebar/ThemeToggler";
import UserAvatar from "./invoices/Sidebar/UserAvatar";
import Divider from "@mui/material/Divider";
import { Paper } from "@mui/material";

function Header() {
  return (
    <div className="z-header">
      <Paper
        elevation={6}
        component="aside"
        square="false"
        className="dark:bg-d-card fixed left-0  top-0 flex w-full justify-between overflow-x-hidden rounded-br-2xl rounded-tr-2xl  tab:bottom-0 tab:h-screen tab:w-24 tab:flex-col"
      >
        <Logo classes="grid place-content-center w-20 tab:w-24 tab:h-24 h-20" />
        <div className="flex tab:flex-col">
          <ThemeToggler />
          <Divider className="bg-divider h-full w-[1px] tab:h-[1px] tab:w-full" />
          <UserAvatar />
        </div>
      </Paper>
    </div>
  );
}

export default Header;
