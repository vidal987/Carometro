import React, {Component} from 'react';
import './Header.css';
import '../App.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import senai from '../img/senai.png';
import aluna from '../img/aluna.jpg';
import UserAvatar from 'react-user-avatar';
export class Header extends Component {
 
    render() {
        return (
            <>
           <Navbar className="Navbar" bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src={senai} className="logo" /></Navbar.Brand>
            <span style={{width: 300}}>Gerenciador de Ocorrências</span>           
            <UserAvatar size="48" name="Will Binns-Smith" src="https://avatars1.githubusercontent.com/u/59071836?s=400&u=414c96aedf6f56f0cb215c2b5510b1fd05707b97&v=4" />      
            </Navbar>
            </>
        );
    }
}
