
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("lumiereUser");
    setMobileOpen(false);
    navigate("/login");
  };

  const closeSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      <aside className={`sidebar ${mobileOpen ? "mobile-open" : ""}`}>

        {/* Mobile Close */}
        <button
          className="mobile-close-button"
          onClick={closeSidebar}
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="sidebar-decoration"></div>

        {/* BRAND */}
        <div className="brand">
          <div className="brand-mark">L</div>

          <div>
            <h2>LUMIÈRE</h2>
            <span>HOTEL & RESTAURANT</span>
          </div>
        </div>


        {/* =========================
            OVERVIEW
        ========================= */}

        <div className="side-section">
          <span className="side-label">OVERVIEW</span>

          <NavLink
            to="/dashboard"
            className="side-link"
            onClick={closeSidebar}
          >
            <span>⌂</span>
            Dashboard
          </NavLink>
        </div>


        {/* =========================
            OPERATIONS
        ========================= */}

        <div className="side-section">
          <span className="side-label">OPERATIONS</span>

          <NavLink
            to="/menu"
            className="side-link"
            onClick={closeSidebar}
          >
            <span>◇</span>
            Menu
          </NavLink>

          <NavLink
            to="/orders"
            className="side-link"
            onClick={closeSidebar}
          >
            <span>▤</span>
            Orders
          </NavLink>

          <NavLink
            to="/billing"
            className="side-link"
            onClick={closeSidebar}
          >
            <span>▣</span>
            Billing
          </NavLink>
        </div>


        {/* =========================
            FINANCE
        ========================= */}

        <div className="side-section">
          <span className="side-label">FINANCE</span>

          <NavLink
            to="/payments"
            className="side-link"
            onClick={closeSidebar}
          >
            <span>◇</span>
            Payments
          </NavLink>

          <NavLink
            to="/reports"
            className="side-link"
            onClick={closeSidebar}
          >
            <span>◌</span>
            Reports
          </NavLink>
        </div>


        {/* =========================
            SYSTEM
        ========================= */}

        <div className="side-section">
          <span className="side-label">SYSTEM</span>

          <NavLink
            to="/settings"
            className="side-link"
            onClick={closeSidebar}
          >
            <span>⚙</span>
            Settings
          </NavLink>
        </div>


        {/* LOGOUT */}

        <button
          className="logout-button"
          onClick={logout}
        >
          ↪ &nbsp; Logout
        </button>

      </aside>
    </>
  );
}

export default Sidebar;
