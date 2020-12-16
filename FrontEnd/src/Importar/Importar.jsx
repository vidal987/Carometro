import React, { useState } from "react";
import '../App.scss'
import { Link } from 'react-router-dom';
import add from '../img/add.png';
import aluno from '../img/aluno.png';
import list from '../img/list.png';
import turma from '../img/turma.png';
import { Header } from '../Header/Header.js';
import * as XLSX from 'xlsx'; 

function Import() {

  const [items, setItems] = useState([])
    const readExcel = (file) => {
      const promise = new Promise((resolve, reject)=>{
        
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);

        fileReader.onload = (e) => {
          const bufferArray = e.target.result;

          const wb = XLSX.read(bufferArray,{type: 'buffer'});

          const wsname = wb.SheetNames[0];

          const ws = wb.Sheets[wsname];

          const data = XLSX.utils.sheet_to_json(ws);

          resolve(data);

        };
        fileReader.onerror = (error) => {
          reject(error);
        };
        
      });
      
      promise.then((d)=>{
        console.log(d);
        setItems(d)
      });

    };
  

      return (
        <div className="nav-container">
        <Header/>
        <div className="home-container">
          <div className="container-homebtn">
              <input type="file" onChange={(e)=>{
                const file=e.target.files[0];

                readExcel(file);
              }}

              />
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Aluno</th>
                        <th scope="col">Ocorrência</th>
                        <th scope="col">Data</th>
                        <th scope="col">Responsável</th>
                      </tr>
                    </thead>
                    <tbody>
                    {items.map((d)=>(
                      <tr key={d.Item}>
                        <th>{d.Item}</th>
                        <td>{d.Aluno}</td>
                        <td>{d.Ocorrência}</td>
                        <td>{d.Data}</td>
                        <td>{d.Responsável}</td>
                      </tr>
                    ))}
                    </tbody>
                </table>
          </div>
        </div>
        </div>
        );

}
export default Import;