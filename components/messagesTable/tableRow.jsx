export function TableRow(props) {
	return (
		<div className="grid grid-cols-2 items-center gap-2 text-black m-1">
			<div>{props.user.discordId}</div>
			<div>{props.user.username}</div>
		</div>
	);
}
