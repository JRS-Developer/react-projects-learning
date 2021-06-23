import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ index, rgb, weight, DivideColorsBy }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(',');
	const hex = rgbToHex(...rgb);

	useEffect(() => {
		let timer = setTimeout(() => {
			setAlert(false);
		}, 2000);
		return () => {
			clearTimeout(timer);
		};
	}, [alert]);

	return (
		<article
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hex);
			}}
			className={`color ${index > DivideColorsBy && 'color-light'}`}
			style={{
				backgroundColor: `rgb(${bcg})`,
			}}
		>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>{hex}</p>
			{alert && <p className='alert'>copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
