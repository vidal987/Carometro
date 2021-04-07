import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Home/Home.js';
import Turma from './Turma/Turma.js';
import { cadastraraluno } from './Cadastraraluno/cadastraraluno.js';
import { CadastrarTurma } from './CadastrarTurma/CadastrarTurma.js';
import { Cadastrar } from './Cadastrar/Cadastrar.js';
import { Aluno } from './Aluno/Aluno.js';
import Login from './Login/Login.js';
import { Curso } from './Curso/Curso.js';
import Lista from './Lista/Lista.js';
import { Formandos } from './Formandos/Formandos.js';
import { Ocorrencias } from './Ocorrencias/Ocorrencias.jsx';
import { NovaOcorrencia } from './Ocorrencias/NovaOcorrencia';
import Import from './Importar/Importar.jsx';
import { Usuarios }  from './Usuarios/Usuarios';

ReactDOM.render(
        <BrowserRouter>
             <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/Home" exact={true} component={Home} />
                <Route path="/Turma/:id" exact={true} component={Lista} />
                <Route path="/Turma" exact={true} component={Turma} />
                <Route path="/CadastrarTurma" exact={true} component={CadastrarTurma} />
                <Route path="/cadastraraluno" exact={true} component={cadastraraluno} />
                <Route path="/Cadastrar" exact={true} component={Cadastrar} />
                <Route path="/Login" exact={true} component={Login} />
                <Route path="/Aluno" exact={true} component={Aluno} />
                <Route path="/Curso" exact={true} component={Curso} />
                <Route path="/Lista" exact={true} component={Lista} />
                <Route path="/Formandos/:id" exact={true} component={Lista} />
                <Route path="/Formandos" exact={true} component={Turma} />
                <Route path="/Ocorrencias" exact={true} component={Ocorrencias} />
                <Route path="/NovaOcorrencia" exact={true} component={NovaOcorrencia} />
                <Route path="/Importar" exact={true} component={Import} />
                <Route path="/Usuarios" exact={true} component={Usuarios} />
            </Switch>
        </ BrowserRouter>
    , document.getElementById('root'));
 

