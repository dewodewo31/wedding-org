import Header from '@/components/Header'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function layout({children}: Props) {
  return (
    <main className='flex flex-col gap-y-8 relative py-8 bg-light1 min-h-screen'>
      <Header hasPadding/>

      {children}
    </main>
  )
}

export default layout