import { Button } from "@/components/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Config() {
	const [config, setConfig] = useState({
		interval: 0,
		firstDelay: 0,
		secondDelay: 0,
		thirdDelay: 0,
		message: "",
		token: "",
	});

	useEffect(() => {
		getConfig();
	}, []);

	async function sendNewConfig() {
		const req = await axios
			.put("https://self-api-ozjt.onrender.com/server", { ...config })
			.then(toast.success("Nova configuração salva"))
			.catch(err => toast.error("Ocorreu um erro"));

		console.log(req);
	}

	async function getConfig() {
		const config = await axios.get("https://self-api-ozjt.onrender.com/server");
		console.log(config.data.message);
		setConfig(config.data);
	}
	return (
		<div className="flex justify-center items-center">
			<div className=" bg-white shadow p-4 rounded mt-12 w-[1000px] gap-2 flex flex-col">
				<label className="flex flex-col m-2" htmlFor="token">
					Discord Token
					<input
						name="token"
						value={config.token}
						onChange={e => {
							setConfig(prevConfig => ({
								...prevConfig,
								token: e.target.value,
							}));
						}}
						className="border-2 max-w-[300px] py-2 p-1 border-l-black border-gray-400/40 rounded"
					></input>
				</label>

				<label className="flex flex-col m-2" htmlFor="firstDelay">
					Delay de cada mensagem (segundos)
					<input
						name="firstDelay"
						value={config.interval}
						onChange={e => {
							setConfig(prevConfig => ({
								...prevConfig,
								interval: Number(e.target.value),
							}));
						}}
						className="border-2 max-w-[300px] py-2 p-1 border-l-black border-gray-400/40 rounded"
					></input>
				</label>

				<label className="flex flex-col m-2" htmlFor="firstDelay">
					Delay a cada 10 mensagems (segundos)
					<input
						name="firstDelay"
						value={config.firstDelay}
						onChange={e => {
							setConfig(prevConfig => ({
								...prevConfig,
								firstDelay: Number(e.target.value),
							}));
						}}
						className="border-2 max-w-[300px] py-2 p-1 border-l-black border-gray-400/40 rounded"
					></input>
				</label>

				<label className="flex flex-col m-2" htmlFor="secondDelay">
					Delay a cada 50 mensagems (segundos)
					<input
						name="secondDelay"
						value={config.secondDelay}
						onChange={e => {
							setConfig(prevConfig => ({
								...prevConfig,
								secondDelay: Number(e.target.value),
							}));
						}}
						className="border-2 max-w-[300px] py-2 p-1 border-l-black border-gray-400/40 rounded"
					></input>
				</label>

				<label className="flex flex-col m-2" htmlFor="thirdDelay">
					Delay a cada 500 mensagems (segundos)
					<input
						name="thirdDelay"
						value={config.thirdDelay}
						onChange={e => {
							setConfig(prevConfig => ({
								...prevConfig,
								thirdDelay: Number(e.target.value),
							}));
						}}
						className="border-2 max-w-[300px] py-2 p-1 border-l-black border-gray-400/40 rounded"
					></input>
				</label>

				<label className="flex flex-col m-2" htmlFor="thirdDelay">
					Mensagem
					<textarea
						cols={50}
						rows={20}
						name="thirdDelay"
						value={config.message}
						onChange={e => {
							setConfig(prevConfig => ({
								...prevConfig,
								message: e.target.value,
							}));
						}}
						className="border-2 max-w-[500px] p-1 text-[12px] border-l-black border-gray-400/40 rounded"
					></textarea>
				</label>
				<div className="w-[70px] m-2">
					<Button onClick={sendNewConfig}>Salvar</Button>
				</div>
			</div>
		</div>
	);
}
