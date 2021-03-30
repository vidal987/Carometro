import React, { useState } from 'react';
import { useFormik } from 'formik';
import './Login.css';
import senai from '../img/senai.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";
import { Formik } from "formik";

const Uri = 'https://app20201221151730.azurewebsites.net/api';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      NI: "",
      senha: "",
      message: props.location ? props.location.message : '',
    };
  }

  signIn = async (event) => {
    event.preventDefault();
    const data = { NI: this.state.NI, senha: this.state.senha };
    const requestInfo = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };


    const fetchLogin = fetch('http://localhost:8000/aut/login', requestInfo);
    fetchLogin.then(response => {
      return response.json();
    })
      .then(dados => {
        if (dados.status === 'Falha') {
          throw new Error(dados.mensagem);
        } else if (dados.auth) {
          localStorage.setItem("token", dados.token);
          this.props.history.push("/Home");
          console.log(dados);
        } else {
          throw new Error("Login inválido....");
        }
      })
      .catch(e => {
        this.setState({ message: e.message });
      });
  }

  render() {

    return (
      <div>
        <div className="image">
          <img src={senai} />
          <div className="header">Login</div>
        </div>
        <Formik
          initialValues={{ NI: '', Senha: '' }}
          validate={values => {
            const errors = {};
            if (!values.NI) {
              errors.NI = 'Informe um número válido';
            } else if (
              !/^[A-Z0-9._%+-]/i.test(values.NI)
            ) {
              errors.NI = 'Número Inválido';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="base-container">
              <input
                type="NI"
                name="NI"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.NI}
                placeholder="NI"
              />
              {errors.NI && touched.NI && errors.NI}
              <br></br>
              <input
                type="password"
                name="senha"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.Senha}
                placeholder="Senha"
              />
              {errors.Senha && touched.Senha && errors.Senha}
              <br></br>
              <button className="button-login" type="submit" disabled={isSubmitting}>
                Entrar
           </button>
              <br></br>
              <Link className="text-link" to="./Aluno">Registre-se</Link>
            </form>
          )}
        </Formik>
      </div>
    );

  }
}
