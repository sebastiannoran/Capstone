import { useState } from "react";
import { forumData } from "../../misc/data";
import { Link, useLoaderData } from "react-router-dom";
//import { AuthContext, user, currentUser } from "../../contexts/AuthContext";

export async function loader({ params }) {
  const courseResponse = await fetch(`/api/posts/${params.courseId}`);
  const course = await courseResponse.json();
  return { course };
}

const ForumPost = () => {
  const [posts, setPosts] = useState(forumData[0]);
  const [isTitleEditing, setTitleEditing] = useState(false);
  const [isContentEditing, setContentEditing] = useState(false);

  const handlePostEdit = () => {
    // if (user == currentUser) {
      setTitleEditing(true);
      setContentEditing(false);
    // }
    // else{
    //   console.log("Unauthorized");
    // }
  };

  const handleContentEdit = () => {
    //if (user == currentUser) {
      setTitleEditing(false);
      setContentEditing(true);
   // }
    //else{
      //console.log("Unauthorized");
   // }
  };

  const handleTitleChange = (event) => {
    setPosts({ ...posts, title: event.target.value });
  };

  const handleContentChange = (event) => {
    setPosts({ ...posts, content: event.target.value });
  };

  const handlePostSave = () => {
    setTitleEditing(false);
    setContentEditing(false);
  };

  return (
    <div className="container max-w-2xl mx-auto p-4 text-black">
      <div className="bg-yellow-200 p-6 rounded-lg mb-4">
        {isTitleEditing ? (
          <input
            type="text"
            value={forumData.title}
            onChange={handleTitleChange}
            className="block w-full border rounded-md px-3 py-2 mb-2"
          />
        ) : (
          <h3 className="text-2xl font-bold mb-2">Title: {forumData.title}</h3>
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
            value={forumData.content}
            onChange={handleContentChange}
            className="block w-full border rounded-md px-3 py-2 mb-2"
          />
        ) : (
          <p className="text-lg">{forumData.content}</p>
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