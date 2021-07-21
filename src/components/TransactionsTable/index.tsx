import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styles";


export function TransactionsTable(){
    const {transactions} = useTransaction();

    return(
        <Container>
            <table>

                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>

                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                            {new Intl.NumberFormat('pt-BR',{
                                style: 'currency', //avisa pra formatar em moeda
                                currency: 'BRL' //moeda reaç
                            }).format(transaction.amount)}
                        </td>
                        <td>{transaction.category}</td>
                        <td>
                            {new Intl.DateTimeFormat('pt-BR').format(transaction.amount)}
                        </td>
                    </tr>
                    ))}
                    

                    
                </tbody>
            </table>
        </Container>
    );
}