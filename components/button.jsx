export function Button(props) {
  return (
    <>
      <button className="bg-gray-800 py-1 px-2 rounded" {...props}>{props.children}</button>
    </>
  )
}