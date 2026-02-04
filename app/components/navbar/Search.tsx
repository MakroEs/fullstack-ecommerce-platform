const Search = () => {
  return (
    <div className="hidden md:flex  flex-1 ">
      <input
        className="py-2 px-3  border-none outline-none flex flex-1 bg-white text-orange-600"
        type="text"
        placeholder="Arama Yap..."
      />
      <button className="p-2  text-sm border border-transparent  bg-orange-800">
        Ara
      </button>
    </div>
  );
};

export default Search;
