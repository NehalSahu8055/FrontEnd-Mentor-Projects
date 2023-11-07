export default function Hero() {
  return (
    <div className="hero flex flex-col overflow-x-hidden  px-6 pb-32 pt-5 md:px-[2.5rem] lg:flex-row-reverse lg:justify-between lg:pt-14 xl:px-[10.5rem]">
      <div className="illustration w-[145%] lg:-mr-48 lg:w-[80%] xl:-mr-64 xl:w-[70%]">
        <img
          src="images/illustration-working.svg"
          alt="working illustration"
          className="w-full"
        />
      </div>
      <div className="nav-text px-6 py-10 lg:grid   lg:w-[60%] lg:place-content-center lg:p-0 lg:text-left ">
        <h2 className=" clamp1 pb-4 font-bold tracking-[-0.04em]  text-[var(--Very-Dark-Violet)] lg:-mt-3  lg:pb-0 lg:tracking-[-0.03em] ">
          More than just shorter links
        </h2>
        <p className="pb-8  text-[1.1rem] text-[var(--Grayish-Violet-2)] lg:mr-8 lg:text-[1.41rem]">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="accessible-focus rounded-full bg-[var(--Cyan)] px-10 py-3 text-[1.2rem] font-medium text-white transition hover:opacity-90 active:scale-90 lg:w-fit">
          Get Started
        </button>
      </div>
      
    </div>
    
    //  w-[145%] px-4 lg:-mr-60 lg:w-[100%] xl:-mr-80
  );
}
