import { Button, TextField } from '@material-ui/core';
import React, { Component, useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/validadesoCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros,validarCampos,possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email,senha});
            }
        }}>
            <TextField 
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
            name="email"
            id="email" label="Email" required type="email" variant="outlined" margin="normal" fullWidth />
            <TextField 
            value={senha}
            onBlur={validarCampos}
            error={erros.senha.valido}
            helperText={erros.senha.texto}
            onChange={(event)=>{
                setSenha(event.target.value)
            }}
            name="senha"
            id="senha" label="Senha" required type="password" variant="outlined" margin="normal" fullWidth />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    )
}

export default DadosUsuario;