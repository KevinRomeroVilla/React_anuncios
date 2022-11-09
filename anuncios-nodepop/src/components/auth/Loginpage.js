import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormCheckBox from "../common/FormCheckbox";
import FormField from "../common/FormField";
import { login, loginSave } from "./service";

const LoginPage = ({ onLogin }) => {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleChangeUserEmail = (event) => setUserEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const handleChangeCheck = (event) => setCheck(event.target.checked);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (check) {
      await loginSave({ email, password });
    } else {
      await login({ email, password });
    }

    onLogin();
    const to = location.state?.from?.path || "/";
    navigate(to, { replace: true });

    console.log(email, password);
  };

  const isButtonEnable = () => {
    return !(email && password);
  };

  return (
    <div className='loginPage'>
      <h1 className='loginPage-title'>Log in to Twitter</h1>
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
        <button
          type='submit'
          variant='primary'
          className='loginForm-submit'
          disabled={isButtonEnable()}
        >
          log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
