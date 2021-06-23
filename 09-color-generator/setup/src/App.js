import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const DivideColorsBy = 10;

	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values('#f15025').all(DivideColorsBy));

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			setError(false);
			let colors = new Values(color).all(DivideColorsBy);
			setList(colors);
		} catch (error) {
			setError(true);
		}
	};
	return (
		<>
			<section className='container'>
				<h3>Color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						className={`${error ? 'error' : null}`}
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder='#f15025'
					/>
					<button type='submit' className='btn'>
						submit
					</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((color, index) => {
					console.log(color);
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							DivideColorsBy={DivideColorsBy}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
