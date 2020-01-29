
import ListItem from './ListItem';
import ListItemActive from './ListItemActive';

const paginator = (totalPages, currentPage) => {

	// How many pages to show before and after current page
	const range = 4;
	// Create an array with values ranging from 1 to {totalPages}
	const pagesArray = Array.from({ length: totalPages }, (v, k) => k + 1);
	// Since we are dealing with array and need to get the value by index, substract the value by one
	const currentPagePosition = currentPage - 1;

	// Get pages before current page
	const prevPages = pagesArray.slice(
		pagesArray[currentPagePosition - range],
		currentPagePosition
	);

	// Get pages from current page forward
	const nextPages = pagesArray.slice(
		pagesArray[currentPagePosition],
		currentPagePosition + range
	);

	// Unite all data 
	let data = [...nextPages, currentPage, ...prevPages];

	// Remove duplicates and sort values
	data = data.sort((a,b) => a - b).filter(function(elem, index, pagesArray) {
		return index == pagesArray.length - 1 || pagesArray[index + 1] != elem;
	});

	// Prepare pagination
	const pages = data.map(page => {
		if (page !== currentPage) {
			return <ListItem page={page} key={page} />
		} else {
			return <ListItemActive page={page} key={page} />
		}
	});
	return pages;
}

export default paginator;