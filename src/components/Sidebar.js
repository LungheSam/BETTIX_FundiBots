// src/components/Sidebar.js
import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import "../App.css";

function Sidebar() {
    const navigate = useNavigate();
    const handleExit = () => {
        // Example: Navigate to a logout or goodbye page
        navigate('/goodbye');

        // If you truly want to close the browser tab (only works under specific circumstances):
        // window.close(); 
    };

    return (
        <div style={{padding: '10px', minHeight: '90vh' }} className="sidebar">
            <ul style={{ listStyleType: 'none', padding: 0 }} className='sidebar-nav'>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li> <NavLink to="/remote-control" activeClassName="active">Remote Control</NavLink></li>
                <li><NavLink to="/tracking" activeClassName="active">Tracking</NavLink></li>
                <li className='exit-btn'><button onClick={handleExit} style={{ all:'unset',cursor:'pointer',color:"white"}}>Exit</button></li>
            </ul>
        </div>
    );
}

export default Sidebar;
