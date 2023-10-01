import { GlobalProvider } from './context/GlobalState'

import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/transactionList'
import IncomeExpenses from './components/transactions/IncomeExpenses'


function App() {

  return (
    <>
      <GlobalProvider>
        <Header />
        <IncomeExpenses />
        <Balance />
        <TransactionForm />
        <TransactionList />
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </GlobalProvider>
    </>
  )
}

export default App
