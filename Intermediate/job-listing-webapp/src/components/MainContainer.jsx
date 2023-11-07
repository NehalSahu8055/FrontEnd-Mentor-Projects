import JobCards from "./subcomponents/JobCards";
export default function Main({ info, isLoading }) {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-10 px-6  py-14 sm:gap-7 ">
      <JobCards info={info} isLoading={isLoading} />
    </main>
  );
}
