import { useState } from "react"
import "../style.css";

function Profile(){

const [form,setForm] = useState({
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
})

function handleChange(e){
setForm({
...form,
[e.target.name]:e.target.value
})
}

function handleSubmit(e){
e.preventDefault()
console.log(form)
alert("Profile Saved")
}

return(

<div className="profilePage">

<div className="profileContainer">

<h1 className="profileTitle">Developer Profile</h1>

<form onSubmit={handleSubmit}>

{/* PROFILE HEADER */}

<div className="profileHeader">

<div className="profilePhoto">
<img src="https://randomuser.me/api/portraits/men/32.jpg"/>
<button type="button">Upload Photo</button>
</div>

<div className="profileHeaderInfo">

<div className="formGroup">
<label>Full Name</label>
<input type="text" name="name" onChange={handleChange}/>
</div>

<div className="formGroup">
<label>Email</label>
<input type="email" name="email" onChange={handleChange}/>
</div>

</div>

</div>


{/* BASIC INFO */}

<div className="profileSection">

<h2>Basic Information</h2>

<div className="grid2">

<div className="formGroup">
<label>Location</label>
<input type="text" name="location" onChange={handleChange}/>
</div>

<div className="formGroup">
<label>Experience (Years)</label>
<input type="number" name="experience" onChange={handleChange}/>
</div>

</div>

</div>


{/* SKILLS */}

<div className="profileSection">

<h2>Skills</h2>

<div className="grid2">

<div className="formGroup">
<label>Primary Skill</label>
<input type="text" name="primarySkill" onChange={handleChange}/>
</div>

<div className="formGroup">
<label>Secondary Skills</label>
<input type="text" name="secondarySkills" onChange={handleChange}/>
</div>

</div>

</div>


{/* BIO */}

<div className="profileSection">

<h2>About Developer</h2>

<textarea
name="bio"
placeholder="Write about your experience..."
onChange={handleChange}
/>

</div>


{/* PORTFOLIO */}

<div className="profileSection">

<h2>Portfolio Links</h2>

<div className="grid3">

<input type="text" name="portfolio" placeholder="Portfolio Website" onChange={handleChange}/>
<input type="text" name="github" placeholder="Github Profile" onChange={handleChange}/>
<input type="text" name="linkedin" placeholder="LinkedIn Profile" onChange={handleChange}/>

</div>

</div>

<button className="saveProfileBtn">Save Profile</button>

</form>

</div>

</div>

)

}

export default Profile