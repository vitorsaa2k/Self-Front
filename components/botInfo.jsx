import axios from "axios";
import { useEffect, useState } from "react";

export function BotInfo() {
	const [count, setCount] = useState(0);
	async function getMembersCount() {
		const req = await axios.get("https://self-api-ozjt.onrender.com/users");
		const total = req?.data.length || 0;
		setCount(total);
	}

	useEffect(() => {
		getMembersCount();
	}, []);

	return (
		<div className="shadow-lg bg-white rounded flex justify-center flex-col items-center">
			<h3>Informações</h3>
			<p>Mensagems enviadas: {count}</p>
		</div>
	);
}
