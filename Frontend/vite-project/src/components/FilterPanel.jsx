function FilterPanel(){

return(

<div className="filters">

<input placeholder="Search by skill" />

<select>
<option>Country</option>
<option>USA</option>
<option>India</option>
<option>UK</option>
</select>

<select>
<option>Budget</option>
<option>0 - 1000</option>
<option>1000 - 5000</option>
<option>5000+</option>
</select>

<select>
<option>Urgency</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>
</select>

</div>

)

}

export default FilterPanel