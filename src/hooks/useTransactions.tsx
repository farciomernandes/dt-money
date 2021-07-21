import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction{
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
    type: string;
}

interface TransactionInput{
    title: string;
    amount: number;
    category: string;
    type: string;
}

interface TransactionsProviderProps{
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: Transaction[];
    createTransactions: (transactionInput: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    },[])

    const createTransactions = useCallback(async (transactionInput: TransactionInput) => {
        const response = await api.post('/transactions', {
          ...transactionInput,
          createdAt: new Date()
        })
    
        setTransactions([
          ...transactions,
          response.data.transactions
        ]);
      }, [transactions]);
    

    return(
        <TransactionsContext.Provider value={{ transactions, createTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransaction(){
    const context = useContext(TransactionsContext);

    return context;
}