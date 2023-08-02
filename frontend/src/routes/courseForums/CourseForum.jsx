import { useState } from "react";
import { forumData } from "../../misc/data";
import { Link } from "react-router-dom";

const CourseForum = () => {
  const [posts, setPosts] = useState(forumData[0]);

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div>
          <div className="mb-12">
            <p className="text-5xl">{`"Course Name Here"`}</p>
          </div>
          <div className="max-w-4xl bg-[#272727] divide-y-[1px] divide-black rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)]">
            {posts.map(({ id, title, content }) => {
              return (
                <div
                  key={id}
                  className="flex justify-center max-w-4xl font-bold py-10 px-10"
                >
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
        <div className="flex justify-center mx-auto mt-24">
          <div className="ml-10">
            <Link to={`/colleges/:collegeId/courses/:courseId/create-post`}>
              <div className="px-10 py-6 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)]">
                <p>Create Post</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseForum;
