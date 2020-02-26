import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import styles from './Navbar.module.scss';

import { getLogout } from '../../actions/login/actions';

const Navbar = props => {

    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                {
                    Object.keys(props.login).includes('data') ? (props.login.data ? (props.login.data.success ? <Logout getLogout={props.getLogout} /> : renderHeader()) : renderHeader()) : renderHeader()
                }
                <Link className={styles.item} to={'/products'}>Products</Link>
                <Link className={styles.item} to={'/add/address'}>Add Address</Link>
                <Link className={styles.item} to={'/address'}>Addresses</Link>
            </div>
        </div>
    );
};

const renderHeader = () => (
    <Fragment>
        <Link className={styles.item} to={'/register'}>Register</Link>
        <Link className={styles.item} to={'/login'}>Login</Link>
    </Fragment>
);

const Logout = ({
    getLogout
}) => (
        <button type="button" className="btn btn-danger" onClick={() => getLogout()}>Logout</button>
    );

const mapDispatchToProps = dispatch => ({
    getLogout: () => dispatch(getLogout())
});

const mapStateToProps = state => {
    return {
        ...state
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
