import { useState } from "react";

function ProjPage({ title, description, date }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewtask] = useState("");

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewtask("");
  };

  const clearTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col ">
            <h1 className="m-2 bg-slate-200">{title}</h1>
            <p className="m-2 bg-slate-200">{description}</p>
            <p className="m-2 bg-slate-200">{date}</p>
          </div>
          <button className="ml-5 bg-blue-700 rounded">Delete</button>
        </div>
        <hr />
        <div className="flex flex-col">
          <h1>Tasks</h1>
          <div className="flex flex-row">
            <input
              type="text"
              value={newTask}
              onChange={(e) => {
                setNewtask(e.target.value);
              }}
            />
            <button className="ml-5 bg-blue-700 rounded p-2" onClick={addTask}>
              Add Task
            </button>
          </div>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div key={index} className="flex flex-row bg-slate-400">
                <h1>{task}</h1>
                <button
                  onClick={() => {
                    clearTask(task);
                  }}
                  className="bg-transparent text-blue-300 border-none no-underline ml-auto"
                >
                  Clear
                </button>
              </div>
            ))
          ) : (
            <p>No tasks available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjPage;
