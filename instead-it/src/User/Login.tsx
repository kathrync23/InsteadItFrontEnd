import { SyntheticEvent } from 'react';
import { UserState } from '../store/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { changeLogin, getUser } from '../store/actions';
import userService from './user.service';
import { User } from './user';

export function LoginComponent() {
    const user = useSelector((state: UserState) => state.user);
    const dispatch = useDispatch();

    function handleFormInput(e: SyntheticEvent) {
        let u: any = { ...user };
        if ((e.target as HTMLInputElement).name === 'username') {
            u.username = (e.target as HTMLInputElement).value;
        } else {
            u.password = (e.target as HTMLInputElement).value;
        }
        dispatch(changeLogin(u));
    }

    function submitForm() {
        userService
            .login(user)
            .then((us) => {
                dispatch(getUser(user));
                console.log(us);
            })
            .catch((err) => {
                console.log(err);
                let testUser = new User();
                testUser.username = 'something else';
                dispatch(getUser(testUser));
            });
    }

    return (
        <div className="login">
            <div className="form-group col-md-6">
                <label htmlFor="username" className="inputs">Username</label> {' '} <input type="text" className="form-control mb-2 mr-sm-2" onChange={handleFormInput} name='username' />
                {' '}
                <label htmlFor="password" className="inputs">Password </label><input type="password" className="form-control" onChange={handleFormInput} name='password' />
                {' '}<br></br>
                <button className="btn btn-success" onClick={submitForm}>Login</button>
            </div>
        </div>
    )
}

export default LoginComponent;
