import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input lg:min-w-[75%]  my-2 mx-2 bg-white text-black  rounded-xl"
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

export default SearchInput;
