import { Inter } from "next/font/google";
import { getUsersCount } from "@/actions/api/user";
import { useEffect, useState } from "react";
import { BotInfo } from "@/components/botInfo";
import { Table } from "@/components/messagesTable/table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [fact, setFact] = useState([]);

	useEffect(() => {
		setNewFact();
	}, []);

	async function setNewFact() {
		const getFact = await getUsersCount();
	}

	return (
		<main className={`flex flex-col justify-center items-center`}>
			<div className="mt-4">
				<BotInfo />
				<Table />
			</div>
		</main>
	);
}
