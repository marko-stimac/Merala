export default function Intro (props) {
	return (
		<>	
			<div className="intro">
				<div className="container">
					<div className="intro-inside">
					<h1>{props.title}</h1>
					<p>{props.desc ? props.desc : ''}</p>
					{/* <p>aaa {process.env.customKey}</p> */}
					</div>
				</div>
			</div>
				<style jsx>
					{
					`
						.intro {
							background: #444;
							color: #fff;
						}
						.intro-inside {
							padding: 150px 100px 50px;
						}
						h1 {
							font-weight: 700;
						}
					`
					}
				</style>
		</>
	)
}