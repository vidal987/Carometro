import React, {Component} from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import senai from '../img/senai.png';
import aluna from '../img/aluna.jpg';
import UserAvatar from 'react-user-avatar';

export class Header extends Component {
 
    render() {
        return (
            <>
           <Navbar className="Navbar" bg="light" expand="lg">
                <Navbar.Brand href="/"><img src={senai} className="logo" /></Navbar.Brand>
                <span style={{width: 300}}>Gerenciador de Ocorrências</span> 
                <li class="nav-item dropdown">
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Recursos
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/Importar">Importar Arquivos</Dropdown.Item>
                            <Dropdown.Item href="/Relatórios">Relatórios</Dropdown.Item>
                            <Dropdown.Item href="/Curso">Curso</Dropdown.Item>
                            <Dropdown.Item href="/Ocorrencias">Ocorrências</Dropdown.Item>
                            <Dropdown.Item href="/Formandos">Frequência</Dropdown.Item>
                            <Dropdown.Item href="/Periodo">Período Letivo</Dropdown.Item>
                            <Dropdown.Item href="/Historico">Histórico de Turmas</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>    
                <UserAvatar size="48" name="Will Binns-Smith" src="http://placeimg.com/80/80/people" />      
            </Navbar>
            </>
        );
    }
}
