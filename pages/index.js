import { useEffect } from "react";
import { BotInfo } from "@/components/botInfo";
import { Table } from "@/components/messagesTable/table";

export default function Home() {
	return (
		<main className={`flex flex-col justify-center items-center`}>
			<div className="mt-4">
				<BotInfo />
				<Table />
			</div>
		</main>
	);
}
