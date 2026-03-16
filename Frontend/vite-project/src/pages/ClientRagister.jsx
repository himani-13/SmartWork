import React from "react";

function ClientRegister(){

return(

<div className="form-container">

<h2>Tell us about yourself</h2>
<p>Step 1 of 2</p>

<input placeholder="Full Name"/>

<input placeholder="Work Email"/>

<input placeholder="Company Name"/>

<select>
<option>Select Country</option>
<option>India</option>
<option>USA</option>
</select>

<select>
<option>Company Size</option>
<option>1-10</option>
<option>10-50</option>
</select>

<select>
<option>Industry</option>
<option>Technology</option>
<option>Ecommerce</option>
</select>

<button className="primary-btn">
Continue
</button>

</div>

)

}

export default ClientRegister