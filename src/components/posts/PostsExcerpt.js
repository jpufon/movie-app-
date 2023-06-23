import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
import './post.css';

const PostsExcerpt = ({ post }) => {
  const { id, title, body, userId, date } = post;
  const excerpt = body ? body.substring(0, 75) : '' ;

  return (
    
    <article className="card ms-3">
      
      <div className="card-body">
       
        <h2 className="card-title">{title}</h2>
        <p className="card-text excerpt">{excerpt}...</p>
        <div className="card-footer">
          <Link to={`post/${id}`} className="btn btn-primary">
            View Post
          </Link>
          {userId && <PostAuthor userId={userId} />}
          {date && <TimeAgo timestamp={date} />}
        </div>
      </div>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
