import React from 'react';
import './App.css';
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@material-ui/core'
import 'fontsource-roboto';
import ValidacoesCadastro from './contexts/validadesoCadastro';
import { validarCPF, validarSenha } from './models/cadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider
      value={{cpf:validarCPF,senha:validarSenha,nome:validarSenha}}>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
