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
            Sign In
          </NavLink>
          <NavLink to="/delete" activeStyle>
            Delete
          </NavLink>
          <NavLink to="/search" activeStyle>
            Search
          </NavLink>
          <NavLink to="/update" activeStyle>
            Update
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
            Advanced1
          </NavLink>
          <NavLink to="/advanced2" activeStyle>
            Advanced2
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