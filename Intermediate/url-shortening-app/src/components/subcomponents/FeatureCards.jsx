export default function FeatureCards() {
  const featureCardsArray = [
    {
      id: 1,
      label: "Card-1",
      title: "Brand Recognition",
      about:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      icon: "images/icon-brand-recognition.svg",
    },
    {
      id: 2,
      label: "Card-2",
      title: "Detailed Records",
      about:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: "images/icon-detailed-records.svg",
    },
    {
      id: 3,
      label: "Card-3",
      title: "Fully Customizable",
      about:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: "images/icon-fully-customizable.svg",
      
    },
  ];

  const featureCards = featureCardsArray.map((card) => {
    const { id, icon, title, about } = card;
    return (
      <div
        key={id}
        className={`feature-card relative h-fit rounded-md bg-white px-6 pb-12  pt-8 lg:px-7 
        ${id == 2 && "lg:mt-12"} 
        ${id == 3 && "lg:mt-24"}`}
      >
        <div className="icon absolute -top-10 left-0 right-0 mx-auto grid h-[5.5rem] w-[5.5rem] place-content-center rounded-full bg-[var(--Dark-Violet)] lg:left-4 lg:mx-4 ">
          <img src={icon} alt="" />
        </div>
        <h4 className="pb-2 pt-10 text-[1.4rem] font-bold leading-[3.5rem] tracking-[-0.01em] text-[var(--Very-Dark-Violet)]">
          {title}
        </h4>
        <p className="  text-[0.95rem] text-[var(--Grayish-Violet-2)]">
          {about}
        </p>
      </div>
    );
  });

  return (
    <div className="features px-6 pb-6  pt-40 lg:px-[2.5rem]  lg:pt-[13.5rem] xl:px-[10.5rem]">
      <h3 className="clamp3 ml-2 pb-4 font-bold leading-[3rem] tracking-[-0.04em] text-[var(--Very-Dark-Violet)]">
        Advanced Statistics
      </h3>
      <p className="word  mx-auto max-w-[31.5rem] pb-8 text-[1rem] text-[#6b6971] lg:text-lg lg:leading-8">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="feature-cards relative mx-auto grid max-w-[22rem]  gap-24 overflow-hidden  py-14 lg:max-w-fit lg:grid-cols-3 lg:gap-8 lg:text-left">
        {/* <hr className="absolute left-0 right-0  mx-auto h-[50%] w-2 bg-[var(--Cyan)] lg:h-2 lg:w-[50%]" /> */}
        <hr className="absolute bottom-0 left-0 right-0 top-0  m-auto h-[50%] w-2 bg-[var(--Cyan)] lg:h-2 lg:w-[50%]" />
        {featureCards}
      </div>
    </div>
  );
}
