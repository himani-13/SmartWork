import { useState } from "react"

function AdminUsers(){

const [developers,setDevelopers] = useState(() => {
return JSON.parse(localStorage.getItem("users")) || []
})

const [form,setForm] = useState({
name:"",
email:"",
country:"",
skill:""
})

const [editIndex,setEditIndex] = useState(null)

function handleChange(e){
setForm({...form,[e.target.name]:e.target.value})
}

function handleSubmit(e){
e.preventDefault()

let updatedDevelopers = [...developers]

if(editIndex !== null){

updatedDevelopers[editIndex] = form
setEditIndex(null)

}else{

updatedDevelopers.push(form)

}

setDevelopers(updatedDevelopers)

localStorage.setItem("users", JSON.stringify(updatedDevelopers))

setForm({
name:"",
email:"",
country:"",
skill:""
})

}

function handleEdit(index){
setForm(developers[index])
setEditIndex(index)
}

function handleDelete(index){

const updated = developers.filter((_,i)=>i!==index)

setDevelopers(updated)

localStorage.setItem("users", JSON.stringify(updated))

}

return(

<div className="admin-page">

<h1>Admin - Users Management</h1>

<div className="admin-layout">

{/* LEFT FORM */}

<div className="admin-form-card">

<h2>{editIndex !== null ? "Edit Developer" : "Add Developer"}</h2>

<form onSubmit={handleSubmit} className="admin-form">

<input
name="name"
placeholder="Full Name"
value={form.name}
onChange={handleChange}
/>

<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
/>

<input
name="country"
placeholder="Country"
value={form.country}
onChange={handleChange}
/>

<input
name="skill"
placeholder="Primary Skill"
value={form.skill}
onChange={handleChange}
/>

<button type="submit" className="primary-btn">
{editIndex !== null ? "Update User" : "Add User"}
</button>

</form>

</div>


{/* RIGHT TABLE */}

<div className="admin-table-card">

<table className="admin-table">

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Country</th>
<th>Skill</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{developers.length === 0 ? (

<tr>
<td colSpan="5" style={{textAlign:"center"}}>
No Developers Registered
</td>
</tr>

) : (

developers.map((dev,i)=>(

<tr key={i}>

<td>{dev.name}</td>

<td>{dev.email}</td>

<td>{dev.country}</td>

<td>{dev.skill}</td>

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

export default AdminUsers