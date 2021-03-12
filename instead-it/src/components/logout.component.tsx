import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { User } from '../User/user';
import { getUser } from '../store/actions';
export function LogoutComponent() {
  const dispatch = useDispatch();
  const history = useHistory();

  function logout() {
    let newUser = new User();
    dispatch(getUser(newUser));
    history.push('/login');
  }

  return (
    <div className='logout-card'>
      <h2>Logout</h2>
      <p>Are you sure you want to logout?</p>
      <button className='button' onClick={logout}>
        Logout
      </button>
    </div>
  );
}
