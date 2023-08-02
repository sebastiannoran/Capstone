import { useState } from "react";
import { forumData } from "../../misc/data";
import { Link } from "react-router-dom";

const CourseForum = () => {
  const [posts, setPosts] = useState(forumData[0]);

  return (
    <div className="px-12 pt-10 text-center">
      <div className="mb-12">
        <p className="text-5xl">{`"Course Name Here"`}</p>
      </div>
      <div className="max-w-4xl border-[1px] bg-[#272727] divide-y-[1px] divide-gray-600 border-y-fuchsia-900 border-x-transparent rounded-lg shadow-[3px_5px_1px_rgba(0,0,0,0.25)]">
        {posts.map(({ id, title, content }) => {
          return (
            <div key={id} className="max-w-4xl font-bold py-10 px-10">
              <Link
                to={`/colleges/exampleId/courses/exampleId/posts/${id}`}
                className=""
              >
                <p className="text-2xl">{`${title}`}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseForum;
