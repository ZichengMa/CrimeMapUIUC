import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/insert" activeStyle>
            Register
          </NavLink>
          <NavLink to="/signin" activeStyle>
            SignIn
          </NavLink>
          <NavLink to="/delete" activeStyle>
            Delete User
          </NavLink>
          <NavLink to="/search" activeStyle>
            Search
          </NavLink>
          <NavLink to="/update" activeStyle>
            Update Crime Description
          </NavLink>
          <NavLink to="/ReportCrime" activeStyle>
            Report Crime
          </NavLink>
          <NavLink to="/map" activeStyle>
            Crime Map
          </NavLink>
          <NavLink to="/streetboard" activeStyle>
            StreetBoard
          </NavLink>
          <NavLink to="/advanced1" activeStyle>
            Check two streets' crimes
          </NavLink>
          <NavLink to="/advanced2" activeStyle>
            Check most dangerous streets
          </NavLink>
          <NavLink to="/weeklyreport" activeStyle>
            WeeklyReport
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;