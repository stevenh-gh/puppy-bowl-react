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
		<div className="search">
			<button onClick={() => setShowSearch(!showSearch)}>{showSearch ? "Collapse search" : "Show search"}</button>
			{showSearch && (
				<div className="searchdiv">
					<input
						placeholder="Search here..."
						className="searchbar"
						onChange={e => setSearchContents(e.target.value)}
						type="text"
					/>
				</div>
			)}
		</div>
	);
}

export default SearchBar;
