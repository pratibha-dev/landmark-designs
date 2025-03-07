import React from 'react'

function Features() {
    return (
        <div id="features" className="relative w-full px-8 py-10 border-t border-gray-200 md:py-16 lg:py-24 xl:py-40 xl:px-0">
            <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
                <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">Our Features</h2>
                <h3
                    className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
                    Built and Designed with you in Mind</h3>
                <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">

                    <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                        <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                            <img src="/images/featureicon1.svg" className="absolute w-full h-full  fill-current" />
                            <img src="/images/featureicon2.svg" className="relative w-20 h-20" />

                            <h4 className="relative mt-6 text-lg font-bold">Automated Tools</h4>
                            <p className="relative mt-2 text-base text-center text-gray-600">Automate your workflow with these
                                top of the
                                line marketing tools.</p>
                            <a href="#_" className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn
                                More</a>
                        </div>
                    </div>

                    <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                        <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                            <img src="/images/featureicon3.svg" className="absolute w-full h-full text-gray-100 fill-current" />
                            <img src="/images/featureicon4.svg" className="relative w-20 h-20" />

                            <h4 className="relative mt-6 text-lg font-bold">Machine Learning</h4>
                            <p className="relative mt-2 text-base text-center text-gray-600">Your Marketing tools will learn how
                                to better
                                convert and sell.</p>
                            <a href="#_" className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn
                                More</a>
                        </div>
                    </div>

                    <div className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
                        <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                        <img src="/images/featureicon5.svg" className="absolute w-full h-full text-gray-100 fill-current" />
                        <img src="/images/featureicon6.svg" className="relative w-20 h-20" />
                            <h4 className="relative mt-6 text-lg font-bold">Smart Notifications</h4>
                            <p className="relative mt-2 text-base text-center text-gray-600">Our smart notifications will notify
                                you when
                                users convert.</p>
                            <a href="#_" className="relative flex mt-2 text-sm font-medium text-indigo-500 underline">Learn
                                More</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features