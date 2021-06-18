import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const FetchTours = async () => {
		try {
			setLoading(true);
			const Response = await fetch(url);
			const Data = await Response.json();
			setTours(Data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => {
			return tour.id !== id;
		});
		setTours(newTours);
	};

	useEffect(() => {
		FetchTours();
	}, []);

	if (loading) {
		return (
			<main>
				<Loading></Loading>
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>No tours left</h2>
					<div className='underline'></div>
					<button onClick={FetchTours} className='btn'>
						Refresh
					</button>
				</div>
			</main>
		);
	}
	return (
		<main>
			<Tours
				removeTour={removeTour}
				tours={tours}
				FetchTours={FetchTours}
			></Tours>
		</main>
	);
}

export default App;
