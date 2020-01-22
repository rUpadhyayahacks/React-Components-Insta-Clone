// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)
  console.log(props)

  return (
    <div>
      {/* map through the comments data and return the Comment component */
      props.comments.map(props => 
      <Comment
      
      key={props.comments}
      post={props}  />
      
      )}
      {props.comments.map(props =>
      <CommentInput 
      // key={props.comments}
      // post={props}
      
      />

      )}
      
    </div>
  );
};

export default CommentSection;
