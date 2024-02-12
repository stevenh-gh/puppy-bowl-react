import { useEffect } from "react";

function SearchBar({ showSearch, setShowSearch, setSearchContents })
{
	useEffect(() =>
	{
		if (!showSearch)
		{
			setSearchContents("");
		}
	}, [showSearch]);

	return (
		<div>
			<button onClick={() => setShowSearch(!showSearch)}>{showSearch ? "Collapse search" : "Show search"}</button>
			{showSearch && <input className="searchbar" onChange={e => setSearchContents(e.target.value)} type="text" />}
		</div>
	);
}

export default SearchBar;
