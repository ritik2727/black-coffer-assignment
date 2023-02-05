export const Sidebar = () => {
  return (
    <nav
      id="sidebar"
      className="col-md-3 col-lg-2 d-md-block sidebar collapse"
      style={{
        backgroundColor: "rgb(34 43 69)",
        borderBottom: "#F037A5",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
      }}
    >
      <div className="position-sticky pt-md-5">
        <ul className="nav flex-column">
          <li className="nav-item" style={{ color: "white" }}>
            <a className="nav-link active" aria-current="page" href="#" style={{color:'white'}}>
              <span className="ml-2">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              <span className="ml-2" style={{ color: "white" }}>
                Intensity
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              <span className="ml-2">Likelihood</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: "white" }}>
              <span className="ml-2">Relevance</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
