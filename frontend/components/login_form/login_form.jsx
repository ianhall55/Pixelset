import React from 'react';
import { Link, hashHistory } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  update(fieldName){
    return e => { this.setState({[fieldName]: e.currentTarget.value }); };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  renderErrors() {
    return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={i}>
						{error}
					</li>
				))}
			</ul>
		);

  }

  render() {

    return(
      <div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Welcome to Memry!
					<br/>
					Please Login or { <Link to="/signup">Sign up</Link> }
					{ this.renderErrors() }
					<div className="login-form">
						<br />
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<br />
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<br />
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
    );
  }
}


export default LoginForm;
