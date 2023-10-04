import { GlobalProvider } from './context/GlobalState'

import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/transactionList'
import IncomeExpenses from './components/transactions/IncomeExpenses'
import ExpenseChart from './components/ExpenseChart'


function App() {

  return (
    <>
      <GlobalProvider>
        <div className='bg-zinc-900 text-white h-screen flex flex-col justify-center items-center'>
          <div className='bg-zinc-800 p-10 rounded-lg flex-col grid gap-5'>
            <Balance />
            <div className='flex flex-row gap-5'>
              <div>
                <TransactionForm />
                <IncomeExpenses />
              </div>
              <div className='container w-9/12 flex flex-col'>
                <ExpenseChart />
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
