import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

/* MAIN PAGES */
import Home from "./pages/Home";
import Marketplace from "./pages/ClientLogin";
import ProjectDetails from "./pages/ProjectDetails";
import AdminDashboard from "./pages/AdminDashboard";

/* PROJECT PAGES */
import ApplyProject from "./pages/ApplyProject";
import ApplicationStatus from "./pages/ApplicationStatus";
import PostProject from "./pages/PostProject";
import Profile from "./pages/Profile";

/* DEVELOPER */
import DeveloperLogin from "./pages/DeveloperLogin";
import DeveloperRegi from "./pages/DeveloperRegi";

/* ADMIN */
import AdminUsers from "./pages/AdminUsers";
import AdminProjects from "./pages/AdminProjects";
import AdminLogin from "./pages/AdminLogin";

/* OTHER */
import Signup from "./pages/signup";
import UserDetails from "./pages/UserDetails";

/* CLIENT */
import ClientDashboard from "./pages/ClientDashboard";
import RecommendedDevelopers from "./pages/RecommendedDevelopers";
import Applications from "./pages/Applications";
import ProjectCompleted from "./pages/ProjectCompleted";
import MyProjects from "./pages/MyProjects";
import CreateProject from "./pages/CreateProject";


function App() {

return (

<BrowserRouter>

<Navbar />

<Routes>

{/* HOME */}
<Route path="/" element={<Home />} />

{/* MARKETPLACE */}
<Route path="/marketplace" element={<Marketplace />} />
<Route path="/project/:id" element={<ProjectDetails />} />
<Route path="/apply/:id" element={<ApplyProject />} />

{/* PROJECT */}
<Route path="/post-project" element={<PostProject />} />
<Route path="/application-status" element={<ApplicationStatus />} />

{/* PROFILE */}
<Route path="/profile" element={<Profile />} />
<Route path="/user/:id" element={<UserDetails />} />

{/* CLIENT */}
<Route path="/client-dashboard" element={<ClientDashboard />} />
<Route path="/recommended" element={<RecommendedDevelopers />} />
<Route path="/applications" element={<Applications />} />
<Route path="/completed" element={<ProjectCompleted />} />

{/* DEVELOPER */}
<Route path="/developerlogin" element={<DeveloperLogin />} />
<Route path="/developer-register" element={<DeveloperRegi />} />

{/* ADMIN */}
<Route path="/dashboard" element={<AdminDashboard />} />
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/users" element={<AdminUsers />} />
<Route path="/admin/projects" element={<AdminProjects />} />
<Route path="/admin-login" element={<AdminLogin />} />

{/* SIGNUP */}
<Route path="/signup" element={<Signup />} />

<Route path="/user/:id" element={<UserDetails />} />

<Route path="/client-dashboard" element={<ClientDashboard />} />

<Route path="/recommended" element={<RecommendedDevelopers />} />

<Route path="/applications" element={<Applications />} />

<Route path="/completed" element={<ProjectCompleted />} />
<Route path="/projects" element={<MyProjects/>}/>
<Route path="/create-project" element={<CreateProject/>}/>
</Routes>

</BrowserRouter>

);

}

export default App;