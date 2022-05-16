import { useState } from 'react'
import styles from '../styles/login.module.css'
import { notify } from '../utils/toastify';
import { userRegistration } from '../api';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registering, setRegister] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !name || !password || !confirmPassword){
            notify('Please fill all the required details!')
            return;
        }
        if (password !== confirmPassword){
            notify('Invalid Details!')
            return ;
        }

        await userRegistration(name,email,password,confirmPassword)
        .then((e)=>{
            console.log(e)
            notify(e.message)
            console.log(e.data)
        }
           
        )
        .catch((error)=>{
            console.log(error)
            notify('some unexcpected error occured !')
        })



    }
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <span className={styles.loginSignupHeader}>Register</span>
            <div className={styles.field}>
                <input type="name" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className={styles.field}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className={styles.field}>
                <input type="password" placeholder="Paasword" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className={styles.field}>
                <input type="password" placeholder="Confirm-Paasword" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
            </div>

            <div className={styles.field}>
                <button >{registering ? 'Signing Up' : 'Register'}</button>
            </div>
        </form>
    )

}

export default Register;