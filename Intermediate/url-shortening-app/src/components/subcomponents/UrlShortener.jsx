import { useState } from "react";

export default function UrlShortener() {
  // const [hasCopied, setHasCopied] = useState(false);
  // const handleCopy = () => {
  //   setHasCopied((prev) => !prev);
  // };
  // const origLink = "https://www.frontendmentor.io",
  //   shortLink = "https://www.frontendmentor.io";
  // return (
  //   <div className="link-shorten absolute -top-20  z-10 w-full  px-6 md:px-[2.5rem] xl:px-[10.5rem]">
  //     <form
  //       action="#"
  //       className="flex flex-col gap-4 rounded-xl bg-[var(--Dark-Violet)] bg-[url('/images/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat p-6 transition-all duration-500 md:flex-row md:bg-[url('/images/bg-shorten-desktop.svg')] md:bg-cover md:px-16 md:py-12 "
  //     >
  //       <label htmlFor="link" className="sr-only">
  //         Enter Link here
  //       </label>
  //       <div className="relative md:flex-1">
  //         <input
  //           className="accessible-focus w-full rounded-lg px-4 py-3 text-[var(--Dark-Violet)] outline-none md:px-8 md:py-4 md:text-xl"
  //           type="text"
  //           id="link"
  //           placeholder="Shorten a link here..."
  //         />
  //         {/* role alert for screen readers*/}
  //         <span className="flex text-base text-[var(--Red)]" role="alert">
  //           Please add a link
  //         </span>
  //       </div>
  //       <button
  //         type="submit"
  //         className="accessible-focus rounded-lg bg-[var(--Cyan)] px-10 py-3 text-lg font-bold text-white transition hover:opacity-90 active:scale-90 md:text-xl"
  //       >
  //         Shorten It!
  //       </button>
  //     </form>
  //     {/* Shorten Link */}
  //     <div className="shorten-link mt-2 gap-4 flex md:flex-row  w-full flex-wrap items-center justify-center rounded-lg bg-white p-4 md:px-6 md:py-[1rem]">
  //       <div className="links md:flex-row md:w-full  flex flex-col flex-wrap  lg:w-[85%] justify-between ">
  //         <a
  //           href={origLink}
  //           className="orig-link hover:text-sky-600 text-md text-[var(--Very-Dark-Violet)] max-xs:text-sm md:text-xl"
  //         >
  //           {origLink}
  //         </a>
  //         <a
  //           href={shortLink}
  //           className="short-link hover:text-sky-600 text-md text-[var(--Cyan)] max-xs:text-sm md:text-xl"
  //         >
  //           {shortLink}
  //         </a>
  //       </div>
  //       <button
  //         className={`ml-auto  lg:w-fit  w-full h-fit transition hover:opacity-90 rounded-lg bg-[var(--Cyan)] px-8 py-2 text-white ${
  //           hasCopied && "bg-[var(--Very-Dark-Blue)] transition-all"
  //         } transition-all `}
  //         onClick={handleCopy}
  //       >
  //         {hasCopied ? "Copied" : "Copy"}
  //       </button>
  //     </div>
  //   </div>
  // );
  const apiKey = "0wCU9zIyPJweugyEtBFfFm4P5bNRzLA14NCjFLmbkIz40"; // Replace with your actual API key
  const apiUrl = "https://shrtlnk.dev/api/v2/link";
  const longUrl = "https://www.shrtlnk.dev/developer/applications"; // Replace with the URL you want to shorten

  const requestData = {
    method: "POST",
    headers: {
      "api-key": apiKey,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url: longUrl,
    }),
  };

  fetch(apiUrl, requestData)
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(errorData.message);
        });
      }
    })
    .then((data) => {
      console.log("Shortened URL:", data.shrtlnk);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}
