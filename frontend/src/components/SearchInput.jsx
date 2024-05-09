import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

const SearchInput = ({ search, setSearch }) => {
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        value={search}
        onChange={(e) => {
          let val = e.target.value; // Corrected typo
          setSearch(val);
        }}
        type="text"
        placeholder="Search"
        className="input lg:min-w-[75%] my-2 mx-2 bg-white text-black rounded-xl"
      />
      <button
        type="submit"
        className="bg-sky-500 px-4 py-4 rounded-xl text-white"
      >
        <FaSearch />
      </button>
    </form>
  );
};

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchInput;
