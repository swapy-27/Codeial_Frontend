import styles from '../styles/home.module.css';
import { Comments } from '../components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
  const posts = props.posts;
  const navigate = useNavigate();
  return (
    <div className={styles.postsList}>
      {posts.map((post) => {
       
        const comments = post.comments;
        return(
        <div className={styles.postWrapper}>
          <div className={styles.postHeader}>
            <div className={styles.postAvatar}>
              <i class="fa-solid fa-user"></i>
              <div>
                {/* <Link to={`/user/${post.user._id}`}><span className={styles.postAuthor}>{post.user.name}</span></Link> */}
                <span onClick={()=>{ return navigate(`/user/${post.user._id}`)}} className={styles.postAuthor}>{post.user.name}</span>
                
                <span className={styles.postTime}>a minute ago</span>
              </div>
            </div>
            <div className={styles.postContent}>{post.content}</div>

            <div className={styles.postActions}>
              <div className={styles.postLike}>
                <i class="fa-regular fa-heart"></i>
                <span>{(post.likes).length}</span>
              </div>

              <div className={styles.postCommentsIcon}>
                <i class="fa-regular fa-message"></i>
                <span>{comments.length}</span>
              </div>
            </div>
            <div className={styles.postCommentBox}>
              <input placeholder="Start typing a comment" />
            </div>

            <div className={styles.postCommentsList}>
              {comments.map((comment) => {
                return ( <Comments comment={comment}/>)
              })
            }
              
            </div>
          </div>
        </div>
        )
      }
      )}
    </div>
  );
};

export default Home;



