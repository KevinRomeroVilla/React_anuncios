import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import FormCheckBox from "../common/FormCheckbox";
import FormField from "../common/FormField";
import { login, loginSave } from "./service";

const LoginPage = ({ onLogin }) => {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeUserEmail = (event) => setUserEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const handleChangeCheck = (event) => setCheck(event.target.checked);
  const reseteError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      reseteError();
      setIsFetching(true);
      if (check) {
        await loginSave({ email, password });
      } else {
        await login({ email, password });
      }

      onLogin();
      const to = location.state?.from?.path || "/";
      navigate(to, { replace: true });
    } catch (error) {
      setError(error);
      setIsFetching(false);
    }
  };

  const isButtonEnable = () => {
    return !(email && password && !isFetching);
  };

  return (
    <div className='loginPage'>
      <h1 className='loginPage-title'>Log in to Adverts page</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type='text'
          name='username'
          label='email'
          className='loginForm-field'
          onChange={handleChangeUserEmail}
          value={email}
        />
        <FormField
          type='password'
          name='username'
          label='Password'
          className='loginForm-field'
          onChange={handleChangePassword}
          value={password}
        />
        <FormCheckBox
          type='checkbox'
          label='Remember Me'
          onChange={handleChangeCheck}
          value={check}
        ></FormCheckBox>
        <Button
          type='submit'
          variant='primary'
          className='loginForm-submit'
          disabled={isButtonEnable()}
        >
          log in
        </Button>
      </form>
      {error && (
        <div onClick={reseteError} className='loginPage-error'>
          {error.message}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
