import React from 'react'

function Navbar() {
  return (
    <main className='navbar w-full flex justify-center'>
        <div className='flex flex-row gap-2 justify-center rounded-full border-2 py-1.5 px-6 my-1 w-fit shadow-xl border-fern-700
         backdrop-filter backdrop-blur-xl bg-opacity-10'>
            <div className="px-3 py-1 rounded-full text-fern-900 bg-fern-300">Home</div>
            <div className="px-3 py-1 rounded-full text-fern-100">Projects</div>
            <div className="px-3 py-1 rounded-full text-fern-100">Blog</div>
        </div>
    </main>
  )
}

export default Navbar