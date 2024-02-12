function SearchBar({ setSearchContents })
{
	return <input onChange={e => setSearchContents(e.target.value)} type="text" />;
}

export default SearchBar;
