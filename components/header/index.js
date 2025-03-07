import Link from 'next/link'
import React from 'react'

function Header() {
  return (

    <header className="relative z-50 w-full h-24">
        <div
            className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">

            <Link href="/" className="relative flex items-center inline-block h-5 h-full font-black leading-none">
            <img src="/images/logo.svg" alt='logo' className="w-auto h-6 text-indigo-600 fill-current" />
                <span className="ml-3 text-xl text-gray-800">Landmark<span className="text-pink-500">.</span></span>
            </Link>

            <nav id="nav"
                className="absolute top-0 left-0 z-50 flex flex-col items-center justify-between hidden w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative">
                <a href="#"
                    className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Home</a>
                <a href="#features"
                    className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Features</a>
                <a href="#pricing"
                    className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color hover:text-indigo-600">Pricing</a>
                <a href="#testimonials"
                    className="font-bold duration-100 transition-color hover:text-indigo-600">Testimonials</a>
                <div className="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
                    <a href="#_" className="w-full py-2 font-bold text-center text-pink-500">Login</a>
                    <a href="#_"
                        className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-indigo-700 fold-bold">Get
                        Started</a>
                </div>
            </nav>

            <div
                className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
                <a href="#_"
                    className="relative z-40 px-3 py-2 mr-0 text-sm font-bold text-pink-500 md:px-5 lg:text-white sm:mr-3 md:mt-0">Login</a>
                <a href="#_"
                    className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-indigo-700 rounded shadow-md fold-bold lg:bg-white lg:text-indigo-700 sm:w-full lg:shadow-none hover:shadow-xl">Get
                    Started</a>
                    <img src="/images/header.svg" alt='logo' className="absolute top-0 left-0 hidden w-screen max-w-3xl -mt-64 -ml-12 lg:block"/>

            </div>

            <div id="nav-mobile-btn"
                className="absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10">
                <span className="block w-full h-1 mt-2 duration-200 transform bg-gray-800 rounded-full sm:mt-1"></span>
                <span className="block w-full h-1 mt-1 duration-200 transform bg-gray-800 rounded-full"></span>
            </div>

        </div>
    </header>
   
  )
}

export default Header