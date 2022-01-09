import React from "react";
import styles from "./Post.module.css"


const Post = (props) =>{
    return<div className={styles.item}>

    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amateur-made_Na%27vi.jpg" alt="" />

       {props.message}
       <div>
       <span>Like</span> <br />
       <span>Dislike</span>
       </div>

    </div>



    }

    export default Post;