import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-4 md:p-6 flex justify-center items-center flex-col min-h-screen gap-6'>
      <h1 className='text-2xl font-bold'>Welcome back</h1>
      <Link href="/dashboard" className='px-3 py-1 rounded-lg border'>Go to Dashboard</Link>
    </div>
  )
}

export default page