import { NavLink } from "react-router-dom";
import './style.css'
import { useLocation } from 'react-router-dom';



const ActiveNavLink = ({  text, path,  }) => {

  const location = useLocation();
  const activeStyle= {

      background: '#700511',
      color:'#FAFAFA',
      height: 'auto',
   
      width: '100%'
  }
 

  return (
    <div>
        
            <NavLink
              to={path}
              // style={({ isActive })=>(isActive ? activeStyle : '')} 
              style={location.pathname === path ? activeStyle : {}}
            >
              {text}
            </NavLink>
          
       


      </div>
  );
};

export default ActiveNavLink;

//const StyledLink = styled(NavLink)``;
