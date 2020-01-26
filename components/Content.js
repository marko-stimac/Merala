export default ({ children }) => {
	return (
		<>
			<div className="content">
				<div className="container">{children}</div>
			</div>
			<style>
				{`
					.content {
						padding-top: 50px;
						max-width: 1140px;
						margin: 80px auto;
					}
					.content img {
						display: block;
						max-width: 100%;
					}
				`}
			</style>
		</>
	);
};
