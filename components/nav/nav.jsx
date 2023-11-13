import { NavItem } from "./navItem";

export function Nav() {
	return (
		<nav>
			<div className="flex items-center justify-around p-2">
				<div>Eden Bot</div>
				<div className="flex gap-2">
					<NavItem to="/">Logs</NavItem>
					<NavItem to="/config">Configurações</NavItem>
				</div>
			</div>
		</nav>
	);
}
