import { Nav } from "@/components/nav/nav";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import { Inter } from "next/font/google";
import { useState } from "react";
import LoginContext from "@/contexts/isLogged";
import { AuthContainer } from "@/components/auth/container";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<main className={`bg-[#f2eeed] ${inter.className}`}>
			<LoginContext.Provider value={{ isLogged, setIsLogged }}>
				<ToastContainer transition={Slide} position="bottom-right" />
				{isLogged ? (
					<>
						<Nav />
						<Component {...pageProps} />
					</>
				) : (
					<AuthContainer />
				)}
			</LoginContext.Provider>
		</main>
	);
}
