
import { useAuth } from '../hooks';
import styles from '../styles/settings.module.css'
import { useEffect, useState } from 'react';
import { notify } from '../utils/toastify';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../api';


const UserProfile = () => {
    const { userId } = useParams();

    const [user, setUser] = useState({});

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    
    useEffect(() => {

        const getUser = async () => {
            console.log(userId)
            const response = await fetchUserProfile(userId)
            console.log(response)
            if (response.success) {
                setUser(response.data.user)

            }
            else {
                notify(response.message)

                return navigate('/');
            }

            setLoading(false)

        }

         getUser();
    },[userId,navigate])


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