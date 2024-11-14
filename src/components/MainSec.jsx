import React, { useState } from "react";

const MainSec = () => {
  const [task, setTask] = useState("");
  const [des, setDes] = useState("");
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setDes("");
    setTask("");
    setData([...data, { task, des }]);
  };

  const dltHandler = (index) => {
    let copyData = [...data];
    copyData.splice(index, 1);
    setData(copyData);
  };

  return (
    <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] overflow-hidden border-[#e0e0e0] rounded-[10px] w-[50%] bg-white">
      <h1 className="text-3xl text-white font-bold text-center py-4 bg-blue-300">
        Todo List
      </h1>

      <form
        onSubmit={(e) => {
          {
            submitHandler(e);
          }
        }}
      >
        <div className="flex flex-col gap-4 p-4">
          <input
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            type="text"
            placeholder="Enter Your Task"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
          />
          <input
            value={des}
            onChange={(e) => {
              setDes(e.target.value);
            }}
            type="text"
            placeholder="Description"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Enter
          </button>
        </div>
      </form>

      <div className="flex flex-col gap-4 p-4">
        {data.map((index, i) => {
          return (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h1 className="text-xl font-semibold text-gray-800 mb-2 break-words">
                    {index.task}
                  </h1>
                  <p className="text-gray-600 text-sm break-words">
                    {index.des}
                  </p>
                </div>
                <button
                  onClick={() => dltHandler(index)}
                  className="flex-shrink-0 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainSec;
