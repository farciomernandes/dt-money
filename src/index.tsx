import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({ //Cria uma api fake para testar a aplicaçao
  
  models: { //Avisa que quer usar um banco de dados fake
    transition: Model, //avisa que existe a tabela 'transaction' fake
  },

  routes(){
    this.namespace = 'api';  //ele pega todas as requisições que vinherem de /api
    
    this.get('/transactions', ()=>{
      return this.schema.all('transaction'); //retorna tudo desse banco de dados fake
    })

    this.post('/transactions',(schema, request)=>{
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data); //cria uma tabela fake na api fake
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

