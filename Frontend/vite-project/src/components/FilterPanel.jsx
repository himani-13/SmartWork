function FilterPanel({setSkill,setCountry}){

return(

<div className="filters">

<h3>Filters</h3>

<label>Skill</label>

<select onChange={(e)=>setSkill(e.target.value)}>

<option value="">All</option>
<option value="React">React</option>
<option value="Node">Node</option>
<option value="Python">Python</option>

</select>

<label>Country</label>

<select onChange={(e)=>setCountry(e.target.value)}>

<option value="">All</option>
<option value="USA">USA</option>
<option value="UK">UK</option>
<option value="India">India</option>

</select>

</div>

)

}

export default FilterPanel