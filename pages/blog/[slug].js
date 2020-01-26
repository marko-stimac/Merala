import React from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import HTMLHead from '../../components/layout/Head';
import Layout from '../../components/layout/Layout';
import Intro from '../../components/Intro';
import FooterPosts from '../../components/FooterPosts';
import Content from '../../components/Content';

const Post = ({ post, latestPosts }) => {
	if (!post[0]) {
		return <Error statusCode={404} />;
	} else {
		let meta_title = '',
			meta_desc = '';
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
						<div
							dangerouslySetInnerHTML={{
								__html: post[0].content.rendered
							}}
						/>
					</Content>
					<FooterPosts posts={latestPosts} />
				</Layout>
			</>
		);
	}
};

Post.getInitialProps = async ({ query }) => {
	// Fetch specific one post depending on post slug
	const res = await fetch(`${process.env.APIURL}/posts?slug=${query.slug}`);
	const post = await res.json();
	// Fetch latest 3 posts, excluding current post slug
	const res2 = await fetch(
		`${process.env.APIURL}/posts?_embed&per_page=3&skip_modifications`
	);
	const latestPosts = await res2.json();
	return {
		post,
		latestPosts
	};
};

export default Post;
