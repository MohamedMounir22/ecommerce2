import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';

function Header() {
  const count = useSelector(selectCartCount);
  return (
    <>
      <Navbar expand="lg" className="navbar-custom sticky-top shadow-sm" collapseOnSelect>
        <Container>
          {/* <Navbar.Brand className='headerTitle' href="/"> E-Commerce</Navbar.Brand> */}
          <Navbar.Brand as={Link} to="/" className='headerTitle'>E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="mx-auto nav-links ">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="cart-link">Contact</Nav.Link>
            </Nav>
            
            <div className="d-flex flex-wrap ms-lg-3 justify-content-center gap-2 mb-3 my-lg-0">
              {/* login icon with arrow icon inside it */}
              <Button as={Link} to="/login" variant="outline-secondary">
                <i className="bi bi-box-arrow-in-right dark"></i> Login
              </Button>

              <Button as={Link} to="/register" variant="outline-secondary">
                <i className="bi bi-box-arrow-in-right dark"></i> Register
              </Button>
             
             <Button as={Link} to="/cart" variant="outline-secondary" className="cart-button">
                <i className="bi bi-cart-fill"></i> Cart {count > 0 && <Badge bg="transparent" className="ms-1 dark cartCount">( {count} )</Badge>}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Header;