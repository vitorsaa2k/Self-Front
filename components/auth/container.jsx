import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../button";
import LoginContext from "@/contexts/isLogged";
import { toast } from "react-toastify";
import axios from "axios";

export function AuthContainer() {
	const [password, setPassword] = useState("");

	const { isLogged, setIsLogged } = useContext(LoginContext);
	console.log(password);
	const inputElement = useRef();

	useEffect(() => {
		if (localStorage.getItem("login")) setIsLogged(true);
		if (inputElement.current) {
			inputElement.current.focus();
		}
	}, []);

	async function login(e) {
		e.preventDefault();
		const req = await axios.post("http://localhost:3001/login", {
			password: password,
		});
		console.log(req.data);
		if (!req.data.error) {
			setIsLogged(true);
			toast.success("Login efetuado");
			localStorage.setItem("login", true);
		} else {
			toast.error("Senha incorreta");
		}
	}
	return (
		<div className={`flex flex-col justify-center items-center h-screen`}>
			<form
				className="flex flex-col justify-center items-center"
				onSubmit={login}
			>
				<label className="flex flex-col m-2" htmlFor="token">
					Senha
					<input
						ref={inputElement}
						autoComplete="off"
						name="token"
						value={password}
						onChange={e => {
							setPassword(e.target.value);
						}}
						className="border-2 w-[400px] py-2 p-1 border-l-black border-gray-400/40 rounded"
					></input>
				</label>
				<Button type="button">Login</Button>
			</form>
		</div>
	);
}