import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './global';
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement("#root"); //Esse uso é único para acessibilidade.

export function App() {

  const[ isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);


  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true); 
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false); 
  }

  return (
    <TransactionProvider>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

     <Dashboard />

     <NewTransactionModal 
     isOpen={isNewTransactionModalOpen} 
     onRequestClose={handleCloseNewTransactionModal} />

     <GlobalStyle />
    </TransactionProvider>
  );
}
