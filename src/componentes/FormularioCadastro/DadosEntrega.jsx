import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({aoEnviar, validacoes}) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    const [erros,setErros] = useState({cpf:{valido:true,texto:""}})

    function validarCampos(event) {
        const {name,value} = event.target
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value)
        setErros(novoEstado)
    }

    return(
        <form onSubmit={
            (event)=>{
                event.preventDefault();
                aoEnviar({cep,endereco,numero,estado,cidade})
            }
        }>
            <TextField
            value={cep}
            onChange={(event)=>{
                setCep(event.target.value);
            }}
            name="cep"
            id="cep" label="CEP" type="number" variant="outlined" margin="normal" fullWidth />
            <TextField 
            value={endereco}
            onChange={(event)=>{
                setEndereco(event.target.value);
            }}
            name="endereco"
            id="endereco" label="Endereço" type="text" variant="outlined" margin="normal" fullWidth />
            <TextField 
            value={numero}
            onChange={(event)=>{
                setNumero(event.target.value);
            }}
            name="numero"
            id="numero" label="Número" type="number" variant="outlined" margin="normal" fullWidth />
            <TextField 
            value={estado}
            onChange={(event)=>{
                setEstado(event.target.value);
            }}
            name="estado"
            id="estado" label="Estado" type="text" variant="outlined" margin="normal" fullWidth />
            <TextField 
            value={cidade}
            onChange={(event)=>{
                setCidade(event.target.value);
            }}
            name="cidade"
            id="cidade" label="Cidade" type="text" variant="outlined" margin="normal" fullWidth />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}

export default DadosEntrega;