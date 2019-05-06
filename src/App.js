import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import BookPage from './components/bookpage';
import Register from './components/loginRegister/register';
import BookList from './components/bookList';
import PrivateRoute from './components/privateRoute';
import Login from './components/loginRegister/login';
import ReviewForm from './components/reviewForm';
import HomePage from './components/homepage'
import { tokenExist, logOut } from './actions';
import Scheduler from './components/scheduler'



class App extends Component {
	logOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		localStorage.removeItem('userID');
		this.props.logOut();
		this.props.history.push('/login');
	};
	componentDidMount() {
		if (localStorage.getItem('token')) {
			this.props.tokenExist();
		}
	}

	render() {
		return (
			<div className="App">
				<div className="NavLinks">
				<div className="nav-link2">
				<NavLink className="NavLink" to="/">
								Home
							</NavLink>
				</div>
				
					{!this.props.loggingIn && (
						<div className="nav-link">
							<NavLink className="NavLink" to="/login">
								Login
							</NavLink>
							<NavLink className="NavLink" to="/register">
								Register
							</NavLink>
							
						</div>
					)}
					{this.props.loggingIn && (
						<div className="nav-link">
							<NavLink className="NavLink" to="/protected">
								Donate
							</NavLink>
							<NavLink className="NavLink" to="/scheduler">
								Scheduler
							</NavLink>
						</div>
					)}
					<button className={this.props.loggingIn ? 'loginOutBtn' : 'displayNone'} onClick={this.logOut}>
						Log out
					</button>
				</div>
				<Route
					path="/login"
					render={(props) => (this.props.loggingIn ? <Redirect to="/protected" /> : <Login {...props} />)}
				/>
				<Route path="/register" component={Register} />
				
				<PrivateRoute exact path="/protected" component={BookList} />
				<PrivateRoute exact path="/scheduler" component={Scheduler} />
				<PrivateRoute exact path="/protected/:id" component={BookPage} />
				<Route path="/protected/:id/reviewform" component={ReviewForm} />
				<Route exact path ="/" component={HomePage}/>
			
			</div>
		);
	}
}
const mapStateToProps = ({ loggingIn }) => ({
	loggingIn
});
export default withRouter(connect(mapStateToProps, { tokenExist, logOut })(App));
