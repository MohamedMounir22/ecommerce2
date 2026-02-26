


import React from 'react';
import './registerPage.css';
import { Navbar, Container, Nav, Form, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegisterPage() {
    return (
        <div className='loginContainer'>
            <h2>Register</h2>
            <hr />
            {/* form that has name and email and massege and send button */}
            <form className='loginForm' style={{ display: 'flex', flexDirection: 'column',  }}>
                <h6>full Name</h6>
                <input type="text" placeholder="Name" style={{  fontSize: '1rem' }} />
                <h6>email adress</h6>
                <input type="email" placeholder="name@example.com" style={{  fontSize: '1rem' }} />
                <h6>password</h6>
                <input placeholder="password" rows="5" style={{  fontSize: '1rem' }}></input>
                <p style={{ fontSize: '0.9rem' }}>already have account    <Link className='rebtn' to ="/login" style={{ display: 'inline', padding: '0', fontSize: '0.9rem' , }}>login  </Link></p>
                <button type="submit" style={{  fontSize: '1rem', backgroundColor: '#555', color: '#fff', border: 'none', cursor: 'pointer' }}>Register</button>
                 
            </form>
            
        </div>
    );
}
export default RegisterPage;