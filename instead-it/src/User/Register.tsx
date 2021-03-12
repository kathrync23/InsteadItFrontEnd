import React, { SyntheticEvent } from 'react';

function RegisterComponent() {
  function handleFormInput(e: SyntheticEvent) {}

  function submitForm() {}

  return (
    <div className='form-input'>
      <form>
        <label>
          Username:
          <input type='text' name='username' onChange={handleFormInput} />
        </label>
        <br />
        <label>
          Password:
          <input type='password' name='password' onChange={handleFormInput} />
          <br />
        </label>
        <label>
          Verify Password:
          <input
            type='password'
            name='verifyPassword'
            onChange={handleFormInput}
          />
        </label>
        <br />
        <button className='btn-btn-submit' onClick={submitForm}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterComponent;
