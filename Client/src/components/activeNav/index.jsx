import { NavLink, Link } from "react-router-dom";
import './style.css'
import { useState } from "react";


const ActiveNav = ({text, path}) => {

  const [activeLink, setActiveLink] = useState('./');

  const handleLinkClick = (link) => {
    setActiveLink(link.toLowerCase());
  };


  return (
    <div>
      {/* Define the link properties */}
      <Link 
        to={path} // destination path e.g "/" or "/accomodation"
        className={activeLink === text.toLowerCase() ? 'active' : ''} // if the activelink var is === to the text; i.e click the link, apply css of the class name 'active'
        onClick={() => handleLinkClick(text)} // Make link active
        style={{ textDecoration: 'none'}} // Remove Default styling of links
      > 
        {text} 
      </Link>
    </div>
  );
};

export default ActiveNav;

//const StyledLink = styled(NavLink)``;
