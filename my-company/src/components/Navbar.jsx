import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: 'f0f0f0',
      padding: '2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <ul style={{
        display: 'flex',
        justifyContent: 'center',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0,
      }}>
        {['Home', 'About', 'Services', 'Contact'].map((page) => (
          <li key={page}>
            <NavLink 
              to={`/${page.toLowerCase()}`}
              style={({ isActive }) => ({
                color: isActive ? '#f39c12' : 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                transition: 'color 0.3s',
                ':hover': {
                  color: '#f39c12'
                }
              })}
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;