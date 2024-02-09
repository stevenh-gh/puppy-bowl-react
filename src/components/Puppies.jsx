import { useEffect, useState } from "react";
import { get } from "../api";
import Player from "./Player";

function Puppies({ renderCount, setRenderCount })
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

	return (
		<div className="grid">
			{puppyPlayers.map(player =>
			{
				return (
					<div key={player.id} className="grid-child">
						<Player player={player} renderCount={renderCount} setRenderCount={setRenderCount} />
					</div>
				);
			})}
		</div>
	);
}

export default Puppies;
