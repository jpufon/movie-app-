import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && userId) {
      setAddRequestStatus('pending');

      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
          userId,
        })
      );

      setAddRequestStatus('succeeded');
      setTitle('');
      setContent('');
      setUserId('');
    }
  };

  return (
    <section>
      <h2 className="text-info">Add a New Post</h2>
      <form className="postform" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-info">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label text-info">Content:</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="user" className="form-label text-info">User:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" disabled={addRequestStatus === 'pending'} className="btn btn-primary">
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
