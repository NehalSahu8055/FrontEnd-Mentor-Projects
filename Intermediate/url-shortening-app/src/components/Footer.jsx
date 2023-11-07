import Logo from "./subcomponents/Logo";
import QuickLinks from "./subcomponents/QuickLinks";
import SocialLinks from "./subcomponents/SocialLinks";

export default function Footer() {
  return (
    
    <footer className="child:accessible-focus flex flex-col items-center accessible-focus justify-between bg-[var(--Very-Dark-Violet)] px-6 py-14 lg:min-h-fit lg:flex-row lg:items-start md:gap-10 lg:px-[2.5rem]  lg:py-[4.53rem] xl:px-[10.5rem]">
      <Logo fill="#fff" />
      <QuickLinks />
      <SocialLinks />
    </footer>
  );
}
