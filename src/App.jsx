import { useState } from "react";
import Empty from "./components/Empty";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import ProjPage from "./components/ProjPage";

function App() {
  const [projs, setProjs] = useState([]);
  const [newClick, setNewClick] = useState(false);
  const [selectedProj, setSelectedProj] = useState(null);

  const handleCreateClick = (e) => {
    e.preventDefault();
    setNewClick(true);
  };

  const handleCancel = () => {
    setNewClick(false);
  };

  const handleAdd = (newProject) => {
    setProjs([...projs, newProject]);
    console.log(projs);
    setNewClick(false);
  };

  const handleProjSelect = (proj) => {
    setSelectedProj(proj);
  };

  return (
    <>
      <div className="flex flex-row">
        <Sidebar
          createProject={handleCreateClick}
          list={projs}
          onSelect={handleProjSelect}
        />
        <div className="flex justify-center">
          {selectedProj ? (
            <ProjPage title={selectedProj.title} description={selectedProj.description} date={selectedProj.date} />
          ) : newClick ? (
            <NewProject cancelProj={handleCancel} onSave={handleAdd} />
          ) : (
            <Empty createNewProject={handleCreateClick} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
