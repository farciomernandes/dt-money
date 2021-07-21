import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({ //Cria uma api fake para testar a aplicaçao
  
  models: { //Avisa que quer usar um banco de dados fake
    transactions: Model, //avisa que existe a tabela 'transaction' fake
  },

  seeds(server){
    server.db.loadData({ //Avisa para iniciar o banco de dados fakes com esse valor
      transactions: [ //tabela que deve adicionar
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';  //ele pega todas as requisições que vinherem de /api
    
    this.get('/transactions', ()=>{
      return this.schema.all('transactions'); //retorna tudo desse banco de dados fake
    })

    this.post('/transactions',(schema, request)=>{
      const data = JSON.parse(request.requestBody);

      return schema.create('transactions', data); //cria uma tabela fake na api fake
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

