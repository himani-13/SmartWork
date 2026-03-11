import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{padding:"60px"}}>

      <h1>Global Service Marketplace</h1>

      <p style={{maxWidth:"600px"}}>
      Connect with top developers worldwide and build amazing technology
      products faster.
      </p>

      <div style={{marginTop:"20px"}}>

        {/* ⭐ Post Project Link Added */}
        <Link to="/post-project">
          <button style={{
            padding:"12px 20px",
            marginRight:"10px",
            background:"#2563eb",
            color:"white",
            border:"none",
            cursor:"pointer"
          }}>
            Post a Project
          </button>
        </Link>

        {/* Developer Register */}
        <Link to="/developer-register">
          <button style={{
            padding:"12px 20px",
            background:"#16a34a",
            color:"white",
            border:"none",
            cursor: "pointer"
          }}>
            Join as Developer
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;