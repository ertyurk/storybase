import { useContext, useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";

import InputBox from "./input";
import StoryBucket from "./storyBucket";
import FormContext from "./formContext";

const StoryForm = () => {

  const generalContext = useContext(FormContext);

  var formContext = generalContext.storyArray;
  var csvCore = [["Epic ID", "As a", "I want to", "So That"], ...formContext];

  const [epic, setEpic] = useState(1);
  const [user, setUser] = useState("");
  const [task, setTask] = useState("");
  const [soThat, setSoThat] = useState("");
  const [err, setErr] = useState(false);
  const [update, setUpdate] = useState(false);

  const storyBucketHandler = (data: any) => {
    if (data.command == "REMOVE") {
      formContext = formContext.filter((o) => o[0][0] != data.isSelect);
    } else if (data.command == "EDIT") {
      var el = formContext.filter((o) => o[0] == data.isSelect);

      setEpic(el[0][0]);
      setUser(el[0][1]);
      setTask(el[0][2]);
      setSoThat(el[0][3]);
      setUpdate(true);
    }
  };

  const handleCancelation = () => {
    setUpdate(false);
    setUser("");
    setTask("");
    setSoThat("");
    setEpic(formContext.length + 1);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (user.length > 0 && task.length > 0 && soThat.length > 0) {
      setErr(false);

      if (!update) {
        formContext.push([epic, user, task, soThat]);
      } else {
        formContext.forEach((o) => {
          if (o[0] == epic) {
            o[1] = user;
            o[2] = task;
            o[3] = soThat;
          }
        });

        setUpdate(false);
      }

      if (formContext.length > 0) {
        setEpic(formContext.length + 1);
      }

      setUser("");
      setTask("");
      setSoThat("");
    } else {
      setErr(true);
    }
  };

  return (
    <div>
      <form className="w-full max-w-sm py-5">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="Epic"
            >
              Epic
            </label>
          </div>
          <div className="md:w-2/3">
            <div className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
              {epic}
            </div>
          </div>
        </div>

        <InputBox
          title="As a"
          value={user}
          placeholder="Type of User"
          onChange={(e) => setUser(e.target.value)}
        />

        <InputBox
          title="I want to"
          value={task}
          placeholder="Perform a task"
          onChange={(e) => setTask(e.target.value)}
        />

        <InputBox
          title="So That"
          value={soThat}
          placeholder="A goal can be achieved"
          onChange={(e) => setSoThat(e.target.value)}
        />

        <div className="md:flex  md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <div className="flex justify-between">
              <button
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={handleSubmit}
              >
                Save as Epic
              </button>

              {update && (
                <button
                  className=" shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  onClick={handleCancelation}
                >
                  Cancel
                </button>
              )}
            </div>

            {err && (
              <p className="text-red-500 text-xs italic pt-4">
                fill in the blanks
              </p>
            )}
          </div>
        </div>
      </form>

      {formContext.length > 0 && (
        <div>
          <div className="text-center  shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
            <CSVLink data={csvCore}>Download CSV export</CSVLink>
          </div>
          <StoryBucket storyBucketHandler={storyBucketHandler} />
        </div>
      )}
    </div>
  );
};

export default StoryForm;

/**

 * 
 */
