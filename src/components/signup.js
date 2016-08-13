import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.onNewEmailChange = this.onNewEmailChange.bind(this);
    this.onNewPasswordChange = this.onNewPasswordChange.bind(this);
    this.onNewUsernameChange = this.onNewUsernameChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }
  onNewEmailChange(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onNewPasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onNewUsernameChange(event) {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onSignUp(event) {
    // this.props.onSubmit(this.state.notecontent);
    this.props.signupUser({ email: this.state.email, password: this.state.password, username: this.state.username });
  }
  render() {
    return (
      <div id="input-bar">
        <form>
          <input placeholder="Email" onChange={this.onNewEmailChange} value={this.state.email} />
        </form>
        <form>
          <input placeholder="Password" onChange={this.onNewPasswordChange} value={this.state.password} />
        </form>
        <form>
          <input placeholder="Username" onChange={this.onNewUsernameChange} value={this.state.username} />
        </form>
        <form>
          <input type="button" value="Sign Up!" onClick={this.onSignUp} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
  {
    auth: state.auth.authenticated,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(SignUp);
// export default New;
