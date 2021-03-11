import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, useLocation } from 'react-router-dom';
import { UserState } from '../store/reducer';
import ErrorBoundaryComponent from './error.component';
import { LogoutComponent } from './logout.component';
import { TempComponent } from './temp.component';

export default function RouterComponent() {
  const location = useLocation();

  let user = useSelector((state: UserState) => state.user);

  return (
    <BrowserRouter>
      <Navbar id='navBar'>
        <Nav className='nav'>
          {user.username === 'LOGGED OUT' && (
            <Nav.Link href='Login' className='nav-link'>
              <Link to='/login'>Login</Link> ||{'\t'}
            </Nav.Link>
          )}
          <Nav.Link href='threads' className='nav-link'>
            <Link to='/threads'>View Threads</Link> ||{'\t'}
          </Nav.Link>
          {user && user.username !== 'LOGGED OUT' && (
            <Nav.Link href='Logout' className='nav-link'>
              <Link to='/logout'>Logout</Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
      <ErrorBoundaryComponent key={location.pathname}>
        <Route path='/login' component={TempComponent} />
        <Route path='/logout' component={LogoutComponent} />
        <Route path='/threads' component={TempComponent} />
      </ErrorBoundaryComponent>
    </BrowserRouter>
  );
}
