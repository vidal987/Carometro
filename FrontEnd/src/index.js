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
import { Options } from './Options/Options.js';
import { Aluno } from './Aluno/Aluno.js';
import { Login } from './Login/Login.js';
import { Curso } from './Curso/Curso.js';
import { Lista } from './Lista/Lista.js';
import { Ocorrencias } from './Ocorrencias/Ocorrencias.jsx';

ReactDOM.render(
        <BrowserRouter>
             <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/Home" component={Home} />
                <Route path="/Turma" component={Turma} />
                <Route path="/Options" component={Options} />
                <Route path="/CadastrarTurma" component={CadastrarTurma} />
                <Route path="/cadastraraluno" component={cadastraraluno} />
                <Route path="/Cadastrar" component={Cadastrar} />
                <Route path="/Login" component={Login} />
                <Route path="/Aluno" component={Aluno} />
                <Route path="/Curso" component={Curso} />
                <Route path="/Lista" component={Lista} />
                <Route path="/Ocorrencias" component={Ocorrencias} />
            </Switch>
        </ BrowserRouter>
    , document.getElementById('root'));
 

