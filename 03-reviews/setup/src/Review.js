import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];

	const checkIndex = (number) => {
		if (number > people.length - 1) {
			number = 0;
			return number;
		} else if (number < 0) {
			number = people.length - 1;
			return number;
		}
		return number;
	};

	const nextPerson = () => {
		setIndex((index) => {
			const newIndex = index + 1;
			return checkIndex(newIndex);
		});
	};

	const prevPerson = () => {
		setIndex((index) => {
			const newIndex = index - 1;
			return checkIndex(newIndex);
		});
	};

	const randomPerson = () => {
		let randomNumber = Math.floor(Math.random() * people.length);
		randomNumber = randomNumber === index ? index + 1 : randomNumber;
		setIndex(checkIndex(randomNumber));
	};

	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info'>{text}</p>
			<div>
				<button className='prev-btn' onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextPerson}>
					<FaChevronRight />
				</button>
				<button className='random-btn' onClick={randomPerson}>
					suprise me
				</button>
			</div>
		</article>
	);
};

export default Review;
