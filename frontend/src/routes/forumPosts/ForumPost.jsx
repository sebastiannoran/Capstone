import { useState, useContext } from "react";
import isAuthChecked from "../../contexts/AuthContext";
import { Link, useFetcher, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export async function loader({ params }) {
  const postResponse = await fetch(`/api/posts/${params.postId}`);
  const post = await postResponse.json();
  const id = {
    majorId: params.majorId,
    collegeId: params.collegeId,
    postId: params.post,
  };
  // console.log(major, college, post);
  // console.log(post);
  return { id, post };
  // return { post };
}

export const ForumPost = () => {
  const { id, post } = useLoaderData();
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex justify-center">
      <div className="">
        {/* <div className="mb-12 text-center">
          <p className="text-white text-5xl font-bold">{`What's on your mind?`}</p>
        </div> */}
        <div className="flex flex-col rounded-lg gap-10">
          {/* {errors && <div className="text-red-300">{errors}</div>} */}
          <div className="flex flex-col divide-y-[2px] divide-[#1f1f1f] rounded-lg border-y-[1px] border-y-fuchsia-700">
            <p
              className="
              text-center flex items-center justify-center bg-[#272727] px-10 py-12 text-white w-[56rem] min-h-[5rem] rounded-t-lg focus:text-black text-5xl
              "
            >
              {post.title}
            </p>
            <p
              className="
              flex justify-start bg-[#272727] px-10 py-12 text-white w-[56rem] min-h-[5rem] rounded-b-lg focus:text-black text-xl
              "
            >
              {post.content}
            </p>
          </div>
        </div>
        <div>comments go here</div>
      </div>
      {!!currentUser && currentUser.id === post.UserId ? (
        <div className="">
          <div className="border-[1px] m-4">
            <Link
              to={`/colleges/${id.collegeId}/majors/${id.majorId}/posts/${post.id}/edit`}
              className=""
            >
              Edit
            </Link>
          </div>
          <div className="border-[1px] m-4">
            <fetcher.Form
              method="post"
              action={`delete`}
              onSubmit={(event) => {
                if (
                  !confirm("Please confirm you want to delete this record.")
                ) {
                  event.preventDefault();
                  // redirect(`/colleges/${id.collegeId}/majors/${id.majorId}`);
                }
                navigate(`/colleges/${id.collegeId}/majors/${id.majorId}`);
              }}
            >
              <button>
                <p>DELETE</p>
              </button>
            </fetcher.Form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ForumPost;
