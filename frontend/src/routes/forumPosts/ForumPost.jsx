import { useContext } from "react";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import CommentCard from "../comments/CommentCard";

export async function loader({ params }) {
  const collegeResponse = await fetch(`/api/colleges/${params.collegeId}`);
  const college = await collegeResponse.json();
  const postResponse = await fetch(`/api/posts/${params.postId}`);
  const post = await postResponse.json();
  const commentsResponse = await fetch(`/api/comments?postId=${params.postId}`);
  const comments = await commentsResponse.json();
  const id = {
    majorId: params.majorId,
    collegeId: params.collegeId,
    postId: params.post,
  };
  return { id, post, comments, college };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const preparedComment = {
    ...Object.fromEntries(formData),
    PostId: parseInt(params.postId),
  };
  if (preparedComment.content.trim().length <= 0) {
    alert("Please enter contents for your comment.");
    return null;
  }
  try {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedComment),
    });
  } catch (error) {
    console.error(error);
    return "Whoops! Something went wrong";
  }
  return null;
}

export const ForumPost = () => {
  const { id, post, comments, college } = useLoaderData();
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(comments);

  const renderedComments = comments
    .sort((x, y) => x.createdAt - y.createdAt)
    .map((comment) => <CommentCard comment={comment} key={comment.id} />);

  console.log(renderedComments);
  return (
    <div
      className="flex flex-col justify-center items-center divide-y-[1px] divide-white
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
        className="flex justify-center pt-10
      "
      >
        <div className="">
          <div
            className="flex flex-col rounded-lg
          "
          >
            <div
              className="flex flex-col divide-y-[1px] divide-[#161616] rounded-lg
            shadow-[0_0px_5px_rgb(0,0,0,0.7)]
            "
            >
              <p
                className="
              flex items-center justify-center bg-[#272727] px-10 py-12 whitespace-pre-wrap
              text-white w-[56rem] min-h-[5rem] rounded-t-lg text-5xl wordBreak
              min-w-[10rem] text-center
              sm:w-[20rem] 
              md:w-[26rem]
              lg:w-[35rem]
              xl:w-[50rem]
              "
              >
                {post.title}
              </p>
              <p
                className="
              flex justify-start bg-[#272727] px-10 py-12 text-white w-[56rem] min-h-[5rem] 
              rounded-b-lg text-2xl whitespace-pre-wrap wordBreak overflow-hidden
              min-w-[10rem]
              sm:w-[20rem] 
              md:w-[26rem]
              lg:w-[35rem]
              xl:w-[50rem]
              "
              >
                {post.content}
              </p>
            </div>
          </div>
          {currentUser ? (
            <Form className="my-4 flex gap-2" method="post">
              <input
                placeholder="Add a comment..."
                className="flex-1 p-2 text-black rounded-lg"
                name="content"
              />
              <button
                className="
                rounded-lg bg-[#272727] hover:hover:bg-fuchsia-500 transition 
                border-b-[1px] border-fuchsia-700 duration-500 px-6 py-4
                shadow-[0_0px_5px_rgb(0,0,0,0.7)]
                "
                type="submit"
              >
                Create Comment
              </button>
            </Form>
          ) : (
            <div className="my-4 flex gap-2">
              <input
                placeholder="add a comment..."
                className="flex-1 p-2 text-black rounded-lg"
                name="content"
              />
              <Link className="" to="/login">
                <button
                  className="
                  rounded-lg bg-[#272727] hover:hover:bg-fuchsia-600 transition 
                border-b-[1px] border-fuchsia-700 duration-500 px-6 py-4
                shadow-[0_0px_5px_rgb(0,0,0,0.7)]
                  "
                  type="submit"
                >
                  Create Comment
                </button>
              </Link>
            </div>
          )}

          <div
            className="flex flex-col divide-y-[1px] divide-[#161616] bg-[#272727] rounded-lg
            shadow-[0_0px_5px_rgb(0,0,0,0.7)]"
          >
            {renderedComments}
          </div>
        </div>
        {!!currentUser && currentUser.id === post.UserId ? (
          <div className="">
            <div className="ml-4 mb-4">
              <Link
                to={`/colleges/${id.collegeId}/majors/${id.majorId}/posts/${post.id}/edit`}
                className=""
              >
                <button
                  className="bg-blue-600 px-8 py-6 w-[10rem] h-[5rem] rounded-lg
                hover:bg-blue-700 transition duration-200
                shadow-[0_0px_5px_rgb(0,0,0,0.7)]
                "
                >
                  Edit Post
                </button>
              </Link>
            </div>
            <div className="ml-4">
              <fetcher.Form
                method="delete"
                action={`delete`}
                onSubmit={(event) => {
                  if (
                    !confirm("Please confirm you want to delete this record.")
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <button
                  className="bg-red-600 px-8 py-6 w-[10rem] h-[5rem] rounded-lg
                  hover:bg-red-700 transition duration-200
                  shadow-[0_0px_5px_rgb(0,0,0,0.7)]
                  "
                  type="submit"
                >
                  Delete Post
                </button>
              </fetcher.Form>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ForumPost;
