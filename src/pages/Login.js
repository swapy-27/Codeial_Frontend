import { useState } from 'react';
import { notify } from '../utils/toastify';
import { useNavigate } from "react-router-dom";
import styles from '../styles/login.module.css';
import { useAuth } from '../hooks/index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const auth = useAuth();

  const  userLogin = auth.login;
  const navigate = useNavigate();
  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoggingIn(true);

    if (!email || !password) {
      return notify('Please enter both email and password');
    }

    const response =   await userLogin(email, password);
     
    if (response.success) {
      notify('Successfully logged in')
      
    } else {
      notify(response.message)
    }
  
    setLoggingIn(false);
  };
  if(auth.user){
    navigate('/');
  }
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          type="password"
          placeholder="Paasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <button disabled={loggingIn}>
          {loggingIn ? 'Logging in...' : 'Log In'}
        </button>
      </div>
    </form>
  );
};

export default Login;
