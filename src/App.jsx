import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import VenuLists from "./components/VenuLists";
import ViewDetails from "./components/ViewDetails";
import data from './assets/data.json'
import { ProjectProvider } from "./components/ProjectContext";
import ComingSoon from "./components/ComingSoon"
function App() {
  return (
    <div className="main flex">
     <ProjectProvider>
       {/* Sidebar */}
       <Router>
        <Sidebar />
          <div className="flex-1 ml-44 p-6 w-full">
        <Routes>
          <Route path="/" element={<VenuLists projects={data} />} />
            <Route path="/details" element={<ViewDetails projects={data}/>} />
            <Route path="/explore" element={<ComingSoon/>}/>
            <Route path="/users" element={<ComingSoon/>}/>
            <Route path="/contractors" element={<ComingSoon/>}/>
        </Routes>
          </div>
      </Router>
     </ProjectProvider>
    </div>
  );
}

export default App;
