import { useAuth } from '../hooks';
import styles from '../styles/settings.module.css'
import { useState } from 'react';
import { notify } from '../utils/toastify';


const UserProfile = () => {
    const user = {}


    return (

        <div className={styles.settings}>
            <div className={styles.imgContainer}>
                <i class="fa-solid fa-user"></i>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldName}>Email</div>
                <div className={styles.fieldValue}>{user.email}</div>
            </div>
            <div className={styles.field}>
                <div className={styles.fieldName}>Name</div>
                <div className={styles.fieldValue}>{user.name}</div>


            </div>

            <div className={styles.btnGrp}>

                <button className={`button ${styles.saveBtn}`}>
                    Add Friend
                </button>

                <button className={`button ${styles.editBtn}`}>
                    Remove Friend
                </button>

            </div>
        </div>

    )
}

export default UserProfile;