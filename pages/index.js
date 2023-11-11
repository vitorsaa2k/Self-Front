import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/button";
import { getUsersCount } from "@/actions/api/user";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

	const [fact, setFact] = useState([])

	useEffect(() => {
		setNewFact()
	}, [])

	async function setNewFact() {
		const getFact = await getUsersCount()
		console.log(getFact)
		setFact(getFact.entries)
	}

	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<Button onClick={setNewFact}>Set new fact</Button>
			total APIs: {fact.length}
			{fact.map(entrie => {
				return (
					<div className="bg-black/50 m-2 rounded p-2">
						API name: {entrie.API}
						Description: {entrie.description}
						Auth: {entrie.Auth}
						Category: {entrie.Category}
						Cors: {entrie.Cors}
					</div>
				)
			})}
		</main>
	);
}
