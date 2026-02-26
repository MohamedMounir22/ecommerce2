


import React from 'react';
import './loginPage.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function LoginPage() {
    return (
        <div className='loginContainer'>
            <h2>Login</h2>
            <hr />
            {/* form that has name and email and massege and send button */}
            <form className='loginForm' style={{ display: 'flex', flexDirection: 'column',  }}>
                <h6>email adress</h6>
                <input type="text" placeholder="name@example.com" style={{  fontSize: '1rem' }} />
                <h6>password</h6>
                <input type="password" placeholder="password" style={{  fontSize: '1rem' }} />
                {/* new her ? register */}
                <p style={{ fontSize: '0.9rem' }}>new here   <Link className='rebtn' to="/register" style={{ display: 'inline', padding: '0', fontSize: '0.9rem' , }}>Register </Link></p>
                

                <button type="submit" style={{  fontSize: '1rem', backgroundColor: '#555', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</button>
            </form>
            
        </div>
    );
}
export default LoginPage;