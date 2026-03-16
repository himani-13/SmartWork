import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Projects() {

  const projects = [
    {
      title: "Ecommerce Web Development",
      skills: "React, Node",
      budget: "$5000 - $8000"
    },
    {
      title: "Mobile App Development",
      skills: "Flutter",
      budget: "$3000 - $6000"
    }
  ];

  return (
    <div className="layout">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="project-list">

          {projects.map((p, index) => (

            <div className="project-card" key={index}>

              <h3>{p.title}</h3>

              <p>{p.skills}</p>

              <span>{p.budget}</span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}