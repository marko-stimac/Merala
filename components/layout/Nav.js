import Link from 'next/link';
import ActiveLink from '../ActiveLink'

export default function() {
	return (
		<>
			<ul className="nav">
				<li>
					<ActiveLink activeClassName="active" href="/">
						<a className="nav-link">Homepage</a>
					</ActiveLink>
				</li>
				<li>
					<ActiveLink activeClassName="active" href='/blog' as="/blog">
						<a className="nav-link">Blog</a>
					</ActiveLink>
				</li>
				<li>
					<ActiveLink activeClassName="active" href="/contact" as="/contact">
						<a className="nav-link">Contact</a>
					</ActiveLink>
				</li>
			</ul>
			<style jsx>
				{`
					a {
						margin-left: 75px; 
						color: #fff;
					}
					a:hover, a:focus {
						color: #fff;
					}
					.active {
						color: #f01;
					}
					a.active:hover, a.active:focus {
						color: #f01;
					}
					`}
			</style>
		</>
	);
}
