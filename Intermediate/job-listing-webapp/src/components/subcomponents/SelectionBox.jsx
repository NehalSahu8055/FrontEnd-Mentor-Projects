export default function SelectionBox({ info, onKeywordSelect }) {
  // extracting unique values in select options
  const roles = [...new Set(info.map((item) => item.role))],
    levels = [...new Set(info.map((item) => item.level))],
    languages = [...new Set(info.flatMap((item) => item.languages))],
    tools = [...new Set(info.flatMap((item) => item.tools))];

  // mapping for options
  const optionRoles = roles.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const optionLevels = levels.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const optionLanguages = languages.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const optionTools = tools.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  const handleSelection = (e) => {
    onKeywordSelect((prevSelection) => e.target.value);
  };

  // selectionBox
  return (
    <div className="select-box-wrapper flex w-full justify-center">
      <div className="select-box mx-6 -mt-28 grid w-full max-w-7xl  gap-3 rounded-md bg-white p-6 px-5 text-[var(--Desaturated-Dark-Cyan)] shadow-md child:child:border-l-[5px] child:child:outline-none sm:-mt-[4.3rem] sm:grid-cols-2 sm:grid-rows-2 sm:gap-4 md:-mt-11 md:grid-cols-4 md:grid-rows-1 md:gap-6">
        <label
          htmlFor="roles"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          <select
            id="roles"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-4 text-lg  text-gray-900 transition duration-300 focus:border-l-[var(--Desaturated-Dark-Cyan)]"
            onChange={handleSelection}
          >
            {optionRoles}
          </select>
        </label>

        <label
          htmlFor="levels"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          <select
            id="levels"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-4 text-lg  text-gray-900 transition duration-300 focus:border-l-[var(--Desaturated-Dark-Cyan)]"
            onChange={handleSelection}
          >
            {optionLevels}
          </select>
        </label>

        <label
          htmlFor="languages"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          <select
            id="languages"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-4 text-lg  text-gray-900 transition duration-300 focus:border-l-[var(--Desaturated-Dark-Cyan)]"
            onChange={handleSelection}
          >
            {optionLanguages}
          </select>
        </label>
        <label
          htmlFor="tools"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          <select
            id="tools"
            className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 px-4 text-lg  text-gray-900 transition duration-300 focus:border-l-[var(--Desaturated-Dark-Cyan)]"
            onChange={handleSelection}
          >
            {optionTools}
          </select>
        </label>
      </div>
    </div>
  );
}
