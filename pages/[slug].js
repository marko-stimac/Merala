import React from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import HTMLHead from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Intro from '../components/Intro';
import Content from '../components/Content';

const Post = ({ post }) => {
	if (!post[0]) {
		return <Error statusCode={404} />;
	} else {
		let meta_title, meta_desc;
		if (post[0].yoast_meta) {
			meta_title = post[0].yoast_meta.title
				? post[0].yoast_meta.title
				: '';
			meta_desc = post[0].yoast_meta.description
				? post[0].yoast_meta.description
				: '';
		}
		return (
			<>
				<HTMLHead
					metaTitle={meta_title}
					metaDescription={meta_desc}
				/>
				<Layout>
					<Intro
						title={post[0].title.rendered}
						desc={meta_desc}
					/>
					<Content>
						<h2>{post[0].title.rendered}</h2>
						<div
							dangerouslySetInnerHTML={{
								__html: post[0].content.rendered
							}}
						/>
					</Content>
				</Layout>
			</>
		);
	}
};

Post.getInitialProps = async ({ query }) => {
	const res = await fetch(`${process.env.APIURL}/pages/?slug=${query.slug}`);
	const post = await res.json();
	return {
		post
	};
};

export default Post;
