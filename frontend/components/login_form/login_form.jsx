import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

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
      hashHistory.push("/home");
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
					<label className="form-title">M E M R Y S</label>
					<br/>
					{ this.renderErrors() }
					<div className="login-form">
						<br />
						<label> Username:</label>
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />


						<br />
						<label> Password: </label>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />


						<br />
						<input type="submit" value="LOGIN" />
            <br/>
            <label className="form-footer">
              Don't have an account? { <Link to="/signup">Sign up</Link> }
            </label>
					</div>
				</form>
			</div>
    );
  }
}


export default withRouter(LoginForm);
