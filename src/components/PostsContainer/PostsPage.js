//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {props.post.map(props =>
      <Post
      
      key={props.imageUrl}
      post={props}
      />
      )}
    </div>
  );
};

export default PostsPage;

