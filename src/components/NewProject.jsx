import { useState } from "react";

function NewProject({ cancelProj, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = { title, description, date };
    onSave(projectData);
    };
    
  return (
    <>
      <div className="flex flex-col mt-20 ml-20">
        <div className="flex flex-row justify-end mb-4">
          <button className="mr-2" onClick={cancelProj}>
            Cancel
          </button>
          <button className="bg-blue-700 rounded p-2 text-white" onClick={handleSubmit}>Save</button>
        </div>
        <form className="flex flex-col space-y-4">
          <label className="text-gray-700">Title</label>
          <input
            type="text"
            className="bg-gray-200 p-2 w-full max-w-3xl"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label className="text-gray-700">Description</label>
          <textarea
            className="bg-gray-200 p-2 w-full max-w-3xl"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <label className="text-gray-700">Due Date</label>
          <input
            type="date"
            className="bg-gray-200 p-2 w-full max-w-3xl"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </form>
      </div>
    </>
  );
}

export default NewProject;
