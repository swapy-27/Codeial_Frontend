import styles from '../styles/home.module.css'

const Comments = (props) =>{

    const comment = props.comment;

   
      return (
        <div className={styles.postCommentsItem}>
        <div className={styles.postCommentHeader}>
          <span className={styles.postCommentAuthor}>{comment.user.name}</span>
          <span className={styles.postCommentTime}>a minute ago</span>
          <span className={styles.postCommentLikes}>{comment.likes.length}</span>
        </div>

        <div className={styles.postCommentContent}>{comment.content}</div>
      </div>
      )
   
    
    
}

export default Comments;