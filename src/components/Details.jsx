import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getId } from "../api";

function Details()
{
	const { id } = useParams();
	const [player, setPlayer] = useState({});
	const navigate = useNavigate();

	useEffect(() =>
	{
		async function getPlayer()
		{
			const result = await getId(id);
			if (result.success)
			{
				setPlayer(result.data.player);
			}
		}

		getPlayer();
	}, [id]);

	return (
		<>
			<img src={player.imageUrl} width={200} alt="" />
			<h1>{player.name}</h1>
			<h3>Player ID: {player.id}</h3>
			<h3>Breed: {player.breed}</h3>
			<h3>Status: {player.status}</h3>
			{player.team && <h3>Team name: {player.team.name}</h3>}
			{player.team
				&& player.team.players.filter((player) => player.id !== Number(id)).map((player) => (
					<div>
						<Link key={player.id} to={`/player/${player.id}`}>{player.name}</Link>
					</div>
				))}
			<button onClick={() => navigate(-1)}>Back</button>
		</>
	);
}

export default Details;
