import { useEffect, useState } from "react";
import { get } from "../api";

function Puppies()
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
	}, []);

	return (
		<div>
			{puppyPlayers.map((player) =>
			{
				return <div>{player.name}</div>;
			})}
		</div>
	);
}

export default Puppies;
