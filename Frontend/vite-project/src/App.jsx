import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

/* MAIN PAGES */
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProjectDetails from "./pages/ProjectDetails";
import AdminDashboard from "./pages/AdminDashboard";

/* PROJECT PAGES */
import ApplyProject from "./pages/ApplyProject";
import ApplicationStatus from "./pages/ApplicationStatus";
import PostProject from "./pages/PostProject";
import Profile from "./pages/Profile"

/* DEVELOPER */
import DeveloperRegister from "./pages/DeveloperRegister";

/* ADMIN */
import AdminUsers from "./pages/AdminUsers";
import AdminProjects from "./pages/AdminProjects";

import AdminLogin from "./pages/AdminLogin";

import Signup from "./pages/signup"

function App() {

return (

<BrowserRouter>

{/* GLOBAL NAVBAR */}
<Navbar />

{/* ROUTES */}

<Routes>

{/* HOME */}
<Route path="/" element={<Home />} />

{/* MARKETPLACE */}
<Route path="/marketplace" element={<Marketplace />} />

{/* PROJECT DETAILS */}
<Route path="/project/:id" element={<ProjectDetails />} />

{/* APPLY PROJECT */}
<Route path="/apply/:id" element={<ApplyProject />} />

{/* POST PROJECT */}
<Route path="/post-project" element={<PostProject />} />
<Route path="/profile" element={<Profile/>}/>

{/* APPLICATION STATUS */}
<Route path="/application-status" element={<ApplicationStatus />} />

{/* DEVELOPER REGISTER */}
<Route path="/developer-register" element={<DeveloperRegister />} />

{/* ADMIN DASHBOARD */}
<Route path="/dashboard" element={<AdminDashboard />} />
<Route path="/admin" element={<AdminDashboard />} />

{/* ADMIN MANAGEMENT */}
<Route path="/admin/users" element={<AdminUsers />} />
<Route path="/admin/projects" element={<AdminProjects />} />

<Route path="/admin-login" element={<AdminLogin />} />
<Route path="/dashboard" element={<AdminDashboard />} />

<Route path="/signup" element={<Signup />} />

</Routes>

</BrowserRouter>

);

}

export default App;