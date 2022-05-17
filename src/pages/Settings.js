import { useAuth } from '../hooks';
import styles from '../styles/settings.module.css'
import { useState } from 'react';
import { notify } from '../utils/toastify';


const Settings = () => {


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState('');
    const [savingForm, setSavingForm] = useState(false);
    const auth = useAuth();


    const cleaForm = () => {
        setConfirmPassword('');
        setPassword('');
    }
    const updateProfile = async () => {
        setSavingForm(true);
        let error = false;
        if (!name || !password || !confirmPassword) {
            notify('Please fill in all the fields');
            error = true;
        }

        if (confirmPassword !== password) {
            notify('password and confirm password not matches');
            error = true;
        }

        if (error) {
            return setSavingForm(false)
        }

        const response = await auth.updateUser(
            auth.user._id, name, password, confirmPassword
        );

        if (response.success) {

            setEditMode(false);
            setSavingForm(false);
            cleaForm();

            return notify('user updated successfully')
        }
        else {
            notify(response.message)
            setSavingForm(false);
        }

    }

    return (

        <div className={styles.settings}>
            <div className={styles.imgContainer}>
                <i class="fa-solid fa-gears"></i>
            </div>

            <div className={styles.field}>
                <div className={styles.fieldName}>Email</div>
                <div className={styles.fieldValue}>{auth.user?.email}</div>
            </div>
            <div className={styles.field}>
                <div className={styles.fieldName}>Name</div>

                {editMode ? (

                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                ) : (<div className={styles.fieldValue}>{auth.user?.name}</div>)
                }

            </div>


            {editMode && (
                <>
                    <div className={styles.field}>
                        <div className={styles.fieldName}>Password</div>
                        <input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className={styles.field}>
                        <div className={styles.fieldName}>Confirm Password</div>
                        <input type='password' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    </div>
                </>
            )

            }



            <div className={styles.btnGrp}>
                {editMode ? (
                    <>
                        <button
                            className={`button ${styles.saveBtn}`}
                            onClick={updateProfile}
                            disabled={savingForm}
                        >
                            {savingForm ? 'Saving profile...' : 'Save profile'}
                        </button>
                        <button
                            className={`button ${styles.editBtn}`}
                            onClick={() => setEditMode(false)}
                        >
                            Go back
                        </button>
                    </>
                ) : (
                    <button
                        className={`button ${styles.editBtn}`}
                        onClick={() => setEditMode(true)}
                    >
                        Edit Profile
                    </button>
                )}
            </div>
        </div>

    )
}

export default Settings;