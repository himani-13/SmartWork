import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";
import Footer from "../components/Footer";

function Home(){

const navigate = useNavigate()

const [projects,setProjects]=useState(0)
const [developers,setDevelopers]=useState(0)
const [clients,setClients]=useState(0)
const [countries,setCountries]=useState(0)

useEffect(()=>{

let p = 0
let d = 0
let c = 0
let co = 0

const interval = setInterval(()=>{

if(p < 500){
p += 5
setProjects(p)
}

if(p >= 150 && d < 200){
d += 3
setDevelopers(d)
}

if(d >= 100 && c < 300){
c += 4
setClients(c)
}

if(c >= 150 && co < 40){
co += 1
setCountries(co)
}

if(p >= 500 && d >= 200 && c >= 300 && co >= 40){
clearInterval(interval)
}

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
<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/ibm.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" />
<img src="https://img.icons8.com/color/96/meta.png"/>

<img src="https://cdn.worldvectorlogo.com/logos/microsoft-5.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" />
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/cloudflare-1.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/ibm.svg" />
<img src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" />
<img src="https://img.icons8.com/color/96/meta.png"/>

</div>

</div>

</section>

{/* PROFESSIONAL CATEGORY */}

<section className="section">

<h2>Find Developers For Every Type of Work</h2>

<div className="category-row">

<div className="category-long">
<img src="https://img.icons8.com/fluency/48/artificial-intelligence.png"/>
<h3>AI & Machine Learning</h3>
<p>Build predictive models, AI automation and data intelligence systems.</p>
</div>

<div className="category-long">
<img src="https://img.icons8.com/fluency/48/source-code.png"/>
<h3>Web Development</h3>
<p>Frontend, backend and full-stack development for modern applications.</p>
</div>

<div className="category-long">
<img src="https://img.icons8.com/fluency/48/android-os.png"/>
<h3>Mobile Apps</h3>
<p>Native and cross-platform mobile apps for Android and iOS.</p>
</div>

<div className="category-long">
<img src="https://img.icons8.com/fluency/48/design.png"/>
<h3>UI / UX Design</h3>
<p>Create modern user experiences with research-driven design.</p>
</div>

<div className="category-long">
<img src="https://img.icons8.com/fluency/48/cloud.png"/>
<h3>Cloud & DevOps</h3>
<p>Infrastructure automation, CI/CD pipelines and scalable deployments.</p>
</div>

<div className="category-long">
<img src="https://img.icons8.com/fluency/48/security-checked.png"/>
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

<section className="features-pro">

<h2>How It Works</h2>

<div className="features-grid">

<div className="feature-pro-card">
<img src="https://img.icons8.com/fluency/96/task.png"/>
<h3>Post Your Project</h3>
<p>Create project listings with skills, timeline and budget. Developers across the world can apply.</p>
</div>

<div className="feature-pro-card">
<img src="https://img.icons8.com/fluency/96/artificial-intelligence.png"/>
<h3>Smart Matching Engine</h3>
<p>AI analyzes developer profiles and automatically suggests the best talent for your project.</p>
</div>

<div className="feature-pro-card">
<img src="https://img.icons8.com/fluency/96/teamwork.png"/>
<h3>Hire & Collaborate</h3>
<p>Select developers and collaborate using secure project tools.</p>
</div>

<div className="feature-pro-card">
<img src="https://img.icons8.com/fluency/96/rocket.png"/>
<h3>Launch Your Product</h3>
<p>Deploy your product and scale your business globally.</p>
</div>

</div>

</section>

{/* PLATFORM FEATURES */}

<section className="features-pro">

<h2>Platform Features</h2>

<div className="features-grid">

<div className="feature-pro-card">
<img src="https://img.icons8.com/fluency/96/verified-account.png"/>
<h3>Verified Developer Profiles</h3>
<p>
Every developer profile on Spartan Tech Marketplace goes through
a verification process including skill validation, portfolio
review and experience checks.</p>

<p>This ensures clients connect with
trusted professionals who deliver high-quality work.
</p>
</div>

<div className="feature-pro-card">
<img src="https://img.icons8.com/fluency/96/online-store.png"/>
<h3>Project Marketplace</h3>
<p>
Our global project marketplace allows companies to post projects,
set budgets and timelines, and receive proposals from skilled
developers around the world.</p>

<p>This creates a competitive ecosystem
that helps clients hire faster and smarter.
</p>
</div>

<div className="feature-pro-card">
<img src="https://img.icons8.com/fluency/96/artificial-intelligence.png"/>
<h3>Smart Developer Matching</h3>
<p>
The intelligent matching system analyzes developer skills,
project requirements, ratings and previous experience to
recommend the most suitable developers automatically,
saving time for both clients and developers.
</p>
</div>

<div className="feature-pro-card">
<img src="https://img.icons8.com/fluency/96/combo-chart.png"/>
<h3>Analytics Dashboard</h3>
<p>
The built-in analytics dashboard helps users track project
performance, hiring trends, developer activity and overall
marketplace insights. These data-driven insights help
businesses make better hiring decisions.
</p>
</div>

</div>

</section>

{/* CTA */}

<section className="cta-modern">

<h2>Build Your Next Product With Top Developers</h2>

<p>
Join thousands of companies using Spartan Tech Marketplace
to hire skilled developers faster and smarter.
</p>

<button
className="cta-start-btn"
onClick={()=>navigate("/signup")}
>

Get Started

</button>

</section>

<Footer/>

</div>

)

}

export default Home