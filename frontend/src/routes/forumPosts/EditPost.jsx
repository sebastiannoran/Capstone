import {
  Form,
  useLoaderData,
  useActionData,
  redirect,
  Link,
} from "react-router-dom";

export async function loader({ params }) {
  const collegeResponse = await fetch(`/api/colleges/${params.collegeId}`);
  const college = await collegeResponse.json();
  const postResponse = await fetch(`/api/posts/${params.postId}`);
  const post = await postResponse.json();
  return { post, college };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const preparedPost = Object.fromEntries(formData);
  const response = await fetch(`/api/posts/${params.postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedPost),
  });

  if (response.ok) {
    return redirect(`/colleges/${params.collegeId}/majors/${params.majorId}`);
  } else {
    const { errors } = await response.json();
    return errors;
  }
}

const EditPost = () => {
  const { post, college } = useLoaderData();

  return (
    <Form
      method="post"
      className="flex flex-col justify-center items-center text-center divide-y-[1px] divide-white
      xl:w-[60rem] mb-[25rem]"
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
      <div className="text-center pt-10">
        <div className="mb-10 flex justify-center items-center">
          <p className="text-white text-5xl font-bold">{`Edit Post`}</p>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col gap-10">
              {/* {errors && <div className="text-red-300">{errors}</div>} */}
              <fieldset className="flex flex-col">
                <label
                  htmlFor="title"
                  className="text-lg py-2 text-center rounded-lg border-t-[1px] border-gray-500
            "
                >
                  Title
                </label>
                <textarea
                  defaultValue={post.title}
                  placeholder=""
                  type="text"
                  name="title"
                  id="title"
                  className="
              bg-[#272727] focus:outline-none px-10 py-8 text-white w-[56rem] h-[14rem] 
              focus:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)] rounded-lg focus:text-black
              shadow-[0px_0px_5px_rgba(0,0,0,0.40)] focus:bg-gray-200 text-5xl transition
              duration-200
              min-w-[10rem]
              sm:w-[20rem] 
              md:w-[26rem]
              lg:w-[35rem]
              xl:w-[50rem]
              "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label
                  htmlFor="company"
                  className="text-lg py-2 text-center rounded-lg border-t-[1px] border-gray-500
            "
                >
                  Thoughts
                </label>
                <textarea
                  defaultValue={post.content}
                  placeholder=""
                  type="text"
                  name="content"
                  id="content"
                  className="
            bg-[#272727] focus:outline-none px-10 py-8 text-white h-[40rem] 
              focus:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)] rounded-lg focus:text-black
              shadow-[0px_0px_5px_rgba(0,0,0,0.40)] focus:bg-gray-200 text-xl transition
              duration-200
              min-w-[10rem]
              sm:w-[20rem] 
              md:w-[26rem]
              lg:w-[35rem]
              xl:w-[50rem]
              "
                />
              </fieldset>
            </div>
          </div>
          <div className="flex justify-center mx-auto text-center">
            <div className="ml-10">
              {/* <Link to={`/colleges/:collegeId/courses/:courseId`}> */}
              <button
                className="bg-[#272727] px-8 py-6 w-[10rem] h-[5rem] rounded-lg
                hover:bg-blue-600 transition duration-200
                shadow-[0_0px_5px_rgb(0,0,0,0.7)] flex items-center justify-center
                hover:hover:bg-fuchsia-600 border-fuchsia-700 border-b-[1px]
                "
              >
                Submit Changes
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default EditPost;
