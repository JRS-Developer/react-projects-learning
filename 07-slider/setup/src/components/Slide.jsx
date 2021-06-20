import React from "react";
import Person from "./Person";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Slide = ({ people, index, setIndex }) => {
	return (
		<div className="section-center">
			{people.map((person, personIndex) => {
				const { id } = person
				let position = "nextSlide";

				if (personIndex === index) {
					position = "activeSlide";
				} else if (
					personIndex === index - 1 ||
					(index === 0 && personIndex === people.length - 1)
				) {
					position = "lastSlide";
				}

				return <Person key={id} position={position} {...person} />;
			})}
			<button className="prev" onClick={() => setIndex(index - 1)}>
				<FiChevronLeft />
			</button>
			<button className="next" onClick={() => setIndex(index + 1)}>
				<FiChevronRight />
			</button>
		</div>
	);
};

export default Slide;
