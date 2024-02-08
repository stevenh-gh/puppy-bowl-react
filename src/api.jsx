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
