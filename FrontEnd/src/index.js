import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Home/Home.js';
import { Start } from './Start/Start.js';
import { Turma } from './Turma/Turma.js';
import { Options } from './Options/Options';
import { Aluno } from './Aluno/Aluno.js';
import { Login } from './Login/Login.js';
import { Curso } from './Curso/Curso.js';
import { Lista } from './Lista/Lista.js';

ReactDOM.render(
        <BrowserRouter>
             <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/Home" component={Home} />
                <Route path="/Start" component={Start} />
                <Route path="/Turma" component={Turma} />
                <Route path="/Options" component={Options} />
                <Route path="/Login" component={Login} />
                <Route path="/Aluno" component={Aluno} />
                <Route path="/Curso" component={Curso} />
                <Route path="/Lista" component={Lista} />
            </Switch>
        </ BrowserRouter>
    , document.getElementById('root'));
 

