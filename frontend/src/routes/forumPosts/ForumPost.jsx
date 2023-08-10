import React, { useState } from "react";
import isAuthChecked from "../../contexts/AuthContext";
import { useFetcher, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  // const majorResponse = await fetch(`/api/majors/${params.majorId}`);
  // const major = await majorResponse.json();
  // const collegeResponse = await fetch(`/api/colleges/${params.collegeId}`);
  // const college = await collegeResponse.json();
  const postResponse = await fetch(`/api/posts/${params.postId}`);
  const post = await postResponse.json();
  // console.log(major, college, post);
  console.log(post);
  // return { major, college, post };
  return { post };
}

export const ForumPost = () => {
  const { post } = useLoaderData();
  const fetcher = useFetcher();
  // const [post, setPost] = useState({
  //   id: 1,
  //   title: "Sample Post",
  //   content: "This is the content of the post.",
  // });

  // const [comments, setComments] = useState([
  //   { id: 1, text: "Comment 1" },
  //   { id: 2, text: "Comment 2" },
  // ]);

  const [isTitleEditing, setTitleEditing] = useState(false);
  const [isContentEditing, setContentEditing] = useState(false);
  const [editedComments, setEditedComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const handlePostEdit = () => {
    if (isAuthChecked) {
      setTitleEditing(true);
      setContentEditing(false);
    } else {
      console.log("Error");
    }
  };

  const handleContentEdit = () => {
    if (isAuthChecked) {
      setTitleEditing(false);
      setContentEditing(true);
    } else {
      console.log("Error");
    }
  };

  const handleTitleChange = (event) => {
    setPost({ ...post, title: event.target.value });
  };

  const handleContentChange = (event) => {
    setPost({ ...post, content: event.target.value });
  };

  // const handleCommentEdit = (commentId) => {
  //   if (isAuthChecked) {
  //     const commentToEdit = comments.find(
  //       (comment) => comment.id === commentId
  //     );
  //     setEditedComments([{ ...commentToEdit }]);
  //   } else {
  //     console.log("Error");
  //   }
  // };

  // const handleCommentChange = (commentId, event) => {
  //   const { value } = event.target;
  //   setEditedComments((prevComments) =>
  //     prevComments.map((comment) =>
  //       comment.id === commentId ? { ...comment, text: value } : comment
  //     )
  //   );
  // };

  const handlePostSave = () => {
    setTitleEditing(false);
    setContentEditing(false);
  };

  const handleCommentSave = (commentId) => {
    if (commentId === -1) {
      // New comment
      if (newCommentText.trim() !== "") {
        const newCommentId = comments.length + 1;
        setComments([...comments, { id: newCommentId, text: newCommentText }]);
        setNewCommentText("");
      }
    } else {
      // Existing comment
      const updatedComments = comments.map((comment) =>
        comment.id === commentId ? editedComments[0] : comment
      );
      setComments(updatedComments);
    }
    setEditedComments(
      editedComments.filter((comment) => comment.id !== commentId)
    );
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

      <div className="bg-green-200 p-6 rounded-lg mb-4">
        <fetcher.Form
          method="post"
          action={`/posts/${post.id}/delete`}
          onSubmit={(event) => {
            if (!confirm("Please confirm you want to delete this record.")) {
              event.preventDefault();
            }
          }}
        >
          <button>
            <p>DELETE</p>
          </button>
        </fetcher.Form>
        {/* <h2 className="text-2xl font-bold mb-2">Comments:</h2> */}
        {/* <ul className="comments">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              {!editedComments.some(
                (editedComment) => editedComment.id === comment.id
              ) ? (
                <span className="text-sm mr-2">{comment.text}</span>
              ) : (
                <input
                  type="text"
                  value={
                    editedComments.find(
                      (editedComment) => editedComment.id === comment.id
                    )?.text || ""
                  }
                  onChange={(e) => handleCommentChange(comment.id, e)}
                  className="block w-full border rounded-md px-3 py-2 mb-2"
                />
              )}
              {!editedComments.some(
                (editedComment) => editedComment.id === comment.id
              ) ? (
                <button
                  className="comment-button bg-blue-500 hover:bg-blue-600 text-white mr-2"
                  onClick={() => handleCommentEdit(comment.id)}
                >
                  Edit Comment
                </button>
              ) : (
                <button
                  className="comment-button bg-green-500 hover:bg-green-600 text-white mr-2"
                  onClick={() => handleCommentSave(comment.id)}
                >
                  Save Comment
                </button>
              )}
            </li>
          ))}
          {editedComments.some((editedComment) => editedComment.id === -1) && (
            <li className="comment-item">
              <input
                type="text"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                className="block w-full border rounded-md px-3 py-2 mb-2"
              />
              <button
                className="comment-button bg-green-500 hover:bg-green-600 text-white mr-2"
                onClick={() => handleCommentSave(-1)}
              >
                Save Comment
              </button>
              <button
                className="comment-button bg-red-500 hover:bg-red-600 text-white"
                onClick={() =>
                  setEditedComments(
                    editedComments.filter((comment) => comment.id !== -1)
                  )
                }
              >
                Cancel
              </button>
            </li>
          )}
        </ul> */}
        {/* <button
          className="button bg-green-500 hover:bg-green-600 text-white mt-2"
          onClick={() =>
            setEditedComments([...editedComments, { id: -1, text: "" }])
          }
        >
          Add Comment
        </button> */}
      </div>
    </div>
  );
};

export default ForumPost;
