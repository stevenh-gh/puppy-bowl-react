import { useEffect, useState } from "react";
import { get } from "../api";
import Player from "./Player";

function Puppies({ renderCount, setRenderCount, searchContents })
{
	const [puppyPlayers, setPuppyPlayers] = useState([]);

	useEffect(() =>
	{
		async function getPuppyPlayers()
		{
			const data = await get();
			// console.log(data.data.players);
			setPuppyPlayers(data.data.players);
		}
		getPuppyPlayers();
	}, [renderCount]);

	function renderPuppyGrid()
	{
		return puppyPlayers.map(player =>
		{
			return (
				<div key={player.id} className="grid-child">
					<Player player={player} renderCount={renderCount} setRenderCount={setRenderCount} />
				</div>
			);
		});
	}

	function renderSearchResults()
	{
		return puppyPlayers.filter(player => player.name.toLowerCase() === searchContents.toLowerCase()).map(player =>
		{
			return (
				<div key={player.id} className="grid-child">
					<Player player={player} renderCount={renderCount} setRenderCount={setRenderCount} />
				</div>
			);
		});
	}

	return (
		<div className="grid">
			{searchContents.length ? renderSearchResults() : renderPuppyGrid()}
		</div>
	);
}

export default Puppies;
