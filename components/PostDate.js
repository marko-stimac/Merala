export default function PostDate(props) {
	const postDate = new Date(props.date);
	return (
		<div className="postdate">{postDate.getDate() + "/" + postDate.getMonth()+1 + "/" + postDate.getFullYear()}</div>
	)
}