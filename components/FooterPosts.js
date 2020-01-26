import React from 'react';
import LoopPost from '../components/LoopPost';

export default props => {
	const posts = props.posts.map(post => (
		<LoopPost post={post} key={post.id} />
	));
	return (
		<div className="container">
			<h2>Related posts</h2>
			<hr/>
			<div className="row">{posts}</div>
		</div>
	);
};
