import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ArrowLeft from './svg/ArrowLeft';
import ArrowRight from './svg/ArrowRight';

/**
 * Create pagination links to pages
 * @param {array} Array with all page numbers
 * @param {integer} currentPage number
 */
function paginator(arr, currentPage) {
	// How many pages to show before and after current page
	const range = 4;
	const currentPagePosition = currentPage - 1;

	// Get pages before current page
	const prevPages = arr.slice(
		arr[currentPagePosition - range],
		currentPagePosition
	);
	// Get pages from current page forward
	const nextPages = arr.slice(
		arr[currentPagePosition],
		currentPagePosition + range
	);
	// Create array or values from results
	let data = [...nextPages, currentPage, ...prevPages];
	// Remove duplicates and sort values
	data = data.sort().filter(function(elem, index, arr) {
		return index == arr.length - 1 || arr[index + 1] != elem;
	});
	// Prepare HTML
	const pages = data.map(page => {
		if (page !== currentPage) {
			return (
				<li key={page}>
					<Link
						href={{
							pathname: '/blog',
							query: { page: page }
						}}
					>
						<a>{page}</a>
					</Link>
				</li>
			);
		} else {
			return (
				<li className="active" key={page}>
					{page}
				</li>
			);
		}
	});
	return pages;
}

export default function Pagination(props) {
	const router = useRouter();
	const currentPage = router.query.page ? parseInt(router.query.page) : 1;
	const totalPages = parseInt(props.totalPages);
	// Create an array with values ranging from 1 to {totalPages}
	const pagesArray = Array.from({ length: totalPages }, (v, k) => k + 1);
	// Call function to get pagination links, pass data and current page to the function
	const pagesLinks = paginator(pagesArray, currentPage);

	let prevLink;
	let nextLink;

	// Create prev link
	if (currentPage && currentPage > 1) {
		prevLink = (
			<li className="pagination__prev">
				<Link
					href={{
						pathname: '/blog',
						query: { page: currentPage - 1 }
					}}
				>
					<a>
						<ArrowLeft />
					</a>
				</Link>
			</li>
		);
	}

	// Create next link
	if (!currentPage || currentPage < totalPages) {
		nextLink = (
			<li className="pagination__next">
				<Link
					href={{
						pathname: '/blog',
						query: {
							page: currentPage ? currentPage + 1 : 2
						}
					}}
				>
					<a>
						<ArrowRight />
					</a>
				</Link>
			</li>
		);
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
					.pagination .active {    
						display: flex;
						align-items: center;
						justify-content: center;
					}
				`}
			</style>
		</>
	);
}
