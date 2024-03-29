"use strict"

export const pesquisarCep = async function(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    
    return{
       municipio: data.localidade, 
       estado: data.uf,
       bairro: data.bairro,
       logradouro: data.logradouro,
       ...data 
    } 
             
 }

