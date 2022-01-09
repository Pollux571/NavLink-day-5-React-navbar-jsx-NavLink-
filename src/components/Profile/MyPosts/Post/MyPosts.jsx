import React from "react";
import styles from "./MyPosts.module.css"
import Post from "./Post";


const MyPosts = () =>{
    return <div>My Posts

    <div>
        <textarea></textarea>
        <button>Add post</button>


    </div>

    <div className={styles.posts}>
    <Post message="Hello world" />
    <Post message="It s my first post" />


    </div>
    </div>
    }

    export default MyPosts;