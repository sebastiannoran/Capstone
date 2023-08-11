import { Form, useLoaderData, useActionData, redirect } from "react-router-dom";

export async function loader({ params }) {
  const postResponse = await fetch(`/api/posts/${params.postId}`);
  const post = await postResponse.json();
  return { post };
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
  const { post } = useLoaderData();

  return (
    <Form method="post" className="selection:bg-blue-200 flex flex-col gap-2">
      <div className="flex justify-center">
        <div className="">
          <div className="mb-12 text-center">
            <p className="text-white text-5xl font-bold">{`Editing Your Thoughts`}</p>
          </div>
          <div className="flex flex-col rounded-lg gap-10">
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
              duration-200 resize-none
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
              duration-200 resize-none
              "
              />
            </fieldset>
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-24 text-center">
          <div className="ml-10">
            {/* <Link to={`/colleges/:collegeId/courses/:courseId`}> */}
            <button
              className="px-10 py-6 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
          hover:bg-fuchsia-500 transition duration-200 hover:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)]
          font-bold border-b-[1px] border-fuchsia-700
          "
            >
              Submit Changes
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Form>
  );
};

export default EditPost;