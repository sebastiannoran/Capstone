import { Form, Link } from "react-router-dom";

const CreatePost = () => {
  // const errors = useActionData();

  return (
    <Form method="post" className="selection:bg-blue-200 flex flex-col gap-2">
      <div className="flex justify-center">
        <div className="">
          <div className="mb-12 text-center">
            <p className="text-white text-5xl">Add Job Posting</p>
          </div>
          <div className="flex flex-col rounded-lg gap-2">
            {/* {errors && <div className="text-red-300">{errors}</div>} */}
            <fieldset className="flex flex-col">
              <label htmlFor="title"></label>
              <input
                placeholder="Post title..."
                type="text"
                name="title"
                id="title"
                className="
                  bg-[#272727] focus:outline-none px-10 py-8 text-white w-[32rem] h-[12rem] 
                  focus:shadow-[inset_0_0px_10px_rgba(150,0,150,0.5)] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)]"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="company"></label>
              <input
                placeholder="Post content..."
                type="text"
                name="company"
                id="company"
                className="
                bg-[#272727] focus:outline-none px-10 py-8 text-white w-[32rem] h-[24rem] 
                  focus:shadow-[inset_0_0px_10px_rgba(150,0,150,0.5)] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)]"
              />
            </fieldset>
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-24">
          <div className="ml-10">
            <Link to={`/colleges/:collegeId/courses/:courseId`}>
              <div className="px-10 py-6 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)]">
                <p>Submit Post</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default CreatePost;
