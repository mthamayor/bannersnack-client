import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import { openAlert, setPageLoading } from '../../../redux/slices/settingsSlice';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import Api from '../../../api';
import storage from '../../../lib/storage';
import Utils from '../../../lib/Utils';

export const Login = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { email, password } = data;

  const canSubmit = validator.isEmail(email)
      && password
      && !Utils.hasWhiteSpace(password);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  }

  const handleSubmit = async () => {
    dispatch(setPageLoading(true));
    try{
      const res = await Api.signinUser(data);
      const { data: resData } = res;
      const { signinUser } = resData;
      storage.setUser(signinUser);
      window.location.replace('/dashboard/records');
    }catch(err){
      dispatch(openAlert({message: err.message, severity: 'error'}));
    }
    dispatch(setPageLoading(false));
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-10 col-md-6 col-lg-4">
          <form>
            <h4>Log in</h4>
            <p>Pick up where you left off</p>
            <TextField
              error = {validator.isEmail(email) ? false : true}
              name="email"
              label="Email"
              type="email"
              helperText=""
              fullWidth
              margin="normal"
              value={email}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              error = {!Utils.hasWhiteSpace(password) ? false : true}
              name="password"
              label="Password"
              type="password"
              helperText=""
              fullWidth
              value={password}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
            <div className="mt-3">
            <Button
                disabled = {canSubmit ? false : true}
                variant="contained"
                color="primary"
                fullWidth
                className="button"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
            <div className="d-flex justify-content-end mt-2 mb-2">
              <Link className="a" to="/forgot-password">
                <small>Forgot password?</small>
              </Link>
            </div>
          </form>
          <Divider />
          <div className="text-center mt-3">
            <p>
              Dont have an account?{' '}
              <Link className="a" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;