import { Avatar } from "@mui/material";
import React from "react";

function UserAvatar() {
  return (
    <button>
      <Avatar
        alt="User Avatar"
        src="/images/avatar.jpg"
        className="mx-6 tab:mx-auto tab:my-5"
      />
    </button>
  );
}

export default UserAvatar;
