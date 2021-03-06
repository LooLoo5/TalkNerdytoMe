import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


function Navbar() {
  return (
    <div className="container">
      <Nav tabs>
        <NavItem>
          <NavLink href="/" className="text-primary">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about" className="text-primary">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/map" className="text-primary">Map</NavLink>
        </NavItem>
      </Nav>
    </div>
  );


}

export default Navbar;