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

let interval=setInterval(()=>{

setProjects(prev => prev < 500 ? prev + 10 : 500)
setDevelopers(prev => prev < 200 ? prev + 5 : 200)
setClients(prev => prev < 300 ? prev + 6 : 300)
setCountries(prev => prev < 40 ? prev + 1 : 40)

},30)

return ()=>clearInterval(interval)

},[])

return(

<div>

{/* HERO */}

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


{/* TRUSTED COMPANIES */}

<section className="trusted-section">

<h2>Trusted by companies worldwide</h2>

<div className="logo-marquee">

<div className="logo-track">

<img src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/google-icon.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/amazon-icon.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/ibm.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/meta-1.svg" />

{/* duplicate for infinite scroll */}

<img src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/google-icon.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/amazon-icon.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/ibm.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/meta-1.svg" />

</div>

</div>

</section>


{/* CATEGORIES */}

<section className="section">

<h2>Find Developers For Every Type of Work</h2>

<div className="category-row">

<div className="category-long">
<h3>AI & Machine Learning</h3>
<p>Build predictive models, AI automation and data intelligence systems.</p>
</div>

<div className="category-long">
<h3>Web Development</h3>
<p>Frontend, backend and full-stack development for modern applications.</p>
</div>

<div className="category-long">
<h3>Mobile Apps</h3>
<p>Native and cross-platform mobile apps for Android and iOS.</p>
</div>

<div className="category-long">
<h3>UI / UX Design</h3>
<p>Create modern user experiences with research-driven design.</p>
</div>

<div className="category-long">
<h3>Cloud & DevOps</h3>
<p>Infrastructure automation, CI/CD pipelines and scalable deployments.</p>
</div>

<div className="category-long">
<h3>Cybersecurity</h3>
<p>Security audits, penetration testing and threat monitoring.</p>
</div>

</div>

</section>


{/* MARKETPLACE GROWTH */}

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

<section className="how-section">

<h2>How It Works</h2>

<img
className="how-image"
src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
/>

<div className="cards">

<div className="card">

<h3>1. Post Your Project</h3>

<p>
Create projects with required skills, budget and timeline.
</p>

<ul>
<li>Define project scope</li>
<li>Set milestones and budget</li>
</ul>

</div>

<div className="card">

<h3>2. Smart Matching Engine</h3>

<p>
Our AI system recommends developers based on skill match.
</p>

<ul>
<li>Skill based recommendation</li>
<li>Experience ranking</li>
</ul>

</div>

<div className="card">

<h3>3. Hire & Collaborate</h3>

<p>
Select developers and collaborate until the project is finished.
</p>

<ul>
<li>Secure communication</li>
<li>Milestone payments</li>
</ul>

</div>

</div>

</section>


{/* PLATFORM FEATURES */}

<section className="section">

<h2>Platform Features</h2>

<div className="cards">

<div className="feature-card">

<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>

<h3>Developer Profiles</h3>

<p>
Professional portfolios with verified skills and experience.
</p>

</div>

<div className="feature-card">

<img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"/>

<h3>Project Marketplace</h3>

<p>
Clients post projects and developers apply instantly.
</p>

</div>

<div className="feature-card">

<img src="https://cdn-icons-png.flaticon.com/512/4149/4149675.png"/>

<h3>Smart Developer Matching</h3>

<p>
AI recommends best developers for every project.
</p>

</div>

<div className="feature-card">

<img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"/>

<h3>Analytics Dashboard</h3>

<p>
Admins monitor platform activity and performance.
</p>

</div>

</div>

</section>


{/* CTA */}

<section className="cta-modern">

<h2>Start Your Next Project Today</h2>

<p>
Join SmartWork and connect with developers around the world.
</p>

<div className="cta-buttons">

<button 
className="btn btn-primary"
onClick={()=>navigate("/post-project")}
>
Post Project
</button>

<button 
className="btn btn-secondary"
onClick={()=>navigate("/marketplace")}
>
Explore Marketplace
</button>

</div>

</section>

</div>

)

}

export default Home