export default function CallToAction() {
  return (
    <div className="cta grid h-[18.8rem] place-content-center bg-[var(--Dark-Violet)] bg-[url('/images/bg-boost-mobile.svg')] bg-right-top bg-no-repeat px-5 pb-6 pt-6 transition-all duration-500 md:bg-[url('/images/bg-boost-desktop.svg')] md:bg-cover lg:h-[15.5rem]">
      <h3 className="pb-4 text-3xl font-medium leading-[3rem] tracking-[-0.04em] text-white lg:pb-8 lg:text-[2.5rem] lg:font-bold">
        Boost your links today
      </h3>
      <button className="accessible-focus mx-auto rounded-full bg-[var(--Cyan)] px-10 py-3 text-[1.2rem] font-medium text-white transition hover:opacity-90 active:scale-90 lg:w-fit">
        Get Started
      </button>
    </div>
  );
}
