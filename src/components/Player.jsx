import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRequest } from "../api";

function Player({ player, renderCount, setRenderCount })
{
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	async function deletePlayer(id)
	{
		const res = await deleteRequest(id);
		if (res.success)
		{
			setRenderCount(renderCount - 1);
		}
	}

	return (
		<>
			<img src={player.imageUrl} width="100px" />
			<div className="player-name">
				<div>{player.name}</div>
				<span onClick={() => deletePlayer(player.id)}>❌</span>
			</div>
			{show && (
				<>
					<div>Breed: {player.breed}</div>
					<div>Status: {player.status}</div>
					<div>Team ID: {player.teamId}</div>
				</>
			)}
			<button onClick={() => setShow(!show)}>{show ? "Show less" : "Show more"}</button>
			<button onClick={() => navigate(`/player/${player.id}`)}>More details</button>
		</>
	);
}

export default Player;
