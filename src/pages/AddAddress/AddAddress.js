import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./AddAddress.scss";

import { addAddress } from '../../actions/address/actions';

const AddAddress = props => {
  //Todo Add Address

  const initialFormState = { city: '', country: '', address: '', zip_code: '' };
  const [address, setAddress] = useState(initialFormState);

  const _handleInputChange = event => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  }
  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        if (!address.city || !address.country || !address.address || !address.zip_code) return

        props.addAddress(address);
        setAddress(initialFormState);
      }}>
        <div className="container">
          <label htmlFor="city"><b>City</b></label>
          <input type="text" placeholder="City" name="city" value={address.city} onChange={_handleInputChange} />
          <label htmlFor="country"><b>Country</b></label>
          <input type="text" placeholder="country" name="country" value={address.country} onChange={_handleInputChange} />
          <label htmlFor="address"><b>address</b></label>
          <input type="text" placeholder="Some address" name="address" value={address.address} onChange={_handleInputChange} />
          <label htmlFor="zip_code"><b>zip_code</b></label>
          <input type="text" placeholder="zip_code" name="zip_code" value={address.zip_code} onChange={_handleInputChange} />
          <button type="submit">Address</button>

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
  addAddress: data => dispatch(addAddress(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);
