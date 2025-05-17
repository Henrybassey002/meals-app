import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText("");
    }
  };
  const handleRandomMeal = () => {
    setSearchTerm(text);
    setText("");
    fetchRandomMeal();
  };

  return (
    <div>
      <header className="search-container">
        Search Component
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="type favorite meal"
            className="form-input"
            value={text}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            search
          </button>
          <button
            type="button"
            className="btn btn-hipster"
            onClick={handleRandomMeal}
          >
            Suprise Me
          </button>
        </form>
      </header>
    </div>
  );
};

export default Search;
