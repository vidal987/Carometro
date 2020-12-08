import React from "react";
import { Link } from 'react-router-dom';
import student from "../../img/student.jpg";

export class Ocorrencias extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="home-container">
          <div className="container-homebtn">
              <div className="home-buttons">
                  <button className="home-btn">
                    <img src={student} className="home-icon" />
                    <Link to="/Cadastrar"></Link>
                  </button>
                  <span className="span-home">Cadastrar</span>
              </div>
          </div>
        </div>
        );
    }
}