const ListItemActive = props => {
	return (
		<>
			<li className="active">
				{props.page}
			</li>
			<style>
				{`
					.active {    
						display: flex !important;
						align-items: center;
						justify-content: center;
					}
				`}
			</style>
		</>
	);
};

export default ListItemActive;
