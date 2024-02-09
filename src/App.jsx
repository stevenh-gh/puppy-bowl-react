import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Puppies from "./components/Puppies";

function App()
{
	const [renderCount, setRenderCount] = useState(0);

	return (
		<>
			<Header />
			<Form renderCount={renderCount} setRenderCount={setRenderCount} />
			<Puppies renderCount={renderCount} setRenderCount={setRenderCount} />
		</>
	);
}

export default App;
