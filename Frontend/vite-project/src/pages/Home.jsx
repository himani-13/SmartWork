import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

function Home(){

const navigate = useNavigate()

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

{/* HERO SECTION */}

<section className="hero">

<div className="hero-content">

<h1>Hire the Best Developers Worldwide</h1>

<p>
Global Service Marketplace where clients post projects and developers
get matched using our Smart Matching Engine.
</p>

<div className="hero-search">

<input
type="text"
placeholder="Describe the project you want to build..."
/>

<button className="search-btn">
Search
</button>

</div>

<div className="hero-buttons">

<button 
className="btn btn-primary"
onClick={()=>navigate("/post-project")}
>
Post a Project
</button>

<button 
className="btn btn-secondary"
onClick={()=>navigate("/marketplace")}
>
Find Work
</button>

</div>

</div>

</section>


{/* TRUSTED SECTION */}

<section className="section">

<h2>Trusted by companies worldwide</h2>

<div className="categories">

<div className="category-card">Microsoft</div>
<div className="category-card">Amazon</div>
<div className="category-card">Google</div>
<div className="category-card">IBM</div>
<div className="category-card">Cloudflare</div>

</div>

</section>


{/* CATEGORIES */}

<section className="section">

<h2>Find Developers For Every Type of Work</h2>

<div className="categories">

<div className="category-card">AI & Machine Learning</div>
<div className="category-card">Web Development</div>
<div className="category-card">Mobile App Development</div>
<div className="category-card">UI / UX Design</div>
<div className="category-card">Cloud & DevOps</div>
<div className="category-card">Cybersecurity</div>

</div>

</section>


{/* PLATFORM STATS */}

<section className="section">

<h2>Marketplace Growth</h2>

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


{/* HOW IT WORKS */}

<section className="section">

<h2>How It Works</h2>

<div className="cards">

<div className="card">

<h3>1. Post Your Project</h3>

<p>
Clients create projects with required skills,
budget and timeline.
</p>

</div>


<div className="card">

<h3>2. Smart Matching Engine</h3>

<p>
Our system recommends best developers based
on skills and experience.
</p>

</div>


<div className="card">

<h3>3. Hire & Collaborate</h3>

<p>
Clients select developers and complete the
project successfully.
</p>

</div>

</div>

</section>


{/* FEATURES */}

<section className="section">

<h2>Platform Features</h2>

<div className="cards">

<div className="card">

<h3>Developer Profiles</h3>

<p>
Developers showcase their skills,
portfolio and experience.
</p>

</div>


<div className="card">

<h3>Project Marketplace</h3>

<p>
Clients can post projects and developers
can apply easily.
</p>

</div>


<div className="card">

<h3>Smart Developer Matching</h3>

<p>
AI engine recommends best developers
for every project.
</p>

</div>


<div className="card">

<h3>Analytics Dashboard</h3>

<p>
Admins monitor platform activity and
performance metrics.
</p>

</div>

</div>

</section>


{/* CTA */}

<section className="cta">

<h2>Start Your Next Project Today</h2>

<p>
Join SmartWork and connect with developers
around the world.
</p>

<button 
className="btn btn-primary"
onClick={()=>navigate("/post-project")}
>
Get Started
</button>

</section>


{/* FOOTER */}

<footer className="footer">

<div className="footer-grid">

<div>
<h3>SmartWork</h3>
<p>
Global Service Marketplace with smart
developer matching technology.
</p>
</div>

<div>
<h4>Platform</h4>
<p>Marketplace</p>
<p>Post Project</p>
<p>Developers</p>
<p>Analytics</p>
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
© 2026 SmartWork Global Marketplace
</p>

</footer>

</div>

)

}

export default Home