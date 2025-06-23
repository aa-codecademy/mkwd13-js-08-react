import { useEffect, useState } from "react";
import "./SearchInput.css";

interface SearchInputProps {
  defaultValue: string | null;
  onSearch: (value: string) => void;
}

function SearchInput({ onSearch, defaultValue }: SearchInputProps) {
  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    if (defaultValue) onSearch(value);
  }, [defaultValue, value, onSearch]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(value);
      console.log("search called");
    }, 500);

    return () => {
      console.log("use effect cleanup called");

      clearTimeout(timerId);
    };
  }, [value, onSearch]);

  return (
    <div className="SearchInput">
      <input
        type="text"
        value={value}
        placeholder="Search by product name..."
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
