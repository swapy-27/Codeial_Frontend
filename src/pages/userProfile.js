
import { useAuth } from '../hooks';
import styles from '../styles/settings.module.css'
import { useEffect, useState } from 'react';
import { notify } from '../utils/toastify';
import { useParams, useNavigate } from 'react-router-dom';
import { addFriend, fetchUserProfile, removeFriend } from '../api';
import Loader from '../components/Loader'

const UserProfile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [requestInProgress, setRequestInProgress] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const auth = useAuth();

    useEffect(() => {

        const getUser = async () => {

            const response = await fetchUserProfile(userId)

            if (response.success) {
                setUser(response.data.user)

            }
            else {
                notify(response.message)

                return navigate('/');
            }

            setLoading(false)

        };

        getUser();
    }, [userId, navigate])

    const checkIfUserIsAFriend = () => {
        const friends = auth.user.friendships;

        const friendIds = friends.map((friend) => friend.to_user._id);
        const index = friendIds.indexOf(userId);

        if (index !== -1) {
            return true;
        }

        return false;
    }
    if (loading) {
        return <Loader />
    }

    const handleRemoveFriendClick = async () => {
        setRequestInProgress(true);

        const response = await removeFriend(userId);

        if (response.success) {
            const friendship = auth.user.friendships.filter(
                (friend) => friend.to_user._id === userId
            );

            auth.updateUserFriends(false, friendship[0]);
            notify('Friend removed successfully!');
        } else {
            notify(response.message);
        }
        setRequestInProgress(false);
    };
    const handleAddFriendClick = async () => {
        setRequestInProgress(true);

        const response = await addFriend(userId);
        console.log(response.data)
        if (response.success) {
            const friendship = response.data

            auth.updateUserFriends(true, friendship);

            notify('friend added successfully')

        }

        else {
            notify(response.message)
        }
        setRequestInProgress(false)
    };
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
                {checkIfUserIsAFriend() ? (
                    <button
                        className={`button ${styles.saveBtn}`}
                       onClick={handleRemoveFriendClick}
                    >
                        {requestInProgress ? 'Removing friend...' : 'Remove friend'}
                    </button>
                ) : (
                    <button
                        className={`button ${styles.saveBtn}`}
                        onClick={handleAddFriendClick}
                        disabled={requestInProgress}
                    >
                        {requestInProgress ? 'Adding friend...' : 'Add friend'}
                    </button>
                )}


            </div>
        </div>

    )
}

export default UserProfile;