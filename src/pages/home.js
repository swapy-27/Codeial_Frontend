import Post from '../styles/home.module.css'

const home = (props)=>{
    return (
        <div>
            <div className={Post.postContainer}>
                <div className={Post.postHeader}>
                    
                    <div className={Post}>
                        <div>
                            <img src='' alt=''/>
                        </div>
                            
                        <div>
                            <p></p>
                            <p></p>
                        </div>
                     </div>

                    <div>
                        <p></p>
                        <div>
                            <p><i class="fa-regular fa-heart"></i><span>5</span></p>
                            <p><i class="fa-regular fa-message"></i><span>3</span></p>
                        </div>
                    </div>

                </div>

                <div className={Post.postComments}>
                    <div>
                        <input/>
                        <button>Comment</button>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>
                            <p>Random Comment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default home ;