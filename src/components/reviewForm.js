import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReview } from '../actions';
import StarRatingComponent from 'react-star-rating-component';

class ReviewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			review: '',
			rating: 0,
			book_id: this.props.match.params.id,
			user_id: localStorage.getItem('userID')
		};
	}
	onStarClick(nextValue, prevValue, name) {
		this.setState({ rating: nextValue });
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	submitNewReview = (e) => {
		e.preventDefault();
		this.props.addReview(this.state);
		this.setState({
			review: '',
			rating: 0
		});
		this.props.history.push(`/protected/${this.props.match.params.id}`);
	};

	render() {
		return (
			<div className="Review-Form-Wrapper">
				<form onSubmit={this.submitNewReview}>
					<input className="Review-Field"
						onChange={this.handleInputChange}
						placeholder="review"
						type="text"
						value={this.state.review}
						name="review"
						required
					/>

					<StarRatingComponent
						onStarClick={this.onStarClick.bind(this)}
						className="Star-Rating"
						name="Rating"
						starCount={5}
						value={this.state.rating}
					/>
					<button>Add Review</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { addReview })(ReviewForm);
