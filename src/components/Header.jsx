function Header() {
  return (
    <header className="main-header">

      <div className="header-left">
        <span className="header-kicker">LUMIÈRE POS</span>

        <span className="header-date">
          Monday · 09 September 2026
        </span>
      </div>

      <div className="header-right">

        <button className="header-notification">
          ♢
        </button>

        <div className="header-profile">
          <div className="profile-avatar">A</div>

          <div>
            <strong>Admin</strong>
            <span>Manager</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Header;