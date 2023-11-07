import React, { useState, useEffect } from "react";
import LogoHam from "./LogoHam";

export default function Hamburger({ isSticky }) {
  const closeMenu = (e) => {
    const menuBtn = document.querySelector(".menu-btn");
    menuBtn.setAttribute("aria-expanded", false);
    document.body.classList.add("disable-scroll");
  };
  const toggleMenu = (e) => {
    const isExpanded = e.target.getAttribute("aria-expanded") === "true";
    e.target.setAttribute("aria-expanded", !isExpanded);
    document.body.classList.toggle("disable-scroll");
  };

  const escapeOut = (e) => {
    e.key === "Escape" && closeMenu(e);
  };

  useEffect(() => {
    document.addEventListener("keydown", escapeOut);

    return () => {
      document.removeEventListener("keydown", escapeOut);
    };
  }, []);

  const menuItemsArray = [
    {
      id: 1,
      name: "Features",
    },
    {
      id: 2,
      name: "Pricing",
    },
    {
      id: 3,
      name: "Resources",
    },
  ];

  const menuItems = menuItemsArray.map((item) => {
    const { id, name } = item;
    return (
      <li
        onClick={(e) => {
          const menuBtn = document.querySelector(".menu-btn");
          menuBtn.setAttribute("aria-expanded", false);
        }}
        key={id}
        className="menu-item relative lg:py-[1.15rem]"
      >
        <a
          className="accessible-focus p-1 transition-colors hover:text-[var(--Cyan)] "
          href="#"
        >
          {name}
        </a>
      </li>
    );
  });

  // always use visible and invisble as this is compatible with transitions
  return (
    <div className="hamburger-wrap bg-white lg:w-full" onKeyDown={escapeOut}>
      <span className="sr-only" id="menu-btn">
        Toggle Menu
      </span>

      {/* Ham Menu Button */}
      <button
        className="menu-btn accessible-focus group peer absolute right-6 z-30 flex  flex-col gap-[0.4rem] rounded-sm border border-blue-100 p-2  transition-all duration-300 ease-linear child:pointer-events-none child:h-[0.25rem] child:rounded-lg lg:invisible"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="menu-content"
        aria-labelledby="menu-btn"
        onClick={toggleMenu}
      >
        <LogoHam fill="var(--Cyan-2)" />
      </button>

      <div
        className={`overlay-blur invisible absolute bottom-0 left-0 right-0 top-0  min-h-screen bg-[var(--overlay)] opacity-0 backdrop-blur-[2px] transition-opacity  duration-300 peer-aria-expanded:visible peer-aria-expanded:opacity-100 ${
          isSticky && "top-2 md:top-6"
        }`}
      ></div>

      {/* Menu */}
      <ul
        className="menu-content fixed right-0  top-0 flex min-h-screen translate-x-[260px] flex-col bg-[--Very-Dark-Blue] px-6  pl-8  pt-[9rem] text-center text-lg text-white opacity-0 transition-all  duration-500 peer-aria-expanded:translate-x-0 peer-aria-expanded:opacity-100 max-lg:overflow-y-scroll min-[320px]:w-[16rem] lg:static lg:min-h-fit  lg:w-full lg:translate-x-0 lg:flex-row lg:items-center lg:justify-between lg:bg-white  lg:p-0 lg:pl-10 lg:font-medium lg:text-gray-500  lg:opacity-100"
        id="menu-content"
        role="menu"
      >
        <li role="menuitem">
          <ul className="menu-items -mt-2 flex flex-col gap-8 lg:flex-row lg:gap-5">
            {menuItems}
          </ul>
        </li>
        <li role="menuitem" aria-label="Menu Separator">
          <hr className="my-8 opacity-30 lg:hidden" />
        </li>
        <li role="menuitem">
          <ul className="cta-btns flex flex-col gap-4 lg:flex-row">
            <li>
              <button className="accessible-focus mx-auto w-full rounded-full  border px-10 py-3 text-lg font-medium text-white  transition-all hover:border-[var(--Cyan)] hover:text-[var(--Cyan)]  hover:opacity-90 active:scale-90 lg:px-5 lg:py-2 lg:text-gray-500">
                Login
              </button>
            </li>
            <li>
              <button className="accessible-focus mx-auto w-full rounded-full bg-[var(--Cyan)]  px-10 py-3 text-lg font-medium text-white transition hover:opacity-90   active:scale-90 lg:px-5 lg:py-2">
                Sign Up
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
