'use client' // Error boundaries must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2 className='text-2xl'>Something went wrong!</h2>
            <button
                className='bg-blue-500 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
            <Link href="/" className='bg-blue-500 mr-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Volver al Inicio</Link>
        </div>
    )
}