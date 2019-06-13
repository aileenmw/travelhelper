import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">PracTravel</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/aileenmw/weather-app" target="_blank">GitHub</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Other Projects
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="http://amw.nu/portfolio/index.php" target="_blank">
                                        Portfolio
                  </DropdownItem>
                                    <DropdownItem href="http://amw.nu/projects/motionscenter/index.php" target="_blank">
                                        Motionscenter
                  </DropdownItem>
                                    <DropdownItem href="http://amw.nu/fine_woodworking/index.php?page=front" target="_blank">
                                        Fine Woodworking
                                        </DropdownItem>
                                    <DropdownItem href="http://amw.nu/projects/cms/index.php" target="_blank">
                                        Travellife
                  </DropdownItem>
                                    <DropdownItem href="http://amw.nu/vintage_vinyl/index.php" target="_blank">
                                        Vintage Vinyl

                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}