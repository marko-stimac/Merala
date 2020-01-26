import Link from 'next/link';
import PostDate from './PostDate';

export default function LoopPost(data) {

	const post = data.post;
	const imgSrc = (
		post._embedded &&
		post._embedded['wp:featuredmedia'] &&
		post._embedded['wp:featuredmedia'][0] &&
		post._embedded['wp:featuredmedia'][0].source_url
	  ) ? post._embedded['wp:featuredmedia'][0].source_url : 'https://via.placeholder.com/300x160';
	/* const imgSrc = post.feature_img_url ? post.feature_img_url : ''; */

	return (
		<article className="post col-md-4">
			<Link href='/blog/[slug]' as={`/blog/${post.slug}`}>
				<a>
					{<img className="img-fluid" src={imgSrc} alt={post.feature_img_alt ? post.feature_img_alt : ''} />}
					<PostDate date={post.date}/>
					<h2 className="post-title">{post.title.rendered}</h2>
				</a>
			</Link>
			<style jsx>
				{
				`
					a:hover {
						text-decoration: none;
					}
					a:hover img {
						opacity: .9;
					}
					img {
						transition: opacity 200ms;
					}
					.post-title {
						font-weight: 700;
						font-size: 20px;
						margin-top: 5px;
						margin-bottom: 40px;
						color: black;
					}
					.postdate {
						color: black;
						margin-top: 5px;
						font-size: 12px;
					}
				`
				}
			</style>
		</article>
	);
}
