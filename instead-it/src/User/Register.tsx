import React, { SyntheticEvent } from 'react';


function RegisterComponent() {
    function handleFormInput(e: SyntheticEvent) {

    }

    function submitForm() {

    }


    return (
        <div>
            <form>
                <label>
                    Username:
                    <input type='text' name='username' onChange={handleFormInput}/>
                </label>
                <label>
                    Password:
                    <input type='password' name='password' onChange={handleFormInput}/>
                </label>
                <label>
                    Verify Password:
                    <input type='password' name='verifyPassword' onChange={handleFormInput}/>
                </label>
                <button className='btn-btn-submit' onClick={submitForm}>Register</button>
            </form>
        </div>
    )
}

export default RegisterComponent;