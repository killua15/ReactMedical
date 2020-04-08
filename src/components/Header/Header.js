import React from 'react';
//useState, useEffect



//mport { bindActionCreators } from 'redux';
//import PropTypes from 'prop-types';
// import { useTable, useRowSelect } from 'react-table'
import { Button, Input, message, Checkbox } from 'antd';
import { Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
//const { Option } = Select;
// COMPONENT

function Header() {
    // const [count, setCount] = useState(0);
    // const [getUsuarios, getUsuariosFunc] = useState([]);
    // const [nameValue, setNameValue] = useState('');
    // const [jobValue, setJobValue] = useState('');
    // const [check, setCheckFunc] = useState([]);
    //const [selectionType, setSelectionType] = useState('checkbox');

    // De forma similar a componentDidMount y componentDidUpdate

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >
                    <img
                        alt=""
                        src="./logo512.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <NavLink to='/home' className="marca-text" exact={true}>RPMUsic</NavLink>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <div className="nav-link">
                        <NavLink to='/home' className="link-text" exact={true}>Home</NavLink>
                    </div>
                    <div className="nav-link">
                        <NavLink to='/example1' className="link-text" exact={true}>Example</NavLink>
                    </div>
                    <div className="nav-link">
                        <NavLink to='/example2' className="link-text" exact={true}>Example 2</NavLink>
                    </div>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    );

}
export default Header;