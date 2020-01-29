import Link from 'next/link';
import ArrowLeft from '../svg/ArrowLeft';
import ArrowRight from '../svg/ArrowRight';

const ListItemDirectional = props => {
	return (
		<li className={props.direction === 'prev' ? 'pagination__prev' : 'pagination__next'} >
			<Link
				href={{
					pathname: '/blog',
					query: { page: props.page }
				}}
			>
				<a aria-label={props.direction ==='prev' ? 'Previous page' : 'Next page'}>
					{(props.direction === 'prev' ? <ArrowLeft/> : <ArrowRight />)}
				</a>
			</Link>
		</li>
	);
};

export default ListItemDirectional;
