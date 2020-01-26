import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<div className="footer">
				<div className="container">
					<div className="footer-bottom">
						<div className="footer-bottom-left">
							© Copyright {new Date().getFullYear()}, All
							Rights Reserved
						</div>
						<div className="footer-bottom-right">
							{/* <Link href="/[slug]" as="/privacy-policy/">
								<a>Privacy policy</a>
							</Link> */}
						</div>
					</div>
				</div>
			</div>
			<style jsx>
				{`
				.footer {
					margin: 50px 0 20px 0
				}
				.footer-bottom {
					display: flex;
					justify-content: space-between;
					margin-top: 40px;
					margin-bottom: 20px;
				}
				small {
					font-style: italic;	
				}
				`}
			</style>
		</>
	);
}
