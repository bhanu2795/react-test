import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./Register.scss";

import { getAddUser } from '../../actions/register/actions';

const Register = props => {
  //Todo user listing
  const initialFormState = { first_name: '', last_name: '', username: '', email: '', password: '', password_confirmation: '' };
  const [user, setUser] = useState(initialFormState);

  const _handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        if (!user.first_name || !user.last_name || !user.username || !user.email || !user.password || !user.password_confirmation) return

        props.getAddUser(user);
        setUser(initialFormState);
      }}>
        <div className="container">
          <label htmlFor="first_name"><b>First Name</b></label>
          <input type="text" placeholder="Enter First Name" name="first_name" value={user.first_name} onChange={_handleInputChange} />
          <label htmlFor="last_name"><b>Last Name</b></label>
          <input type="text" placeholder="Enter Last Name" name="last_name" value={user.last_name} onChange={_handleInputChange} />
          <label htmlFor="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" value={user.username} onChange={_handleInputChange} />
          <label htmlFor="password"><b>Email</b></label>
          <input type="email" placeholder="email" name="email" value={user.email} onChange={_handleInputChange} />
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Password" name="password" value={user.password} onChange={_handleInputChange} />
          <label htmlFor="password_confirmation"><b>Repeat Passwor</b></label>
          <input type="password" placeholder="Repeat Passwor" name="password_confirmation" value={user.password_confirmation} onChange={_handleInputChange} />
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
        </label>
          <button type="submit">Login</button>

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
  getAddUser: data => dispatch(getAddUser(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
