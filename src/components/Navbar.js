import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
      <div className={styles.nav}>
        <div className={styles.leftDiv}>
          <a href="/">
            <img
              alt=""
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            />
          </a>
        </div>
  
        <div className={styles.rightNav}>
          <div className={styles.user}>
            <Link to='/settings'  >
            <i class="fa-solid fa-user"></i>
           </Link>
            <span>Aakash</span>
          </div>
  
          <div className={styles.navLinks}>
            <ul>
              <li>
                <Link to='/login' >Log in</Link>
              </li>
              <li>
                <a href="/">Log out</a>
              </li>
              <li>
              <Link to='/register' >Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  


export default Navbar;