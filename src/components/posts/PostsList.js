import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError } from './postsSlice';
import PostsExcerpt from './PostsExcerpt';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;

  switch (postStatus) {
    case 'loading':
      content = <p>Loading...</p>;
      break;
    case 'succeeded':
      const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
      content = orderedPosts.map((post) => <PostsExcerpt key={post.id} post={post} />);
      break;
    case 'failed':
      content = <p>{error}</p>;
      break;
    default:
      content = null;
      break;
  }

  return <section>{content}</section>;
};

export default PostsList;
