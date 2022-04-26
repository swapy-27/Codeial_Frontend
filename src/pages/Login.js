import { useState } from 'react';
import styles from '../styles/login.module.css';
import {notify} from '../utils/toastify'
import {loginForm} from '../api/index';
import { useAuth } from '../providers';
const Login = () => {

  const [email,setEmail]= useState('');
  const [password,setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const auth = useAuth();

  const handleSubmit = async (e)=>{
    e.preventDefault();

    setLoggingIn(true);
    
    if(!password || !email){
      notify('hey something is missing !');
      return;
    }

    const response = await auth.login(email,password);

    if (response.success){
       notify('Successfully Logged In!')
        return;
      }
    else{
      notify(response.message);
      return;
    }
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