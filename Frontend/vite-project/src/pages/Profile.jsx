import { useState } from "react";
import "../style.css"

function DeveloperProfileForm(){

const [profile,setProfile] = useState({
name:"",
email:"",
location:"",
primarySkill:"",
secondarySkills:"",
experience:"",
bio:"",
portfolio:"",
github:"",
linkedin:""
});

const handleChange = (e)=>{
setProfile({
...profile,
[e.target.name]:e.target.value
});
};

const handleSubmit=(e)=>{
e.preventDefault();

console.log("Profile Data:",profile);

alert("Profile Saved Successfully");
};

return(

<div className="profile-form-page">

<div className="profile-form-container">

<h1>Create Developer Profile</h1>

<form onSubmit={handleSubmit}>

{/* BASIC INFO */}

<h2>Basic Information</h2>

<input
type="text"
name="name"
placeholder="Full Name"
onChange={handleChange}
required
/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
required
/>

<input
type="text"
name="location"
placeholder="Location / Country"
onChange={handleChange}
/>

{/* SKILLS */}

<h2>Skills</h2>

<input
type="text"
name="primarySkill"
placeholder="Primary Skill (ex: React)"
onChange={handleChange}
/>

<input
type="text"
name="secondarySkills"
placeholder="Secondary Skills (comma separated)"
onChange={handleChange}
/>

{/* EXPERIENCE */}

<h2>Experience</h2>

<input
type="number"
name="experience"
placeholder="Years of Experience"
onChange={handleChange}
/>

{/* BIO */}

<h2>Short Bio</h2>

<textarea
name="bio"
placeholder="Write short bio..."
onChange={handleChange}
/>

{/* PORTFOLIO */}

<h2>Portfolio Links</h2>

<input
type="text"
name="portfolio"
placeholder="Portfolio Website"
onChange={handleChange}
/>

<input
type="text"
name="github"
placeholder="Github Profile"
onChange={handleChange}
/>

<input
type="text"
name="linkedin"
placeholder="LinkedIn Profile"
onChange={handleChange}
/>

<button type="submit">
Save Profile
</button>

</form>

</div>

</div>

);
}

export default DeveloperProfileForm;