import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./MyAddress.scss";

import { getAddress } from '../../actions/address/actions';

const MyAddress = props => {

  useEffect(() => {
    props.getAddress();
  }, [props])
  //Todo Show Address listing
  return (
    <div>
      {
        props.address.data ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">Country</th>
                <th scope="col">Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {
                props.address.data.addresses.length ? (
                  props.address.data.addresses.map(({ first_name, last_name, address, city, country, zip_code }, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{first_name}</td>
                      <td>{last_name}</td>
                      <td>{address}</td>
                      <td>{city}</td>
                      <td>{country}</td>
                      <td>{zip_code}</td>
                    </tr>
                  ))
                ) : <tr>No Data Available</tr>

              }
            </tbody>
          </table>
        ) : 'Need to Login'}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  getAddress: () => dispatch(getAddress())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAddress);
