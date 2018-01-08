import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>this is dashboard </NavLink>
        <NavLink to='/edit' activeClassName="is-active">this is edit </NavLink>
        <NavLink to='/help' activeClassName="is-active">this is help </NavLink>
        <NavLink to='/expense' activeClassName="is-active">add expense</NavLink>
    </header>
)

export default Header;