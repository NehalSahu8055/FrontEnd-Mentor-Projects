export default function SocialLinks() {
  const socialIconsArray = [
    {
      id: 1,
      label: "Facebook",
      icon: "images/icon-facebook.svg",
    },
    {
      id: 2,
      label: "Twitter",
      icon: "images/icon-twitter.svg",
    },
    {
      id: 3,
      label: "Pinterest",
      icon: "images/icon-pinterest.svg",
    },
    {
      id: 4,
      label: "Instagram",
      icon: "images/icon-instagram.svg",
    },
  ];
  const socialIcons = socialIconsArray.map((sicon) => {
    const { id, label, icon } = sicon;
    return (
      <li
        className="hover:[filter:invert(63%)_sepia(76%)_saturate(408%)_hue-rotate(131deg)_brightness(140%)_contrast(94%)]"
        key={id}
      >
        <button
          className="accessible-focus"
          aria-describedby={`social-icon-${label}`}
        >
          <span id={`social-icon-${label}`} className="sr-only">
            Clicking this Icon will take you to {label} page
          </span>
          <img className="p-1 transition" src={icon} alt={`${label} icon`} />
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="social-icons">
        <ul className="flex gap-7">{socialIcons}</ul>
      </div>
      <a
        href="#root"
        className="accessible-focus fixed  bottom-2 right-0 z-30 h-12 w-12 -rotate-45 animate-pulse text-4xl drop-shadow-xl transition-all hover:-translate-y-3 hover:animate-none hover:shadow-sky-200 active:-translate-y-7 md:bottom-4 md:right-4"
        aria-describedby="top-btn"
        tabIndex="0"
      >
        <span id="top-btn" className="sr-only">
          Clicking on this button will navigate you to top of the site page
        </span>
        🚀
      </a>
    </>
  );
}
