import { useState } from "react";
import { forumData } from "../../misc/data";
import { Link } from "react-router-dom";

const CourseForum = () => {
  const [posts, setPosts] = useState(forumData[0]);

  return (
    <div className="mx-12 mt-10 text-center">
      <div className="mb-12">
        <p className="text-5xl">(Course Name)</p>
      </div>
      {posts.map(({ id, title, content }) => {
        return (
          <Link
            key={id}
            to={`/colleges/exampleId/courses/exampleId/posts/${id}`}
          >
            <div className="border-[1px] border-black font-bold bg-white mt-6 py-6 drop-shadow-[4px_5px_2px_rgba(0,0,0,0.25)]">
              <p className="text-2xl">{`${title}`}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CourseForum;
