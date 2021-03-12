import React from 'react';

import Listing from './Listing';

const GamesListing = (props) => {
	let games = props.games;

	return (
		<div className="games-listing">
			{
				games.map((g, index) => (
					<>
						<Listing game={g} index={index}/>
					</>
				))
			}
		</div>
	);
}

export default GamesListing;