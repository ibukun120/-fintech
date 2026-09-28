import FinanceChart from '@/components/FinanceChart'
import FullTransactionTable from '@/components/FullTransactionTable'
// import TransactionTable from '@/components/TransactionTable'
import React from 'react'

const page = () => {
  return (
    <div className='p-4 lg:p-6 flex flex-col gap-8'>
        <FinanceChart />
        <FullTransactionTable />
    </div>
  )
}

export default page