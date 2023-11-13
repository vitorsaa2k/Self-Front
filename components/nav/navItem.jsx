import Link from "next/link";

export function NavItem(props) {
	return (
		<Link
			href={`${props.to}`}
			className="cursor-pointer hover:bg-slate-500 rounded transition p-2 bg-slate-400"
		>
			{props.children}
		</Link>
	);
}
