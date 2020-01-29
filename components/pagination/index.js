import React from 'react';
import { useRouter } from 'next/router';

import paginator from './paginator';
import ListItemDirectional from './ListItemDirectional';

export default function Pagination(props) {

	const router = useRouter();
	// If current page isn't available by query string start from 1
	const currentPage = router.query.page ? parseInt(router.query.page) : 1;
	// Total number of pages
	const totalPages = parseInt(props.totalPages);
	// Call function to get pagination links
	const pagesLinks = paginator(totalPages, currentPage);

	let prevLink;
	let nextLink;

	// Create prev link
	if (currentPage && currentPage > 1) {
		prevLink = <ListItemDirectional direction="prev" page={currentPage - 1} />
	}

	// Create next link
	if (!currentPage || currentPage < totalPages) {
		nextLink = <ListItemDirectional direction="next" page={currentPage + 1} />
	}

	return (
		<>
			<ul className="pagination">
				{prevLink}
				{pagesLinks}
				{nextLink}
			</ul>
			<style>
				{`
					.pagination {
						margin: 50px 0;
						justify-content: center;
					}
					.pagination li {
						border: 1px solid #ddd;
						margin-left: -1px;
						display: inline-block;
						width: 45px;
						text-align: center;
						height: 45px;
					}
					.pagination a {
						display: flex;
						align-items: center;
						justify-content: center;
						height: 100%;
						width: 100%; 
					}
					.pagination a:hover {
						text-decoration: none;
					}
				`}
			</style>
		</>
	);
}
