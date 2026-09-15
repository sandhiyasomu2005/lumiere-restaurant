import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("lumiereUser");
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-decoration"></div>

      <div className="brand">
        <div className="brand-mark">L</div>

        <div>
          <h2>LUMIÈRE</h2>
          <span>HOTEL & RESTAURANT</span>
        </div>
      </div>

      <div className="side-section">
        <span className="side-label">OVERVIEW</span>

        <NavLink to="/dashboard" className="side-link">
          <span>⌂</span>
          Dashboard
        </NavLink>
      </div>

      <div className="side-section">
        <span className="side-label">OPERATIONS</span>

        <NavLink to="/menu" className="side-link">
          <span>◇</span>
          Menu
        </NavLink>

        <NavLink to="/orders" className="side-link">
          <span>▤</span>
          Orders
        </NavLink>

        <NavLink to="/billing" className="side-link">
          <span>▣</span>
          Billing
        </NavLink>
      </div>

      <div className="side-section">
        <span className="side-label">FINANCE</span>

        <NavLink to="/payments" className="side-link">
          <span>◇</span>
          Payments
        </NavLink>

        <NavLink to="/reports" className="side-link">
          <span>◌</span>
          Reports
        </NavLink>
      </div>

      <div className="side-section">
        <span className="side-label">SYSTEM</span>

        <NavLink to="/settings" className="side-link">
          <span>⚙</span>
          Settings
        </NavLink>
      </div>

      <button className="logout-button" onClick={logout}>
        ↪ &nbsp; Logout
      </button>

    </aside>
  );
}

export default Sidebar;