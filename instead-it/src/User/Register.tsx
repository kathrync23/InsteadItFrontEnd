import React, { SyntheticEvent } from 'react';
import { useHistory } from 'react-router';

function RegisterComponent() {
  const history = useHistory();
  function handleFormInput(e: SyntheticEvent) {}

  function submitForm() {
    history.push('/login');
  }

  return (
    <div className='form-input'>
      <form>
        <label>Username:</label>
        <input
          type='text'
          name='username'
          onChange={handleFormInput}
          placeholder='Username'
        />
        <br />
        <label>Password:</label>
        <input
          type='password'
          name='password'
          onChange={handleFormInput}
          placeholder='Password'
        />
        <br />
        <label>Verify Password:</label>
        <input
          type='password'
          name='verifyPassword'
          onChange={handleFormInput}
          placeholder='Verify Password'
        />
        <br />
        <button className='btn-btn-submit' onClick={submitForm}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterComponent;
