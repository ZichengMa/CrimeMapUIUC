import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/insert" activeStyle>
            insert
          </NavLink>
          <NavLink to="/delete" activeStyle>
            delete
          </NavLink>
          <NavLink to="/search" activeStyle>
            search
          </NavLink>
          <NavLink to="/update" activeStyle>
            update
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;