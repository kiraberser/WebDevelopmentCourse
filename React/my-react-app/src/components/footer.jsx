import React from 'react'

const year = new Date().getFullYear()

function footer() {
  return (
        <footer className='fixed bottom-0  w-full text-center pb-3 text-gray-400' >
            <p>Copyright ⓒ {year} </p>
        </footer>
    )
}

export default footer 