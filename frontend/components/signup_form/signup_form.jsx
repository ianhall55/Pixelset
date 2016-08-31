import React from 'react';
import { Link, hashHistory } from 'react-router';
import { withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
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
    this.props.signup({user});
    hashHistory.push("/home");
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
						<label> Name:
							<input type="text"
								value={this.state.name}
								onChange={this.update("name")}
								className="login-input" />
						</label>

            <br />
						<label> Email:
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input" />
						</label>

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
						<input type="submit" value="GET STARTED" />
            <br />
              <label className="form-footer">
                Already have and account? { <Link to="/login">Log in</Link> }
              </label>

					</div>
				</form>
			</div>
    );
  }
}


export default withRouter(SignupForm);
