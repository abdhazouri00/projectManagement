function Sidebar({ createProject, list, onSelect }) {
  const selectProj = (e) => {
    onSelect(e);
  };
  return (
    <>
      <div className="h-screen w-64 bg-black text-white flex flex-col items-center">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Your Projects</h1>
        </div>
        <nav className="mt-10">
          <button
            className="bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={createProject}
          >
            +Add Project
          </button>
        </nav>
        <div className="mt-10 space-y-2">
          {list.length > 0 ? (
            list.map((listItem, index) => (
              <button
                key={index}
                className="bg-gray-700 text-white py-2 px-4 rounded w-full text-left"
                onClick={() => {
                  selectProj(listItem);
                }}
              >
                {listItem.title}
              </button>
            ))
          ) : (
            <p className="text-gray-400">No projects available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
