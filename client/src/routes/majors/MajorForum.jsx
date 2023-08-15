import { useState } from "react";
import { forumData } from "../../misc/data";
import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const collegeResponse = await fetch(`/api/colleges/${params.collegeId}`);
  const college = await collegeResponse.json();
  const majorResponse = await fetch(`/api/majors/${params.majorId}`);
  const major = await majorResponse.json();
  const postsResponse = await fetch(`
    /api/posts?majorId=${params.majorId}
    `);
  const posts = await postsResponse.json();
  console.log(major, college, posts);
  return { major, college, posts };
}

const MajorForum = () => {
  const { major, college, posts } = useLoaderData();
  console.log(college.homepageImg);

  // const [posts, setPosts] = useState(forumData[0]);

  return (
    <div
      className="flex flex-col justify-center items-center text-center divide-y-[1px] divide-white
    xl:w-[60rem] mb-[25rem]
    "
    >
      <div className="bg-white my-10 rounded-lg hover:scale-95 ease-in-out duration-300">
        <Link
          className="
        
        "
          to={`/colleges/${college.id}`}
        >
          <div
            style={{ "--image-url": `url(${college.logo})` }}
            className="bg-[image:var(--image-url)] w-[14rem] h-[6rem] bg-center bg-cover"
          ></div>
        </Link>
      </div>
      <div
        className="text-center pt-10
      "
      >
        <div className="mb-10 flex justify-center items-center">
          <p className="text-5xl font-bold">{`${major.name}`}</p>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div
              className=" bg-[#272727] divide-y-[1px] 
            divide-black rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)]
            "
            >
              {posts.map(({ id, title, content }) => {
                return (
                  <div
                    key={id}
                    className="
                  font-bold py-10 px-10
                  min-w-[5rem]
                  sm:w-[15rem] 
                  md:w-[20rem]
                  lg:w-[35rem]
                  xl:w-[50rem]
                  "
                  >
                    <Link
                      to={`/colleges/${college.id}/majors/${major.id}/posts/${id}`}
                      className=""
                    >
                      <p className="text-2xl transition hover:underline duration-700 wordBreak">{`${title}`}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center">
            {posts.length > 0 ? (
              <div className="ml-10">
                <Link
                  to={`/colleges/${college.id}/majors/${major.id}/create-post`}
                >
                  <div
                    className="px-10 py-6 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
                  hover:bg-fuchsia-500 transition duration-200
                  font-bold border-b-[1px] border-fuchsia-700 w-[10rem]
                  "
                  >
                    <p>Create Post</p>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="">
                <Link
                  to={`/colleges/${college.id}/majors/${major.id}/create-post`}
                >
                  <div
                    className="px-10 py-6 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
                  hover:bg-fuchsia-500 transition duration-200
                  font-bold border-b-[1px] border-fuchsia-700 w-[10rem]
                  "
                  >
                    <p>Create Post</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorForum;
