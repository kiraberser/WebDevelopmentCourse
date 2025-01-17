import Link from 'next/link'
import React from 'react'

function Button() {
  return (
    <div>
      <Link href="/" className='bg-slate-500 rounded-lg pointer-events-auto' >Home</Link>
    </div>
  )
}

export default Button
