import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Cadastro from './Cadastro';
import Turmas from './Turmas';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Cadastrar } from './components/Cadastrar/Cadastrar';
import { CadastrarTurma } from './components/Cadastrar/CadastrarTurma';
import { CadastrarCurso } from './components/Cadastrar/CadastrarCurso';
import { Formandos } from './components/Alunos/Formandos';
import { Ocorrencias } from './components/Ocorrencias/Ocorrencias';

ReactDOM.render(
        <BrowserRouter>
             <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/turmas" component={Turmas} />
                <Route path="/Home" component={Home} />
                <Route path="/Cadastrar" component={Cadastrar} />
                <Route path="/CadastrarTurma" component={CadastrarTurma} />
                <Route path="/CadastrarCurso" component={CadastrarCurso} />
                <Route path="/Formandos" component={Formandos} />
                <Route path="/Ocorrencias" component={Ocorrencias} />
            </Switch>
        </ BrowserRouter>
    , document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
