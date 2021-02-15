import React, { useState, useContext } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/validadesoCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({aoEnviar}) {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState("");
    const [novidades, setNovidades] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros,validarCampos,possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if(possoEnviar()){
                aoEnviar({nome,sobrenome,cpf,promocoes,novidades})
                }
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.text}
                id="nome"
                name="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal" />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}
                name="sobrenome"
                id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                onBlur={validarCampos}
                name="cpf"
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />

            <FormControlLabel
                label="Promoções"
                control={<Switch
                    checked={promocoes}
                    onChange={
                        (event) => {
                            setPromocoes(event.target.checked)
                        }
                    }
                    name="promocoes" color="primary" />} />

            <FormControlLabel
                label="Novidades"
                control={<Switch
                    checked={novidades}
                    onChange={
                        (event) => {
                            setNovidades(event.target.checked)
                        }
                    }
                    name="novidades" color="primary" />} />

            <Button variant="contained" color="primary" type="submit">
                Próximo
            </Button>
        </form>
    )
}

export default DadosPessoais;