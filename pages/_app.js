import { Nav } from "@/components/nav/nav";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<main className={`bg-[#f2eeed] ${inter.className}`}>
			<ToastContainer transition={Slide} position="bottom-right" />
			<Nav />
			<Component {...pageProps} />
		</main>
	);
}
