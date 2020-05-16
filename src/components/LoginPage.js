import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => {
   
    return (
        <div>
            <button className='btn btn-primary' onClick={startLogin}>Login</button>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({ 
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);