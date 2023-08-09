import { Form, Link} from "react-router-dom";

const CreatePost = () => {
  

  return (
    <Form method="post" className="selection:bg-blue-200 flex flex-col gap-2">
      <div className="flex justify-center">
        <div className="">
          <div className="mb-12 text-center">
            <p className="text-white text-5xl font-bold">{`What's on your mind?`}</p>
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
                placeholder=""
                type="text"
                name="title"
                id="title"
                className="
                  bg-[#272727] focus:outline-none px-10 py-8 text-white w-[56rem] h-[10rem] 
                  focus:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)] rounded-lg focus:text-black
                  shadow-[0px_0px_5px_rgba(0,0,0,0.40)] focus:bg-gray-200 text-4xl transition
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
                placeholder=""
                type="text"
                name="company"
                id="company"
                className="
                bg-[#272727] focus:outline-none px-10 py-8 text-white h-[30rem] 
                  focus:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)] rounded-lg focus:text-black
                  shadow-[0px_0px_5px_rgba(0,0,0,0.40)] focus:bg-gray-200 transition
                  duration-200 resize-none
                  "
              />
            </fieldset>
          </div>
        </div>
        <div className="flex justify-center mx-auto mt-24 text-center">
          <div className="ml-10">
            <Link to={`/colleges/:collegeId/courses/:courseId`}>
              <div
                className="px-10 py-6 bg-[#272727] rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.40)] 
              hover:bg-fuchsia-500 transition duration-200 hover:shadow-[inset_0_0px_10px_rgba(0,0,0,0.5)]
              font-bold border-b-[1px] border-fuchsia-700
              "
              >
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
