import { useState } from "react";
import info from "./assets/data.json";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  const [selectedKeyword, setKeyword] = useState();
  const [isLoading, setLoading] = useState(false);

  const handleKeywordSelection = (keyword) => {
    setLoading(true);

    setKeyword(keyword);

    setTimeout(() => {
      setLoading(false); // Set loading state to false when filtering is complete
    }, 300);
  };

  const filteredJobs = selectedKeyword
    ? info.filter((job) => {
        return (
          job.role === selectedKeyword ||
          job.level === selectedKeyword ||
          job.languages.includes(selectedKeyword) ||
          job.tools.includes(selectedKeyword)
        );
      })
    : info;

  return (
    <>
      <Header
        info={info}
        onKeywordSelect={handleKeywordSelection}
        isLoading={isLoading}
      />
      <MainContainer info={filteredJobs} isLoading={isLoading} />
    </>
  );
}

export default App;
