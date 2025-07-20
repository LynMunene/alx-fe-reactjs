import { Link } from "react-router-dom";

function Navbar(){
    return (
     <>
       {/* Navigation Bar */}
       <nav style={{
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            }}>
        <ul style={{
                display: 'flex',
                justifyContent: 'center',
                listStyle: 'none',
                gap: '2rem',
                margin: 0,
                padding: 0,
            }}>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
        </ul>
        </nav>
    </>

    )
    
}
export default Navbar;