import React, {useState} from 'react';
//import {AiOutlineClose} from 'react-icons/ai'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
      <div className='flex  justify-between items-center h-24 w-full mx-auto px-8 text-black font-semibold text-lg bg-[#ffffff] shadow-lg fixed'>
        <h1 className='w-full text-2xl font-bold text-blue-800'>CSR Activity Registration</h1>
        <ul className='hidden  md:flex '>
            <li className='p-4 cursor-pointer hover:text-blue-900 hover:text-bold rounded-lg'>Home</li>
            <li className='p-4 cursor-pointer hover:text-blue-900 hover:text-bold rounded-lg'>Gallery</li>
            <li className='p-4 cursor-pointer hover:text-blue-900 hover:text-bold rounded-lg'>About</li>
            <li className='p-4 cursor-pointer hover:text-blue-900 hover:text-bold rounded-lg'>Contact</li>
            <li className='p-4 cursor-pointer hover:text-blue-900 hover:text-bold rounded-lg'>Login</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden' >
            {!nav ? <CloseIcon size={20} /> : <MenuIcon size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-auto h-auto text-[#3AAFA9] ' : 'fixed left-[-100%]' } >
        {/* <h1 className='w-full pt-8 pl-4 text-xl font-bold text-white'>CUTM CREDIT CALCULATOR</h1> */}
            <ul className='pt-24 uppercase  '>
                <li className='text-center font-bold p-4 px-20 border-b border-b-gray-400 border-r border-r-gray-400 '>Home</li>
                <li className='text-center font-bold p-4 px-20 border-b border-b-gray-400 border-r border-r-gray-400'>Gallery</li>
                <li className='text-center font-bold p-4 px-20 border-b border-b-gray-400 border-r border-r-gray-400'>About</li>
                <li className='text-center font-bold p-4 px-20 border-b border-b-gray-400 border-r border-r-gray-400'>Contact</li>
                <li className='text-center font-bold p-4 px-20 border-b border-b-gray-400 border-r border-r-gray-400'>Login</li>
            </ul>
        </div>

      </div>
    );
};

export default Navbar ;

