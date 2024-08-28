import img from "../assets/no-projects.png";

function Empty({ createNewProject }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={img} className="w-32 h-32" />
        <h1>No Project Selected</h1>
        <p>Select a Project or get started with new one</p>
        <button
          className="bg-gray-800 text-white p-3 rounded mt-3"
          onClick={createNewProject}
        >
          Create new Project
        </button>
      </div>
    </>
  );
}

export default Empty;
