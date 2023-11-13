import { Nav } from "@/components/nav/nav";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";

export default function App({ Component, pageProps }) {
	return (
		<>
			<ToastContainer transition={Slide} position="bottom-right" />
			<Nav />
			<Component {...pageProps} />
		</>
	);
}
