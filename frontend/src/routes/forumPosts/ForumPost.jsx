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
  // const majorResponse = await fetch(`/api/majors/${params.majorId}`);
  // const major = await majorResponse.json();
  // const collegeResponse = await fetch(`/api/colleges/${params.collegeId}`);
  // const college = await collegeResponse.json();
  const postResponse = await fetch(`/api/posts/${params.postId}`);
  const post = await postResponse.json();
  const commentsResponse = await fetch(`/api/comments?postId=${params.postId}`);
  const comments = await commentsResponse.json();
  const id = {
    majorId: params.majorId,
    collegeId: params.collegeId,
    postId: params.post,
  };
  return { id, post, comments };
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
  const { id, post, comments } = useLoaderData();
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(comments);

  const renderedComments = comments
    .sort((x, y) => x.createdAt - y.createdAt)
    .map((comment) => <CommentCard comment={comment} key={comment.id} />);

  console.log(renderedComments);
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="flex flex-col rounded-lg gap-10">
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
              rounded-b-lg focus:text-black text-xl whitespace-pre-wrap wordBreak overflow-hidden
              "
            >
              {post.content}
            </p>
          </div>
        </div>
        {currentUser ? (
          <Form className="my-4 flex gap-2" method="post">
            <input
              placeholder="add a comment..."
              className="flex-1 p-2 text-black"
              name="content"
            />
            <button
              className="shared-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded focus:outline-none border-none"
              type="submit"
            >
              Create Comment
            </button>
          </Form>
        ) : null}

        <div className="flex flex-col divide-y-[1px] divide-[#161616] bg-[#272727] rounded-lg">
          {renderedComments}
        </div>
      </div>
      {!!currentUser && currentUser.id === post.UserId ? (
        <div className="">
          <div className="m-4">
            <Link
              to={`/colleges/${id.collegeId}/majors/${id.majorId}/posts/${post.id}/edit`}
            >
              <button className="shared-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-14 rounded focus:outline-none border-none">
                Edit
              </button>
            </Link>
          </div>
          <div className="m-4">
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
                className="shared-button bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-10 rounded focus:outline-none border-none"
                type="submit"
              >
                DELETE
              </button>
              <button
                className="comment-button bg-red-500 hover:bg-red-600 text-white"
                onClick={() =>
                  setEditedComments(
                    editedComments.filter((comment) => comment.id !== -1)
                  )
                }
              >
                Cancel
              </button>
            </li>
          )}
        </ul> */}
        {/* <button
          className="button bg-green-500 hover:bg-green-600 text-white mt-2"
          onClick={() =>
            setEditedComments([...editedComments, { id: -1, text: "" }])
          }
        >
          Add Comment
        </button> */}
      </div>
    </div>
  );
};

export default ForumPost;
