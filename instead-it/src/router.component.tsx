import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';
import ErrorBoundaryComponent from './error.component';

export default function RouterComponent() {
  const location = useLocation();

  return (
    <BrowserRouter>
      <Navbar id='navBar'>
        <Nav className='nav'>
          <Nav.Link href='Login' className='nav-link'>
            <Link to='/login'>Login</Link>
          </Nav.Link>
          <Nav.Link href='Logout' className='nav-link'>
            <Link to='/logout'>Logout</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
      <p>Router is cool. </p>
      {/* <ErrorBoundaryComponent key={location.pathname}></ErrorBoundaryComponent> */}
    </BrowserRouter>
  );
}
