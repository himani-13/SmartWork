import { useState } from "react"

function AdminProjects(){

const [projects,setProjects] = useState(() => {
return JSON.parse(localStorage.getItem("projects")) || []
})

const [form,setForm] = useState({
title:"",
skills:"",
budget:"",
country:""
})

const [editIndex,setEditIndex] = useState(null)

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

function handleSubmit(e){
e.preventDefault()

let updatedProjects = [...projects]

if(editIndex !== null){

updatedProjects[editIndex] = form
setEditIndex(null)

}else{

updatedProjects.push(form)

}

setProjects(updatedProjects)

localStorage.setItem("projects", JSON.stringify(updatedProjects))

setForm({
title:"",
skills:"",
budget:"",
country:""
})

}

function handleEdit(index){
setForm(projects[index])
setEditIndex(index)
}

function handleDelete(index){

const updated = projects.filter((_,i)=>i!==index)

setProjects(updated)

localStorage.setItem("projects", JSON.stringify(updated))

}

return(

<div className="admin-page">

<h1>Admin - Projects List</h1>

<div className="admin-layout">

{/* LEFT FORM */}

<div className="admin-form-card">

<h2>{editIndex !== null ? "Edit Project" : "Add Project"}</h2>

<form onSubmit={handleSubmit} className="admin-form">

<input
name="title"
placeholder="Project Title"
value={form.title}
onChange={handleChange}
/>

<input
name="skills"
placeholder="Skills (React,Node)"
value={form.skills}
onChange={handleChange}
/>

<input
name="budget"
placeholder="Budget"
value={form.budget}
onChange={handleChange}
/>

<input
name="country"
placeholder="Country"
value={form.country}
onChange={handleChange}
/>

<button type="submit" className="primary-btn">
{editIndex !== null ? "Update Project" : "Add Project"}
</button>

</form>

</div>


{/* RIGHT TABLE */}

<div className="admin-table-card">

<table className="admin-table">

<thead>
<tr>
<th>Project Title</th>
<th>Skills</th>
<th>Budget</th>
<th>Country</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{projects.length === 0 ? (

<tr>
<td colSpan="5" style={{textAlign:"center"}}>
No Projects Added
</td>
</tr>

) : (

projects.map((proj,i)=>(

<tr key={i}>

<td>{proj.title}</td>

<td>{proj.skills}</td>

<td>{proj.budget}</td>

<td>{proj.country}</td>

<td>

<button
className="edit-btn"
onClick={()=>handleEdit(i)}
>
Edit
</button>

<button
className="delete-btn"
onClick={()=>handleDelete(i)}
>
Delete
</button>

</td>

</tr>

))

)}

</tbody>

</table>

</div>

</div>

</div>

)

}

export default AdminProjects