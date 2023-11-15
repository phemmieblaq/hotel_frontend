import { NavLink, Link } from "react-router-dom";
import './style.css'
import { useState } from "react";


const ActiveNav = ({  text, path,  }) => {

  const [activeLink, setActiveLink] = useState('./');

  const handleLinkClick = (link) => {
    setActiveLink(link.toLowerCase());
  };


  return (
    <div>
        
            <Link
              to={path}
              className={activeLink === text.toLowerCase() ? 'active' : ''}
              onClick={() => handleLinkClick(text)}
              style={{ textDecoration: 'none'}}
            >
              {text}
            </Link>
          
       


      </div>
  );
};

export default ActiveNav;

//const StyledLink = styled(NavLink)``;
