import axios from "axios";

export async function getUsersCount() {
	return await axios
		.get("http://localhost:3000/users")
		.then(res => res.data)
		.catch(err => console.log(err));
}
