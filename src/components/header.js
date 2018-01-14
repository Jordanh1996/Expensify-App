import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/dashboard' activeClassName="is-active">this is dashboard </NavLink>
        <NavLink to='/expense' activeClassName="is-active">add expense</NavLink>
        <button onClick={startLogout}>Log Out</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);