const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api";
const cohort = "2308-ACC-PT-WEB-PT-B";

export async function get()
{
	try
	{
		const res = await fetch(`${baseUrl}/${cohort}/players`);
		const data = await res.json();
		return data;
	}
	catch (error)
	{
		console.log(error);
	}
}

export async function getId(id)
{
	try
	{
		const res = await fetch(`${baseUrl}/${cohort}/players/${id}`);
		const result = await res.json();
		return result;
	}
	catch (error)
	{
		console.log(error);
	}
}

export async function post(name, breed, img, status)
{
	try
	{
		const res = await fetch(`${baseUrl}/${cohort}/players`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				breed: breed,
				imgUrl: img,
				// status: status,
			}),
		});
		const result = await res.json();
		return result;
	}
	catch (error)
	{
		console.log(error);
	}
}

export async function deleteRequest(id)
{
	try
	{
		const res = await fetch(`${baseUrl}/${cohort}/players/${id}`, {
			method: "delete",
		});
		const result = await res.json();
		return result;
	}
	catch (error)
	{
		console.log(error);
	}
}
