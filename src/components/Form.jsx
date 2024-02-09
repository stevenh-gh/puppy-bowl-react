import { post } from "../api";

function Form({ renderCount, setRenderCount })
{
	async function submitForm(e)
	{
		e.preventDefault();
		const name = e.target.name.value;
		const breed = e.target.breed.value;
		// const status = e.target.status.value;
		const img = e.target.img.value;

		const res = await post(name, breed, status, img);
		if (res.success)
		{
			setRenderCount(renderCount + 1);
		}
	}

	return (
		<>
			<h2>Submit New Player</h2>
			<form onSubmit={e => submitForm(e)}>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" />
				<label htmlFor="breed">Breed:</label>
				<input type="text" id="breed" />
				<label htmlFor="img">Image URL:</label>
				<input type="text" id="img" />
				{/*	<label htmlFor="status">Status:</label> */}
				{/*	<select name="status" id="status"> */}
				{/*		<option value="bench" defaultValue>Bench</option> */}
				{/*		<option value="field">Field</option> */}
				{/*	</select> */}
				<br />
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default Form;
