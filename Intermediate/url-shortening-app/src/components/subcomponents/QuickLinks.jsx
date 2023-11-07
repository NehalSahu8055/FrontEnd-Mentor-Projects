export default function QuickLinks() {
  const quickLinksArray = [
    {
      id: 1,
      label: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      id: 2,
      label: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      id: 3,
      label: "Company",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  const quickLinks = quickLinksArray.map((item) => {
    const { id, label, links } = item;
    return (
      <div key={id} className="text-center md:text-left">
        <h4 className="pb-2 text-[1rem] font-semibold text-white">{label}</h4>
        <ul className="mt-3 flex flex-col gap-2 transition-all ">
          {links.map((link, ind) => {
            return (
              <li key={ind}>
                <a
                  href="#"
                  className="accessible-focus text-sm font-medium text-[var(--Grayish-Violet)] transition-colors hover:text-[var(--Cyan-2)]"
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <div className="quick-links  flex grid-rows-2 flex-col items-center gap-12 py-12 md:flex-row md:items-start md:gap-20 md:py-0">
      {quickLinks}
    </div>
  );
}
