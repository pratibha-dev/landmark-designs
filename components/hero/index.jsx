import React from 'react'

function Hero() {
  return(
    <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
    <div
        className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
        <div
            className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">Build the
                Next
                Great Thing</h1>
            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">Are you ready to start your
                adventure and start building the next greatest SAAS app on the market?</p>
            <a href="#_"
                className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0">Signup
                Today!</a>
            <div className="flex-col hidden mt-12 sm:flex lg:mt-24">
                <p className="mb-4 text-sm font-medium tracking-widest text-gray-500 uppercase">Integrates With</p>
                <div className="flex">
                    <img src = "/images/stripe.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"/>
                    <img src = "/images/github.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"/>
                    <img src = "/images/vinmo.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"/>
                    <img src = "/images/slack.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"/>
                    <img src = "/images/mailchimp.svg" className="h-8 mr-4 text-gray-500 duration-150 cursor-pointer fill-current transition-color hover:text-gray-600"/>
         
              
                  
                </div>
            </div>
     <img src='/images/banner.svg' className="absolute left-0 max-w-md mt-24 -ml-64 left-svg"/>
        </div>
        <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
            <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
                <img src="https://cdn.devdojo.com/images/september2020/macbook-mockup.png"
                    className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero