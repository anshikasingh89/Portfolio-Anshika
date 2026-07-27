const Navbar = ({ activePage, setActivePage }) => {
  const navItems = [
    "About",
    "Resume",
    "Portfolio",
    "Certifications",
    "Contact",
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item}>
            <button
              className={`navbar-link ${
                activePage === item ? "active" : ""
              }`}
              onClick={() => setActivePage(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
