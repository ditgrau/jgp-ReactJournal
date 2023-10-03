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
        <div className='bg-zinc-900 text-white h-screen flex flex-col justify-center items-center'>
          <Header />
          <div className='bg-zinc-800 p-10 rounded-lg flex-col grid gap-5'>
            <Balance />
            <div className='flex flex-row gap-5'>
              <div>
                <TransactionForm />
                <IncomeExpenses />
              </div>
              <div>
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
