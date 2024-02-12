import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Puppies from "./components/Puppies";
import SearchBar from "./components/SearchBar";

function App()
{
	const [renderCount, setRenderCount] = useState(0);
	const [showSearch, setShowSearch] = useState(false);
	const [searchContents, setSearchContents] = useState("");

	return (
		<>
			<Navbar />
			<Header />
			<Form renderCount={renderCount} setRenderCount={setRenderCount} />
			{<SearchBar showSearch={showSearch} setShowSearch={setShowSearch} setSearchContents={setSearchContents} />}
			<Puppies renderCount={renderCount} setRenderCount={setRenderCount} searchContents={searchContents} />
		</>
	);
}

export default App;
