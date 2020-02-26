import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./Login.scss";

import { getLogin } from '../../actions/login/actions';

const Login = props => {

  const initialFormState = { username: '', password: '' };
  const [user, setUser] = useState(initialFormState);

  const _handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }
  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        if (!user.username || !user.password) return

        props.getLogin(user);
        setUser(initialFormState);
      }}>
        <div className="container">
          <label htmlFor="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" value={user.username} onChange={_handleInputChange} />
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={_handleInputChange} />
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
        </div>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  getLogin: data => dispatch(getLogin(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
