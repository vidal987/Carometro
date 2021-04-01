import React from "react";
import estilos from './CadastrarAluno.module.css';
import { Link } from 'react-router-dom';
import Dropzone from './Dropzone';
import { Header } from '../Header/Header.js';
import { Fragment } from "react";

export class cadastraraluno extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      email: "",
      telefone: "",
      celular: "",
      data_nascimento: "",
      matricula: "",
      id_turma: "",
      img: "",
      loadingSelect: null,
      optionsSelect: null,
      erroSelect: null,
    };
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  setImg = (img) => {
    this.setState({ img });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const dados = new FormData();
      
      dados.append("nome", this.state.nome);
      dados.append("email", this.state.email);
      dados.append("matricula", this.state.matricula);
      dados.append("telefone", this.state.telefone);
      dados.append("celular", this.state.celular);
      dados.append("data_nascimento", this.state.data_nascimento);
      dados.append("foto", this.state.img.raw);
      dados.append("id_turma", this.state.id_turma);

      const res = await fetch("http://localhost:8000/api/alunos", {
        method: "POST",
        headers: {
          "x-access-token": window.localStorage.getItem("token") || ""
        },
        body: dados
      });

      const json = await res.json();

      if (res.status !== 201) throw new Error(json.mensagem);

      console.log(json.mensagem);
    } catch ({ message }) {
      console.log(message);
    }
  };

  componentDidMount() {
    const carregarSelect = async () => {
      try {
        this.setState({ erroSelect: null, optionsSelect: null, loadingSelect: true });

        const res = await fetch('http://localhost:8000/api/turmas', {
          method: "GET",
          headers: {
            "x-access-token": window.localStorage.getItem("token") || ""
          }
        });

        const json = await res.json();
        console.log(json);

        if (res.status !== 200) throw new Error(json.mensagem);

        const turmasAtiva = json.filter(({ formado }) => !formado);
        const turmaFormatada = turmasAtiva.map(({ id, nome, periodo }) => ({ id, nome, periodo }));

        const optionsSelect = {
          diurno: turmaFormatada.filter(({ periodo }) => periodo === "manhã"),
          vesputino: turmaFormatada.filter(({ periodo }) => periodo === "tarde"),
          noturno: turmaFormatada.filter(({ periodo }) => periodo === "noite"),
        };

        this.setState({ optionsSelect });
      } catch ({ message }) {
        this.setState({ erroSelect: message, optionsSelect: null });
        console.log(message);
      } finally {
        this.setState({ loadingSelect: false });
      }
    };

    carregarSelect();
  }

  render() {
    return (
      <div className="nav-container1">
        <Header />
        <div className={estilos["container-cadastroRe"]}>
          <div className={estilos["top-container1"]}>
            <h1 className={estilos["page-title1"]}>Cadastrar Aluno</h1>
            <Link to="/Cadastrar">
              <button className={estilos["btn-voltar1"]}>Voltar</button>
            </Link>
          </div>
          
          { this.state.optionsSelect && (
            <form className={estilos["form-containerRe"]}
              onSubmit={this.handleSubmit}
              className={estilos["form-containerRe"]}
              >
              <div className={estilos["formRe"]}>
                <label>Nome completo</label>
                
                <input
                className={estilos["input-cadastro-nome"]} 
                type="text" 
                placeholder=" Ex: Gustavo Lazaro Silveira dos Santos"
                name="nome" 
                value={this.state.nome}
                onChange={this.handleChange}
                ></input>
              </div>
              <div className="form-groupRe">
                <div className={estilos["formRe"]}>
                  <label>Turma</label>

                  <select 
                  name="id_turma" 
                  value={this.state.id_turma}
                  onChange={this.handleChange}
                  className={estilos["selectRe"]} 
                  >
                    <option value=""> </option>
                    <optgroup label="Diurno">
                      { this.state.optionsSelect.diurno.map(({ id, nome }) => (
                        <option key={`turma_${id}`} value={id} >{nome}</option>
                      )) }
                    </optgroup>

                    <optgroup label="Vesputino">
                    { this.state.optionsSelect.vesputino.map(({ id, nome }) => (
                        <option key={`turma_${id}`} value={id} >{nome}</option>
                      )) }
                    </optgroup>

                    <optgroup label="Noturno">
                    { this.state.optionsSelect.noturno.map(({ id, nome }) => (
                        <option key={`turma_${id}`} value={id} >{nome}</option>
                      )) }
                    </optgroup>
                  </select>
                </div>
                
                <div className={estilos["formRe"]}>
                  <label>Telefone</label>

                  <input 
                    name="telefone" 
                    value={this.state.telefone}
                    onChange={this.handleChange}
                    className={estilos["input-cadastro"]} 
                    type="text" 
                    accept="*" 
                    placeholder="Ex: 0000-0000"
                  ></input>
                </div>

                <div className={estilos["formRe"]}>
                  <label>E-mail</label>

                  <input 
                    className={estilos["input-cadastro"]} 
                  type="text" 
                  name="email" 
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="Ex: example@example.com"
                ></input>

              </div>

            </div>
            <div className="form-groupRe">
              <div className={estilos["formRe"]}>
                <label>Matricula</label>

                <input 
                  name="matricula" 
                  value={this.state.matricula}
                  onChange={this.handleChange}
                  className={estilos["input-cadastro"]} 
                  type="number" 
                  placeholder="Ex: 0000000001"
                ></input>

              </div>

              <div className={estilos["formRe"]}>
                <label>Celular</label>

                <input 
                  name="celular"
                  value={this.state.celular}
                  onChange={this.handleChange}
                  className={estilos["input-cadastro"]} 
                  type="text" 
                  placeholder="Ex: (000) 00000-0000"
                ></input>

              </div>

              <div className={estilos["formRe"]}>
                <label>Data de Nascimento</label><br></br>

                <input 
                  name="data_nascimento" 
                  value={this.state.data_nascimento}
                  onChange={this.handleChange}
                  className={estilos["input-cadastro"]} 
                  type="date" 
                ></input>

              </div>
            </div>
            <div className={estilos["formRe"]}>
              <label>Foto do Aluno</label>
              <div className={estilos["dzu-dropzone"]}>
              <Dropzone 
                img={this.state.img}
                setImg={this.setImg}
              />
              </div>
            </div>
            <div className={estilos["bot-containerRe"]}>
              <button className={estilos["btn-end1"]}>Finalizar</button>
              <button type="button" className={estilos["btn-add-new1"]}>Adicionar novo</button>
            </div>
            </form>
          )}

        </div>
      </div>
    );
  }
}
