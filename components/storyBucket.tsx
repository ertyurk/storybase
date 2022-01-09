import { useContext } from "react";

import FormContext from "./formContext";

const StoryBucket = ({ storyBucketHandler }: { storyBucketHandler: any }) => {
  const generalContext = useContext(FormContext);
  var data = generalContext.storyArray;


  return (
    <div className="md:flex md:items-center mb-6">
      <div className="">
        <div className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
          {data.map((story, index) => {
            return (
              <div className="flex justify-between" key={index}>
                <div className="p-5">
                  <p>
                    EP#{story[0]},<b> As a</b> {story[1]},<b> I want</b> to{" "}
                    {story[2]},<b> So That</b> {story[3]}
                  </p>
                </div>

                <div className="flex">
                  <button
                    className="p-5"
                    onClick={() =>
                      storyBucketHandler({
                        isSelect: story[0],
                        command: "EDIT",
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>

                  <button
                    className="p-5 focus:bg-red-400 "
                    onClick={() =>
                      storyBucketHandler({
                        isSelect: story[0],
                        command: "REMOVE",
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StoryBucket;
