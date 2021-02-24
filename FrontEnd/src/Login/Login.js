import React, {useState} from 'react';
import { useFormik } from 'formik';
import './Login.css'; 
import senai from '../img/senai.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useHistory} from "react-router";
import jwt_decode from "jwt-decode";

//Este é o package do qual mencionei que auxilia na criação de formulários
import { Formik } from "formik";

//Notem que aqui temos o código que vai buscar os dados na API 
const Uri = 'https://app20201221151730.azurewebsites.net/api';

export default function Login(props) {
  let history = useHistory();
  let [setAuth] = useState([]);
    useFormik({
    initialValues: { NI: "", Senha: "" },
    validate: values => {
      let errors = {}
      if(!values.NI){
        errors.NI = 'Informe um número válido';
      } else if(!/^[A-Z0-9._%+-]/i.test(values.NI)) {
        errors.NI = 'Número Inválido';
      } 
      if(!values.Senha) {
        errors.Senha = "Required"
      }
      return errors
    },
    onSubmit: async values => {
     try{
      const result = await axios({
        method: "POST",
        url: `${Uri}/Authenticate/login`,
        data: values
      })
      localStorage.setItem('authToken', result.data.token);
      setAuth(result.data.token)
      var decoded = jwt_decode(result.data.token)  
      console.log(decoded);
     result.data.data.role === "admin" ? history.push('/admin-panel-user') : history.push('/')
     } catch(error) {
      console.log(error)
     }
    }
  });

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
           <button type="submit" disabled={isSubmitting}>
             Entrar
           </button>
           <br></br>
           <Link className="text-link" to="/Aluno">Registre-se</Link>
         </form>
       )}
     </Formik>
   </div>
 );
 
}
