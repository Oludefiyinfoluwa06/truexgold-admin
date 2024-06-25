import { useState, useCallback } from "react";
import Content from "../components/Content";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forget-password");
  }, [navigate]);

  const onSubmitClick = async () => {
    await signIn(username, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <Content />
      <div className="sidebar">
        <form className="navigation">
          <div className="menu">
            <div className="heading">
              <h3 className="admin-sign-in"> Admin Sign in</h3>
              <div className="credentials">
                <div className="inputs">
                  <div className="username">Username</div>
                  <input type='text' id='username' value={username} onChange={e => setUsername(e.target.value)} required/>
                </div>
                <div className="inputs1">
                  <div className="email">Email</div>
                  <input type='email' id='email' value={email} onChange={e => setEmail(e.target.value)} required/>
                </div>
                <div className="inputs2">
                  <div className="password">Password</div>
                  <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                </div>
              </div>
            </div>
            <div
              className="forgot-password"
              onClick={onForgotPasswordTextClick}
            >
              Forgot password?
            </div>
          </div>
          <button className="submit" onClick={onSubmitClick}>
            <p className="sign-in">Sign In</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
