import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Button, Badge } from 'react-bootstrap';

function Header() {
  const count = useSelector(selectCartCount);
  return (
    <>
      <Navbar expand="lg" className="navbar-custom sticky-top shadow-sm">
        <Container>
          <Navbar.Brand className='headerTitle' href="/"> E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="mx-auto nav-links">
              <Nav.Link href="/" className="nav-item ">Home</Nav.Link>
              <Nav.Link href="/products" className="nav-item">Products</Nav.Link>
              <Nav.Link href="/about" className="nav-item">about</Nav.Link>
              <Nav.Link href="/contact" className="nav-item cart-link">Contact</Nav.Link>
            </Nav>
            
            <div className="d-flex flex-wrap ms-lg-3 justify-content-center gap-2">
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