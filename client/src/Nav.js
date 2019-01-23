import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink className="text-success" href="#" active>Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success" href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success" href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success" href="#">Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}