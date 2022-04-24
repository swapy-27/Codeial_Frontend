import { useState } from 'react';
import styles from '../styles/login.module.css';
import {notify} from '../utils/toastify'
import { ToastContainer } from 'react-toastify';
const Login = () => {

  const [email,setEmail]= useState('');
  const [password,setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();

    setLoggingIn(true);
    
    if(!password || !email){
      console.log('missing')
      notify('hey something is missing !')
    }
    console.log('hey')
  }



  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <span className={styles.loginSignupHeader}>Log In</span>

      <div className={styles.field}>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </div>

      <div className={styles.field}>
        <input type="password" placeholder="Paasword" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </div>

      <div className={styles.field}>
        <button >{ loggingIn ?'Logging In':'Log In' }</button>
      </div>
    </form>
  );
};

export default Login;