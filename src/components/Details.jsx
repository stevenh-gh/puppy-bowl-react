import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getId } from "../api";
import Navbar from "./Navbar";

function Details()
{
	const { id } = useParams();
	const [player, setPlayer] = useState({});
	const navigate = useNavigate();

	function showTeamMembers()
	{
		return player.team.players.filter((player) => player.id !== Number(id)).map((player) => (
			<div key={player.id}>
				<Link to={`/player/${player.id}`}>{player.name}</Link>
			</div>
		));
	}

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
			<Navbar />
			<div className="details">
				<img src={player.imageUrl} width={200} alt="" />
				<h1>{player.name}</h1>
				<h3>Player ID: {player.id}</h3>
				<h3>Breed: {player.breed}</h3>
				<h3>Status: {player.status}</h3>
				{player.team && <h3>Team name: {player.team.name}</h3>}
				{player.team && (
					<>
						<h3>Team members:</h3>
						{showTeamMembers()}
					</>
				)}
				<div className="details-button">
					<button onClick={() => navigate(-1)}>Back</button>
				</div>
			</div>
		</>
	);
}

export default Details;
