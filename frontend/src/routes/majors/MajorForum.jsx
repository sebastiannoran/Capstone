import { useState } from "react";
import { forumData } from "../../misc/data";
import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const majorResponse = await fetch(`/api/majors/${params.majorId}`);
  const major = await majorResponse.json();
  const collegeResponse = await fetch(`/api/colleges/${params.collegeId}`);
  const college = await collegeResponse.json();
  const postsResponse = await fetch(`
    /api/posts?majorId=${params.majorId}
    `);
  const posts = await postsResponse.json();
  console.log(major, college);
  return { major, college, posts };
}

const MajorForum = () => {
  const { major, college, posts } = useLoaderData();
  const { id, name } = college;
  // const [posts, setPosts] = useState(forumData[0]);

  return (
    <div className="text-center">
      <div className="flex justify-center">
        <div>
          <div className="mb-12">
            <p className="text-5xl font-bold">{`${major.name}`}</p>
          </div>
          <div className="max-w-4xl bg-[#272727] divide-y-[1px] divide-black rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)]">
            {posts.map(({ id, title, content }) => {
              return (
                <div
                  key={id}
                  className="flex justify-center max-w-4xl font-bold py-10 px-10"
                >
                  <Link
                    to={`/colleges/${college.id}/majors/${major.id}/posts/${id}`}
                    className=""
                  >
                    <p className="text-2xl transition hover:underline duration-700">{`${title}`}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-24">
          <div className="ml-10">
            <Link to={`/colleges/${college.id}/majors/${major.id}/create-post`}>
              <div
                className="px-10 py-6 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
              hover:bg-fuchsia-500 transition duration-200 hover:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)]
              font-bold border-b-[1px] border-fuchsia-700
              "
              >
                <p>Create Post</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorForum;
