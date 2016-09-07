import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this._handleDemo = this._handleDemo.bind(this);
    this.guestSubmit = this.guestSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  componentWillUnmount(){
    this.props.clearErrors();
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
					<li className="error" key={i}>
						{error}
					</li>
				))}
			</ul>
		);

  }

  _handleDemo() {
		let that = this;
    let i = 1;
    const demoUser = "guest";

    const intervalID = setInterval(function () {
      if (i < 6) {
				that.setState({ username: demoUser.slice(0, i) });
      } else if (i === 6) {
				that.setState({ password: "password" });
      } else {
        window.clearInterval(intervalID);
        that.guestSubmit();
      }
      i++;
    }, 150);
		this.demo = false;

	}

	guestSubmit(){
		const user = this.state;
		this.props.login({user});
	}

  render() {

    return(
      <div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
          {<Link to="/" className="form-title">M E M R Y S</Link>}
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
						<input className="login-submit" type="submit" value="LOGIN" />
            <input type="button"
                       value="Log in with Demo"
                       className="guest-login"
                       onClick={this._handleDemo} />
            <br/>
            <label className="form-footer">
              {"Don't have an account?"} { <Link to="/signup">Sign up</Link> }
            </label>
					</div>
				</form>
			</div>
    );
  }
}


export default withRouter(LoginForm);
