import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input min-w-[80%]  my-2 mx-2 bg-white text-black  rounded-xl"
      />
      <button type="submit" className="btn  btn-sky-500 rounded-xl text-white">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
