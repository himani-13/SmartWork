import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

/* MAIN PAGES */
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProjectDetails from "./pages/ProjectDetails";
import AdminDashboard from "./pages/AdminDashboard";

/* NEW PAGES */
import ApplyProject from "./pages/ApplyProject"
import ApplicationStatus from "./pages/ApplicationStatus";
import DeveloperRegister from "./pages/DeveloperRegister";
import PostProject from "./pages/PostProject";

/* ADMIN DATA PAGES */
import AdminUsers from "./pages/AdminUsers";
import AdminProjects from "./pages/AdminProjects";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* MARKETPLACE */}
        <Route path="/marketplace" element={<Marketplace />} />

        {/* PROJECT DETAILS */}
        <Route path="/project/:id" element={<ProjectDetails />} />

        {/* APPLY PROJECT */}
        <Route path="/apply/:id" element={<ApplyProject/>} />

        {/* ADMIN DASHBOARD */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* ADMIN DATA PAGES */}
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/projects" element={<AdminProjects />} />

        {/* APPLICATION STATUS */}
        <Route path="/application-status" element={<ApplicationStatus />} />

        {/* DEVELOPER REGISTER */}
        <Route path="/developer-register" element={<DeveloperRegister />} />

        {/* POST PROJECT */}
        <Route path="/post-project" element={<PostProject />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;