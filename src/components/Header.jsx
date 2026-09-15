
function Header({ setMobileOpen }) {
  return (
    <header className="main-header">

      {/* LEFT */}
      <div className="header-left">

        {/* Mobile Menu */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <div className="header-title">
          <span className="header-kicker">
            LUMIÈRE POS
          </span>

          <span className="header-date">
            Monday · 09 September 2026
          </span>
        </div>

      </div>


      {/* RIGHT */}
      <div className="header-right">

        {/* Notification */}
        <button
          className="header-notification"
          aria-label="Notifications"
        >
          ♢
        </button>


        {/* Profile */}
        <div className="header-profile">

          <div className="profile-avatar">
            A
          </div>

          <div className="profile-info">
            <strong>Admin</strong>
            <span>Manager</span>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Header;

