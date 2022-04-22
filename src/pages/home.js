import styles from '../styles/home.module.css';
import { Comments } from '../components';
const Home = ({ posts }) => {
  return (
    <div className={styles.postsList}>
      {/* {posts.map((post) => ( */}
        <div className={styles.postWrapper}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
            <i class="fa-solid fa-user"></i>
              <div>
                <span className={styles.postAuthor}></span>
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}></div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
              <i class="fa-regular fa-heart"></i>
                <span>5</span>
              </div>

              <div className={styles.postCommentsIcon}>
              <i class="fa-regular fa-message"></i>
                <span>2</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              <Comments/>
            </div>
          </div>
        </div>
      
      {/* } */}
    </div>
  );
};

export default Home;
