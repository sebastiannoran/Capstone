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
  const postResponse = await fetch(`/api/posts/${params.postId}`);
  const post = await postResponse.json();
  const commentsResponse = await fetch(`/api/comments?postId=${params.postId}`);
  const comments = await commentsResponse.json();
  const id = {
    majorId: params.majorId,
    collegeId: params.collegeId,
    postId: params.post,
  };
  // console.log(major, college, post);
  // console.log(post);
  return { id, post, comments };
  // return { post };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const preparedComment = {
    ...Object.fromEntries(formData),
    PostId: parseInt(params.postId),
  };
  // console.log(preparedComment);
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
  const { id, post, comments } = useLoaderData();
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  // console.log(comments);

  const renderedComments = comments.map((comment) => (
    <CommentCard comment={comment} />
  ));

  return (
    <div className="flex justify-center">
      <div className="">
        <div className="flex flex-col rounded-lg gap-10">
          {/* {errors && <div className="text-red-300">{errors}</div>} */}
          <div className="flex flex-col divide-y-[1px] divide-[#161616] rounded-lg">
            <p
              className="
              flex items-center justify-center bg-[#272727] px-10 py-12 whitespace-pre-wrap
              text-white w-[56rem] min-h-[5rem] rounded-t-lg focus:text-black text-5xl
              "
            >
              {post.title}
            </p>
            <p
              className="
              flex justify-start bg-[#272727] px-10 py-12 text-white w-[56rem] min-h-[5rem] 
              rounded-b-lg focus:text-black text-xl whitespace-pre-wrap
              "
            >
              {post.content}
            </p>
          </div>
        </div>
         <Form className="my-4 flex gap-2" method="post">
          <input
            placeholder="add a comment..."
            className="flex-1 p-2 text-black"
            name="content"
          />
          <button
            className="bg-blue-500 px-3 text-2xl rounded-sm"
            type="submit"
          >
            Create Comment
          </button>
        </Form>
        <div className="flex flex-col divide-y-[1px] divide-[#161616] bg-[#272727] rounded-lg">
          {renderedComments}
        </div>
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
              method="delete"
              action={`delete`}
              onSubmit={(event) => {
                if (
                  !confirm("Please confirm you want to delete this record.")
                ) {
                  event.preventDefault();
                  // redirect(`/colleges/${id.collegeId}/majors/${id.majorId}`);
                }
                // navigate(`/colleges/${id.collegeId}/majors/${id.majorId}`);
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
