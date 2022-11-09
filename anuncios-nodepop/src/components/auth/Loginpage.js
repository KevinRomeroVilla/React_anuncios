import { useState } from "react";
import FormField from "../common/FormField";
import { login } from "./service";

const LoginPage = ({ onLogin }) => {
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUserEmail = (event) => setUserEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await login({ email, password });
    onLogin();

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
        <input
          type='checkbox'
          onChange={(event) => {
            console.log(event.target.checked);
          }}
        ></input>
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
