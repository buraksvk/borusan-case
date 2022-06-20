import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { setApp } from "../store/app";

function Login(props) {
    const [state, setState] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div className='header'>
           <h1>Login</h1>
           <p>Redux:{props.app}</p>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        app: state.app.app,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setApp: (app) => dispatch(setApp(app)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);