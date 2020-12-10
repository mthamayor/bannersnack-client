import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import Api from '../../../api';
import Utils from '../../../lib/Utils';
import { setPageLoading, openAlert } from '../../../redux/slices/settingsSlice';

export const PasswordReset = () => {
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
      const res = await Api.resetUserPassword(data);
      const { data: resData } = res;
      const { resetUserPassword } = resData;
      dispatch(openAlert({ message: resetUserPassword, severity: 'success' }))
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
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;