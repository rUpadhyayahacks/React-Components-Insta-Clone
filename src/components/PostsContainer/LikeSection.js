import React from 'react';

const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
      >
      <div className="like-section-wrapper">
      <button
  
  onClick={props.incrementLikes}>
    
        <i className="far fa-heart" />
        </button>
        
        
        
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
      {props.likes} Likes</p>
</div>
  )
};

export default LikeSection;
