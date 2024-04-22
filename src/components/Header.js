import React, { useState, useEffect } from 'react';
import '../App.css';
import { MdMenu } from 'react-icons/md';

function Header() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update the time every second

        return () => clearInterval(timerId); // Clean up the interval on component unmount
    }, []);

    return (
        <header className='header'>
            {/* <h1 className='header-title'>Robot Control Dashboard</h1> */}
            <div className="menu-icon">
                <MdMenu size={28} />
            </div>
            <h1 className='header-time'>
                {currentTime.toLocaleTimeString()} 
                {/* - {currentTime.toLocaleDateString()} */}
            </h1>
            <div style={{ clear: 'both' }}></div> {/* This clears the float */}
        </header>
    );
}
export default Header;
