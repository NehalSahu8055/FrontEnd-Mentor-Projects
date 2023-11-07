import SelectionBox from "./subcomponents/SelectionBox";
export default function Header({ info, onKeywordSelect }) {
  return (
    <header>
      <div className="relative -z-10 min-h-[11.5rem] bg-[var(--Desaturated-Dark-Cyan)] bg-[url('/images/bg-header-mobile.svg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/images/bg-header-desktop.svg')]"></div>
      <SelectionBox info={info} onKeywordSelect={onKeywordSelect} />
    </header>
  );
}
