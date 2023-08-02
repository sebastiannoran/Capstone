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
      <div className="border-[1px] border-y-fuchsia-900 border-x-transparent py-10 px-12 rounded-lg shadow-[3px_5px_1px_rgba(0,0,0,0.25)]">
        {posts.map(({ id, title, content }) => {
          return (
            <Link
              key={id}
              to={`/colleges/exampleId/courses/exampleId/posts/${id}`}
            >
              <div className="mx-auto w-[32rem] font-bold bg-[#272727] rounded-lg my-6 py-6 px-8 shadow-[2px_2px_1px_rgba(0,0,0,0.25)]">
                <p className="text-2xl">{`${title}`}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CourseForum;
