import { Avatar } from "@mui/material";
import React from "react";

function UserAvatar() {
  return (
    <button>
      <Avatar
        alt="User Avatar"
        src="/images/avatar.jpg"
        className="hover:ring-logo mx-6 ring-2 transition tab:mx-auto tab:my-5"
      />
    </button>
  );
}

export default UserAvatar;
