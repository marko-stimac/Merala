import Link from 'next/link';

const ListItem = props => {
	return (
		<li>
			<Link
				href={{
					pathname: '/blog',
					query: { page: props.page }
				}}
			>
				<a>{props.page}</a>
			</Link>
		</li>
	);
};

export default ListItem;
