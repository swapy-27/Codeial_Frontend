import { useAuth } from '../providers';
import styles from '../styles/settings.module.css'

const Settings = () =>{
    const auth = useAuth();
    return (

        <div className={styles.settings}>
            <div className={styles.imgContainer}>
                <img src='' alt=''/>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldName}>Email</div>
                <div className={styles.fieldValue}>{auth.user?.email}</div>
            </div>
            <div className={styles.field}>
                <div className={styles.fieldName}>Name</div>
                <div className={styles.fieldValue}>{auth.user?.name}</div>
            </div>
            <div className={styles.field}>
                <div className={styles.fieldName}>Password</div>
                <input type ='password'/>
            </div>
            <div className={styles.field}>
                <div className={styles.fieldName}>Confirm Password</div>
                <input type ='password'/>
            </div>

            <div className={styles.btnGrp}>
                <div className={`button ${styles.editBtn}`}>Edit Profile</div>
            </div>

        </div>

    )
}

export default Settings;