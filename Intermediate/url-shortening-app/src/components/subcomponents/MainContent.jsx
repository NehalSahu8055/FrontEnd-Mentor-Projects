import CallToAction from "./CallToAction";
import FeatureCards from "./FeatureCards";
import UrlShortener from "./UrlShortener";

export default function MainContent() {
  return (
    <>
      <div className="main-content relative  mt-4 w-full bg-[#EFF1F7]">
        <UrlShortener />
        <FeatureCards />
        <CallToAction />
      </div>
    </>
  );
}
