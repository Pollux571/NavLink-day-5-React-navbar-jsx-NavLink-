import React from "react";
import MyPosts from "./MyPosts/Post/MyPosts";
import styles from "./Profile.module.css"


const Profile = () =>{
    return <div className={styles.content}>
    <div>
    <img src='https://ak.picdn.net/shutterstock/videos/6195848/thumb/1.jpg' />
    </div>

    <div>ava+description</div>
         <MyPosts/>
    </div>
}

export default Profile;