import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, userRegister } from '../actions';
import { Card,CardBody,Button } from 'mdbreact';
import logo from '../logo.svg';
import FooterPart from './footer-part'

class Register extends PureComponent {

	state ={
		name:'',
		lastname:'',
		email:'',
		username:'',
		phone:'',
		image:'',
		career:'',
		password:'',
		success:'',
		error:''
	}

	componentWillMount(){
		this.props.dispatch(getUsers())
	}


	handleInputEmail = (event) => {
		this.setState({email:event.target.value})
	}
	handleInputPassword= (event) => {
		this.setState({password:event.target.value})
	}
	handleInputUsername= (event) => {
		this.setState({username:event.target.value})
	}
	handleInputName = (event) => {
		this.setState({name:event.target.value})
	}
	handleInputLastname = (event) => {
		this.setState({lastname:event.target.value})
	}
	handleInputPhone = (event) => {
		this.setState({phone:event.target.value})
	}
	handleInputCareer = (event) => {
		this.setState({career:event.target.value})
	}
	handleInputImage = (event) => {
		this.setState({image:event.target.value})
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.user.register === false){
			this.setState({error:'Invalid input, try again'})
		}

		if(nextProps.user.register === true){
			this.setState({success:'You are now registered!'});
			this.redirectUser();
		} else {
			this.setState({
				name:'',
				lastname:'',
				email:'',
				username:'',
				phone:'',
				image:'',
				career:'',
				password:''
			})
		}
	}

	submitForm = (e) => {
		e.preventDefault();
		this.setState({error:''});

		this.setState({success:''});

		this.props.dispatch(userRegister({
			email:this.state.email,
			password:this.state.password,
			username:this.state.username,
			name:this.state.name,
			lastname:this.state.lastname,
			phone:this.state.phone,
			image:this.state.image,
			career:this.state.career,
		},this.props.user.users))
	}

	redirectUser = () => {
		setTimeout(()=>{
			this.props.history.push('/')
		},2000)
	}



	render() {
		return (
			<div>
				<div className="login-page-desk">
					<Card className="register-card">
						<CardBody>
							<form onSubmit={this.submitForm}>
								<h2>
									<img src={logo} className="logo" alt='logo' />
									Human IT - Social
								</h2>
								<div className="login-field">
									<input
										type="text"
										placeholder="Firstname"
										maxLength="20"
										autoFocus
										value={this.state.name}
										onChange={this.handleInputName}
									/>
								</div>
								<div className="login-field">
									<input
										type="text"
										placeholder="Lastname"
										maxLength="20"
										value={this.state.lastname}
										onChange={this.handleInputLastname}
									/>
								</div>
								<div className="login-field">
									<input
										type="email"
										placeholder="example@mail.com"
										maxLength="30"
										value={this.state.email}
										onChange={this.handleInputEmail}
									/>
								</div>
								<div className="login-field">
									<input
										type="text"
										placeholder="username"
										maxLength="20"
										value={this.state.username}
										onChange={this.handleInputUsername}
									/>
								</div>
								<div className="login-field">
									<input
										type="text"
										placeholder="phone"
										maxLength="20"
										value={this.state.phone}
										onChange={this.handleInputPhone}
									/>
								</div>
								<div className="login-field">
									<input
										type="text"
										placeholder="career"
										maxLength="100"
										value={this.state.career}
										onChange={this.handleInputCareer}
									/>
								</div>
								<div className="login-field">
									<input
										type="text"
										placeholder="imageURL"
										value={this.state.image}
										onChange={this.handleInputImage}
									/>
								</div>
								<div className="login-field">
									<input
										type="password"
										placeholder="Password"
										value={this.state.password}
										onChange={this.handleInputPassword}
									/>
								</div>
								<Button className="login-btn" color="dark-green" type="submit">Register</Button>
								<Link to="/chat"><Button className="login-btn" color="elegant">Back</Button></Link>
								<p className="loginError">{this.state.error}</p>
								<p className="loginSuccess">{this.state.success}</p>
							</form>
						</CardBody>
					</Card>
				</div>
				<div className="login-page-mobile">
					<form onSubmit={this.submitForm}>
						<h2>
							<img src={logo} className="logo" alt='logo' />
							Human IT - Social
						</h2>
						<div className="login-field">
							<input
								type="text"
								placeholder="Firstname"
								maxLength="20"
								autoFocus
								value={this.state.name}
								onChange={this.handleInputName}
							/>
						</div>
						<div className="login-field">
							<input
								type="text"
								placeholder="Lastname"
								maxLength="20"
								value={this.state.lastname}
								onChange={this.handleInputLastname}
							/>
						</div>
						<div className="login-field">
							<input
								type="email"
								placeholder="example@mail.com"
								maxLength="30"
								value={this.state.email}
								onChange={this.handleInputEmail}
							/>
						</div>
						<div className="login-field">
							<input
								type="text"
								placeholder="username"
								maxLength="20"
								value={this.state.username}
								onChange={this.handleInputUsername}
							/>
						</div>
						<div className="login-field">
							<input
								type="text"
								placeholder="phone"
								maxLength="20"
								value={this.state.phone}
								onChange={this.handleInputPhone}
							/>
						</div>
						<div className="login-field">
							<input
								type="text"
								placeholder="career"
								maxLength="100"
								value={this.state.career}
								onChange={this.handleInputCareer}
							/>
						</div>
						<div className="login-field">
							<input
								type="text"
								placeholder="imageURL"
								value={this.state.image}
								onChange={this.handleInputImage}
							/>
						</div>
						<div className="login-field">
							<input
								type="password"
								placeholder="Password"
								value={this.state.password}
								onChange={this.handleInputPassword}
							/>
						</div>
						<Button className="login-btn" color="dark-green" type="submit">Register</Button>
						<Link className="login-link" to="/chat"><Button className="login-btn" color="elegant">Back</Button></Link>
						<p className="loginError">{this.state.error}</p>
						<p className="loginSuccess">{this.state.success}</p>
					</form>
				</div>
				<FooterPart/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		user:state.user
	}
}

export default connect(mapStateToProps)(Register)