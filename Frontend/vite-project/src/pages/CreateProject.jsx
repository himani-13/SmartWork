import React from "react";

function CreateProject(){

return(

<div className="create-project">

<h2>Create New Project</h2>

<input placeholder="Project Title"/>

<textarea placeholder="Description"></textarea>

<select>
<option>Category</option>
<option>Web Development</option>
<option>Mobile App</option>
</select>

<select>
<option>Urgency</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>

<input placeholder="Expected Duration"/>

<button className="primary-btn">
Continue
</button>

</div>

)

}

export default CreateProject