import React from 'react';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";


class NavBar extends React.Component {

    render(){

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ marginBottom: 19 }} className="BoxShadow">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" style={{ color: "#ED5145", fontSize: 22, fontWeight: "600"}}>Sk8 Park Finder</Nav.Link>
                        </Link>
                    </Nav>
                        { this.props.auth.isAuthenticated ? 
                    <Nav className="ml-auto">
                        <Navbar.Text style={{ color:"#ED5145", fontWeight: "600" }}>
                            Signed in as:
                        </Navbar.Text>
                        <NavDropdown title={<span style={{ color:"#ED5145", fontWeight: "600" }}>{this.props.auth.user.name}</span>} id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/new">Add Spot</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Nav.Item className="NavLinks" style={{ color:"#000000", paddingTop: 8}} onClick={()=>this.props.logoutUser()}>Log Out</Nav.Item>   
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                        :
                    <Nav className="ml-auto">
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Nav.Item className="NavLinks" style={{ color:"#000000", paddingTop: 8  }}>Log In</Nav.Item>   
                        </Link>
                    </Nav>
                        }
                </Navbar.Collapse>
            </Navbar>
        );

    }
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(NavBar);