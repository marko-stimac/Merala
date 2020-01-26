import Link from 'next/link';
import Logo from '../svg/Logo';
import Nav from './Nav';

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<Link href="/">
					<a>
						<Logo />
					</a>
				</Link>

				<Nav />
			</div>
			<style jsx>
				{`
				.header {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
				}
				
				.header .container {
					display: flex;
					justify-content: space-between;
					margin-top: 40px;
				}
				`}
			</style>
		</header>
	);
}
