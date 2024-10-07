import { NavLink } from "react-router-dom";
import './style.css'



const ActiveNav = ({  text, path,  }) => {



  const activeStyle= {

      color: '#700511',
      borderBottom: '4px solid #700511',
      width: '100%'
  }
 

  return (
    <div>
        
            <NavLink
              to={path}
              // style={({ isActive })=>(isActive ? activeStyle : '')} 
              style={({ isActive }) => (isActive  ? activeStyle : {})}
            >
              {text}
            </NavLink>
          
       


      </div>
  );
};

export default ActiveNav;

//const StyledLink = styled(NavLink)``;
