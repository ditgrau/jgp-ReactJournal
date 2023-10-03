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
        <div className='bg-zinc-900 text-white h-screen flex justify-center items-center'>
          <div className='bg-zinc-800 p-10 rounded-lg flex'>
            <div>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div>
              <TransactionList />
            </div>
          </div>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
