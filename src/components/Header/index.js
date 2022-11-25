import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiUser } from 'react-icons/bi'
import "./styles.css";

export const Header = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const normalStyle = {
    color: '#201e28e5',
    fontWeight: '500'
  }

  const activeStyle = {
    color: 'var(--heading-color)',
    fontWeight: '700',
    paddingBottom: '2px 5px',
    textDecoration: 'underline',
  }

  const handleStyle = ({ isActive }) => {
    return isActive ? activeStyle : normalStyle;
  }


  return (
    <nav className="navigation">
      <div className="brand-name">
        <NavLink to="/" >
            <img
                src={'/assets/websitelogo.png'}
                alt="websitelogo"
                className="site-logo"
            />
        </NavLink>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
          height={24}
          width={24}
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
            <li>
                <NavLink 
                  to="/"
                  style={handleStyle}
                >
                    The Journey
                </NavLink>
            </li>
            <li>
                <NavLink 
                  to="/store" 
                  style={handleStyle}
                >
                    Store
                </NavLink>
            </li>    
            <li>
                <NavLink 
                  to="/team"
                  style={handleStyle} 
                >
                    Team
                </NavLink>
            </li> 
            <li>
                <NavLink 
                  to="/contact" 
                  style={handleStyle}
                >
                    Contact
                </NavLink>
            </li> 
        </ul>
      </div>
      <div className="logged-user">
        <BiUser className="icon" size={25}/>
        <span>Ankit</span>
      </div>
    </nav>
  );
}