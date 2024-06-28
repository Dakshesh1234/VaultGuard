import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center bottom-0 w-full'>
            <div className="logo font-bold text-2xl text-white ">
                <span className="text-blue-900"> &lt;</span>
                <span>Vault</span>
                <span className="text-blue-900">Guard/&gt;</span>
            </div>
            <div className='flex justify-center items-center'>
                Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by dha_Corp
            </div>
        </div>
    )
}

export default Footer
