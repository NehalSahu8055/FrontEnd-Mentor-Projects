export default function LogoHam({ fill }) {
  return (
    <>
      <div
        className={`transition-ham bg-[${fill}] w-[1rem] group-aria-expanded:w-[1.3rem] group-aria-expanded:origin-bottom group-aria-expanded:translate-x-[0.15rem] group-aria-expanded:translate-y-[0.1rem] group-aria-expanded:rotate-45`}
        aria-hidden="true"
      ></div>
      <div
        className={`transition-ham bg-[${fill}] w-[2.5rem] group-aria-expanded:origin-top group-aria-expanded:-rotate-45`}
        aria-hidden="true"
      ></div>
      <div
        className={`transition-ham bg-[${fill}] w-[1.7rem] group-aria-expanded:w-[1.3rem] group-aria-expanded:origin-bottom group-aria-expanded:translate-x-[1.09rem] group-aria-expanded:translate-y-[-0.3125rem] group-aria-expanded:rotate-45`}
        aria-hidden="true"
      ></div>
    </>
  );
}
