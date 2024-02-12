import { useNavigate } from "react-router-dom";
import { deleteRequest } from "../api";

function Player({ player, renderCount, setRenderCount })
{
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
			<button onClick={() => navigate(`/player/${player.id}`)}>More details</button>
		</>
	);
}

export default Player;
