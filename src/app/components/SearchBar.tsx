const SearchBar = () => {
  return (
    <div
      className="flex items-center w-full"
    >
      <input
        type="text"
        placeholder="Search for a player"
        className="w-full p-2 rounded-md"
      />
    </div>
  );
}

export default SearchBar;