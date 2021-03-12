import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { User } from '../User/user';
import { getUser } from '../store/actions';
import { UserState } from '../store/reducer';

export function LogoutComponent() {
  let user = useSelector((state: UserState) => state.user);
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
