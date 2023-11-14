import axios from "axios";
import { useEffect, useState } from "react";
import { TableRow } from "./tableRow";

export function Table() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		getMessages();
	}, []);

	async function getMessages() {
		const req = await axios.get("https://self-api-ozjt.onrender.com/users");
		setMessages(req.data);
	}
	return (
		<div className="bg-white rounded shadow m-3 w-[600px] flex flex-col gap-1">
			<TableRow
				user={{ discordId: "Discord ID", username: "Username" }}
			></TableRow>
			{messages.map(user => {
				return <TableRow user={user} />;
			})}
		</div>
	);
}
