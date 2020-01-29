import React from 'react';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

import HTMLHead from '../../components/layout/Head';
import Layout from '../../components/layout/Layout';
import Intro from '../../components/Intro';
import LoopPost from '../../components/LoopPost';
import Pagination from '../../components/pagination/';
import Content from '../../components/Content';

const fetcher = async function(...args) {
	const res = await fetch(...args);
	const posts = await res.json();
	const totalPages = res.headers.get('x-wp-totalpages');
	return {
		posts,
		totalPages
	};
};

const Blog = ({ initialData, url }) => {
	const data = useSWR(url, fetcher, { initialData });

	if (!data & !data.data.posts) {
		return <div>loading...</div>;
	} else {
		const posts = data.data.posts.map((post, index) => (<LoopPost post={post} key={index} />));
		const totalPages = data.data.totalPages;
		return (
		<>
			<HTMLHead
				metaTitle="Blog"
				metaDescription="Latest news from the front"
			/>
			<Layout>
				<Intro
					title="Blog"
					desc="Latest news from the front"
				/>
				<Content>
					<div className="row">{posts}</div>
					{<Pagination totalPages={totalPages} />}
				</Content>
			</Layout>
		</>
		)
	}
};

Blog.getInitialProps = async ({ query }) => {
	const page = query.page ? query.page : 1;
	const url = `${process.env.APIURL}/posts?_embed&page=${page}`;
	const initialData = await fetcher(url);

	return { initialData, url };
};

export default Blog;
