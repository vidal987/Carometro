import React from 'react';
import "../App.scss";
import Avatar from '@material-ui/core/Avatar';

class Navbar extends React.Component {
    state = {  }
    render() {
        return (
            <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                </Navbar.Brand>
                
                <Avatar alt="aluna" src="./img/aluna.jpg" />

            </Navbar>
            </>
        );
    }
}

export default Navbar;


