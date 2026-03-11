import React, { useEffect, useState } from "react";
import "../style.css";

function Home(){

const [projects,setProjects]=useState(0)
const [developers,setDevelopers]=useState(0)
const [clients,setClients]=useState(0)
const [countries,setCountries]=useState(0)

useEffect(()=>{

let p=0,d=0,c=0,co=0

const interval=setInterval(()=>{

if(p<500) p+=10
if(d<200) d+=5
if(c<300) c+=6
if(co<40) co+=1

setProjects(p)
setDevelopers(d)
setClients(c)
setCountries(co)

},40)

return ()=>clearInterval(interval)

},[])

return(

<div>

{/* NAVBAR */}

<nav className="navbar">

<h2 className="logo">SmartWork</h2>

<div className="nav-links">
<a href="/">Home</a>
<a href="/marketplace">Marketplace</a>
<a href="/dashboard">Dashboard</a>
<a href="/profile">Profile</a>
</div>

</nav>


{/* HERO */}

<section className="hero">

<div className="hero-content">

<h1>Global Service Marketplace</h1>

<p>
Connect clients with talented developers and build amazing
technology projects together.
</p>

<div className="hero-buttons">

<button className="btn btn-primary">
Post Project
</button>

<button className="btn btn-secondary">
Find Work
</button>

</div>

</div>

</section>


{/* PLATFORM OVERVIEW */}

<section className="section">

<h2>Platform Overview</h2>

<div className="cards">

<div className="card">
<h2>{projects}+</h2>
<p>Projects Posted</p>
</div>

<div className="card">
<h2>{developers}+</h2>
<p>Developers</p>
</div>

<div className="card">
<h2>{clients}+</h2>
<p>Active Clients</p>
</div>

<div className="card">
<h2>{countries}+</h2>
<p>Countries</p>
</div>

</div>

</section>


{/* FEATURES */}

<section className="section">

<h2>Platform Features</h2>

<div className="cards">

<div className="card">

<img
src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
className="feature-img"
/>

<h3>Developer Profiles</h3>

<p>
Developers showcase their skills, experience and portfolio.
</p>

</div>


<div className="card">

<img
src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
className="feature-img"
/>

<h3>Project Marketplace</h3>

<p>
Clients post projects and developers can apply easily.
</p>

</div>


<div className="card">

<img
src="https://cdn-icons-png.flaticon.com/512/3523/3523887.png"
className="feature-img"
/>

<h3>Smart Matching</h3>

<p>
AI engine recommends the best developers for projects.
</p>

</div>


<div className="card">

<img
src="https://cdn-icons-png.flaticon.com/512/2331/2331943.png"
className="feature-img"
/>

<h3>Analytics Dashboard</h3>

<p>
Admin panel with platform insights and analytics.
</p>

</div>

</div>

</section>


{/* CTA */}

<section className="cta">

<h2>Start Your Next Project Today</h2>

<p>
Join our marketplace and collaborate with developers
from around the world.
</p>

<button className="btn btn-primary">
Join Now
</button>

</section>


{/* FOOTER */}

<footer className="footer">

<div className="footer-grid">

<div>
<h3>SmartWork</h3>
<p>
Global service marketplace connecting clients
and developers.
</p>
</div>

<div>
<h4>Platform</h4>
<p>Marketplace</p>
<p>Post Project</p>
<p>Developers</p>
</div>

<div>
<h4>Company</h4>
<p>About</p>
<p>Careers</p>
<p>Contact</p>
</div>

<div>
<h4>Support</h4>
<p>Help Center</p>
<p>Terms</p>
<p>Privacy Policy</p>
</div>

</div>

<p className="copyright">
© 2026 SmartWork Marketplace
</p>

</footer>

</div>

)

}

export default Home