import React from 'react';

import aluna from '../img/aluna.jpg';
import './Lista.css';

export class Lista extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="grid-container">
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                    <div>
                        <img src={aluna} className="students" />
                        <span>Nome do Aluno</span>
                    </div>
                </div>
            </div>
        );
    }
}
