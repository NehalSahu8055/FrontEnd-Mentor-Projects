import React from "react";

function Logo({ classes }) {
  return (
    <div
      className={`bg-logo after:bg-logo-psuedo relative grid h-24 place-content-center overflow-hidden rounded-br-2xl after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2 after:rounded-br-xl after:rounded-tl-2xl ${classes}`}
      aria-label="Home | Invoice"
    >
      <img
        className="z-20 flex w-8  tab:w-10 "
        src="/images/logo.svg"
        alt="Logo Invoice"
      />
    </div>
  );
}

export default Logo;
