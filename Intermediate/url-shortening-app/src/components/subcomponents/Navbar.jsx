import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  const scrollListener = () => {
    const handleScroll = () => {
      const isSticky = window.scrollY > 0;
      setIsSticky(isSticky);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  useEffect(scrollListener, []);

  return (
    <nav
      className={`laptop:items-center laptop:justify-start laptop:pt-[3rem] flex justify-between bg-white px-6 pb-5 pt-[2.3rem] transition md:px-[2.5rem] xl:px-[10.5rem]  ${
        isSticky && "shadow-lg"
      }`}
    >
      <Logo fill="var(--Very-Dark-Violet)" />
      <Hamburger isSticky={isSticky} />
    </nav>
  );
}
