import React from 'react';

const Book = (props) => {
	return (
		<div className="Books">
			<div className="Book-Top">
				<h3 className="BookTitle">{props.name}</h3>
				<div className="Book-Image">
					<img className="Cover-Image" src={props.imageUrl} alt="Book Cover" />
				</div>
			</div>
			<ul className="BookInfo">
				<li>Cause: {props.author}</li>
				<li>Donation amount: $ {props.price}</li>
				{/* <li>Publisher: {props.publisher}</li> */}
				{/* <li>Synopsis: {props.description}</li> */}
			</ul>
		</div>
	);
};

export default Book;
