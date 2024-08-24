import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const Nav = [
        { name: 'Find a Doctor', path: '/doctor' },
        { name: 'Consult now', path: '/consult' },
        { name: 'Book Appointment', path: '/appointment' },
        { name: 'Health Packages', path: '/packages' },
    ];

    const handleClick = () => {
        setShow(false); 
        navigate('/'); 
    };

    return (
        <div className='font-[Poppins] shadow-md w-full fixed top-0 left-0'>
            <nav className='lg:flex items-center justify-between bg-slate-200 py-4 md:px-8 lg:px-12 px-7 '>
                <div
                    className='cursor-pointer text-xl md:flex-1 md:text-2xl font-semibold text-indigo-400 items-center'
                >
                    <h1 onClick={handleClick} className='items-center'>
                        Smart <span className='text-indigo-600'>Health-Care</span>
                    </h1>
                </div>

                <div
                    onClick={() => setShow(!show)}
                    className='text-4xl absolute right-4 top-3 cursor-pointer lg:hidden'
                >
                    <ion-icon name={show ? 'close-outline' : 'menu-outline'}></ion-icon>
                </div>

                <ul
                    className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-slate-200 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 shadow-2xl lg:shadow-none transition-all duration-500 ease-in ${
                        show ? 'top-14' : 'top-[-500px]'
                    }`}
                >
                    {Nav.map((link) => (
                        <li key={link.name} className=' text-lg 2xl:text-xl lg:ml-8 lg:my-0 my-7'>
                            <Link
                                onClick={() => setShow(!show)}
                                className=' pr-[795px] lg:pr-0 text-start text-gray-600 hover:text-gray-400 duration-500'
                                to={link.path}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <Link to={'/login'}><button className='bg-indigo-700 text-white lg:ml-10 md:mr-0 mr-4 py-[5px] px-4 rounded hover:scale-105 hover:bg-indigo-900 duration-500'>
                        Login
                    </button></Link>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
