import Navbar from "./subcomponents/Navbar";

export default function Header() {
  return (
    <>
      <header id="main" className="sticky -top-2  z-20 bg-white md:-top-6">
        <Navbar />
      </header>
    </>
  );
}
