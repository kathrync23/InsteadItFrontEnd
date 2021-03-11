import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Link, useLocation, Route } from 'react-router-dom';
import ErrorBoundaryComponent from './error.component';
import RegisterComponent from './User/Register';
import { useSelector, useDispatch } from 'react-redux';
import { User } from './User/user';
import userService from './User/user.service';
import { UserState } from './store/reducer';


export default function RouterComponent() {
  const location = useLocation();
  const userSelector = (state: UserState) => state.user;
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Navbar id='navBar'>
        <Nav className='nav'>
          { user.username ? (
            <Nav.Link href='Logout' className='nav-link'>
              <Link to='/logout'>Logout</Link>
            </Nav.Link>
          ) : (
            <Nav>
              <Nav.Link href='Login' className='nav-link'>
                <Link to='/login'>Login</Link>
              </Nav.Link>
              <Nav.Link href='Register' className='nav-link'>
              <Link to='/register'>Sign up</Link>
              </Nav.Link>
            </Nav>
          )
          }
        </Nav>
      </Navbar>
      <p>Router is cool. </p>
      {/* <ErrorBoundaryComponent key={location.pathname}></ErrorBoundaryComponent> */}
      <Route path='/register' component={RegisterComponent}/>
    </BrowserRouter>
  );
}
