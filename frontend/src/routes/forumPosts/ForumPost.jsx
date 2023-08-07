import React, { useState } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

const ForumPost = () => {
  
  const [post, setPost] = useState({
    
  });

  const [comments, setComments] = useState([
    
  ]);

  const [isTitleEditing, setTitleEditing] = useState(false);
  const [isContentEditing, setContentEditing] = useState(false);
  const [editedComments, setEditedComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const handlePostEdit = () => {
    setTitleEditing(true);
    setContentEditing(false);
  };

  const handleContentEdit = () => {
    setTitleEditing(false);
    setContentEditing(true);
  };

  const handleTitleChange = (event) => {
    setPost({ ...post, title: event.target.value });
  };

  const handleContentChange = (event) => {
    setPost({ ...post, content: event.target.value });
  };

  const handleCommentEdit = (commentId) => {
    
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    setEditedComments([{ ...commentToEdit }]);
  };

  const handleCommentChange = (commentId, event) => {
    const { value } = event.target;
    setEditedComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId ? { ...comment, text: value } : comment
      )
    );
  };

  const handlePostSave = () => {
    setTitleEditing(false);
    setContentEditing(false);
  };

  const handleCommentSave = (commentId) => {
    if (commentId === -1) {
      // New comment
      if (newCommentText.trim() !== '') {
        const newCommentId = comments.length + 1;
        setComments([...comments, { id: newCommentId, text: newCommentText }]);
        setNewCommentText('');
      }
    } else {
      // Existing comment
      const updatedComments = comments.map((comment) =>
        comment.id === commentId ? editedComments[0] : comment
      );
      setComments(updatedComments);
    }
    setEditedComments(editedComments.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="container max-w-2xl mx-auto p-4 text-black">
      <div className="bg-yellow-200 p-6 rounded-lg mb-4">
        {isTitleEditing ? (
          <input
            type="text"
            value={post.title}
            onChange={handleTitleChange}
            className="block w-full border rounded-md px-3 py-2 mb-2"
          />
        ) : (
          <h3 className="text-2xl font-bold mb-2">Title: {post.title}</h3>
        )}
        {isTitleEditing ? (
          <button
            className="button bg-green-500 hover:bg-green-600 text-white"
            onClick={handlePostSave}
          >
            Save Title
          </button>
        ) : (
          <button
            className="button bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handlePostEdit}
          >
            Edit Title
          </button>
        )}
      </div>
      <div className="bg-blue-200 p-6 rounded-lg mb-4">
        <h2 className="text-2xl font-bold mb-2">Post:</h2>
        {isContentEditing ? (
          <textarea
            value={post.content}
            onChange={handleContentChange}
            className="block w-full border rounded-md px-3 py-2 mb-2"
          />
        ) : (
          <p className="text-lg">{post.content}</p>
        )}
        {isContentEditing ? (
          <button
            className="button bg-green-500 hover:bg-green-600 text-white mt-2"
            onClick={handlePostSave}
          >
            Save Content
          </button>
        ) : (
          <button
            className="button bg-blue-500 hover:bg-blue-600 text-white mt-2"
            onClick={handleContentEdit}
          >
            Edit Content
          </button>
        )}
      </div>
      </div>
  );
}

export default ForumPost;