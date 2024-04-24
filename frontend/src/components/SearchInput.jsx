const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input min-w-[450px] lg:min-w-[15vw] my-2 mx-2 bg-white text-black  rounded-xl"
      />
      <button type="submit" className="btn  btn-sky-500 rounded-xl text-white">
        Icon
      </button>
    </form>
  );
};

export default SearchInput;
