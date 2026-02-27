import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';

function Header() {
  const count = useSelector(selectCartCount);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  const closeNav = () => setExpanded(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
   
    <Navbar ref={navRef} expanded={expanded} onToggle={setExpanded} expand="lg" className="navbar-custom sticky-top shadow-sm" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" className='headerTitle' onClick={closeNav}>E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="mx-auto nav-links ">
              <Nav.Link as={Link} to="/" onClick={closeNav}>Home</Nav.Link>
              <Nav.Link as={Link} to="/products" onClick={closeNav}>Products</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={closeNav}>About</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="cart-link" onClick={closeNav}>Contact</Nav.Link>
            </Nav>
            
            <div className="d-flex flex-wrap ms-lg-3 justify-content-center gap-2 mb-3 my-lg-0">
              {/* login icon with arrow icon inside it */}
              <Button as={Link} to="/login" variant="outline-secondary" onClick={closeNav}>
                <i className="bi bi-box-arrow-in-right"></i> Login
              </Button>

              <Button as={Link} to="/register" variant="outline-secondary" onClick={closeNav}>
                <i className="bi bi-person-plus"></i> Register
              </Button>
             
             <Button as={Link} to="/cart" variant="outline-secondary" className="cart-button" onClick={closeNav}>
                  <i className="bi bi-cart-fill"></i> Cart {count > 0 && <Badge bg="transparent" className="ms-1 dark cartCount">( {count} )</Badge>}
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    
  );
}

export default Header;