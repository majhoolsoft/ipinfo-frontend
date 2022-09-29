import { useState } from "react";
import {
  Navbar,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
const MainNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Navbar dark expand="md" className="px-3">
      <NavbarBrand href="/">IPInfo</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="me-2"></NavbarToggler>
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink className="active" href="#">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <UncontrolledDropdown navinNavbar>
            <DropdownToggle nav caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink disabled>Disabled</NavLink>
          </NavItem>
        </Nav>
        <Nav dark className="ms-auto">
          <NavItem>
            {/* <NavLink href=""> */}
            <Button color="light" className="rounded-circle me-2">
              <i className="fa-solid fa-user" />
            </Button>
            {/* </NavLink> */}
          </NavItem>
          <NavItem>
            {/* <NavLink href=""> */}
            <Button outline color="light" className="rounded-pill">
              <span className="pe-2">Contact Us</span>
              <i className="fa-solid fa-phone-flip" />
            </Button>
            {/* </NavLink> */}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default MainNavbar;
