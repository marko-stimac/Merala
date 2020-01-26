import React from 'react';
import fetch from 'isomorphic-unfetch';

import HTMLHead from '../components/layout/Head';
import Layout from '../components/layout/Layout';
import Intro from '../components/Intro';
import ContactForm from '../components/ContactForm';
import Content from '../components/Content';

const Post = () => {
	return (
		<>
			<HTMLHead
				metaTitle="Contact"
				metaDescription="Contact us any time"
			/>
			<Layout>
				<Intro title="Contact" desc="Contact us any time" />
				<Content>
					<div className="row">
						<div className="col-md-6">
							Contact info
							<ul>
								<li>asdfasd</li>
								<li>asdfasd</li>
								<li>asdfasd</li>
							</ul>
						</div>
						<div className="col-md-6">
							<ContactForm />
						</div>
					</div>
				</Content>
			</Layout>
		</>
	);
};

Post.getInitialProps = async () => {
	const res = await fetch(`${process.env.APIURL}/pages/?slug=contact`);
	const post = await res.json();
	return {
		post
	};
};

export default Post;
