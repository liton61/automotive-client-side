

const Package = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-16 mb-2">Our Offered Package</h1>
            <hr className="w-1/2 border-t-4 border-red-300 mb-10 mx-auto"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 mb-10">
                <div className="p-6 w-96 mx-auto bg-red-200 rounded-lg shadow-md mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800">Basic Plan</h2>
                    <p className="mt-4 text-gray-600">An affordable option for your car needs.</p>
                    <div className="mt-4 flex items-center">
                        <div className="text-3xl text-gray-800 font-semibold">$199</div>
                        <div className="text-gray-600 ml-2">/month</div>
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600 mr-2" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                            <span className="text-gray-700">24-month financing term</span>
                        </li>
                        <li className="flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600 mr-2" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                            <span className="text-gray-700">10% down payment</span>
                        </li>
                        <li className="flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600 mr-2" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                            <span className="text-gray-700">Competitive interest rate</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-neutral w-full">Apply Now</button>
                    </div>
                </div>

                <div className="p-6 w-96 mx-auto bg-red-200 rounded-lg shadow-md mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800">Pro Plan</h2>
                    <p className="mt-4 text-gray-600">A balanced plan with additional benefits.</p>
                    <div className="mt-4 flex items-center">
                        <div className="text-3xl text-gray-800 font-semibold">$249</div>
                        <div className="text-gray-600 ml-2">/month</div>
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600 mr-2" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                            <span className="text-gray-700">36-month financing term</span>
                        </li>
                        <li className="flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600 mr-2" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                            <span className="text-gray-700">8% down payment</span>
                        </li>
                        <li className="flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600 mr-2" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                            <span className="text-gray-700">Lowest interest rate</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-neutral w-full">Apply Now</button>
                    </div>
                </div>

                <div className="p-6 w-96 mx-auto bg-red-200 rounded-lg shadow-md mb-5">
                    <h2 className="text-2xl font-semibold text-gray-800">Premium Plan</h2>
                    <p className="mt-4 text-gray-600">Our top-tier plan with exclusive benefits.</p>
                    <div className="mt-4 flex items-center">
                        <div className="text-3xl text-gray-800 font-semibold">$299</div>
                        <div className="text-gray-600 ml-2">/month</div>
                    </div>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600 mr-2" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                            <span className="text-gray-700">48-month financing term</span>
                        </li>
                        <li className="flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600 mr-2" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                            <span className="text-gray-700">5% down payment</span>
                        </li>
                        <li className="flex items-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current text-gray-600 mr-2" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                            <span className="text-gray-700">Ultra-low interest rate</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-neutral w-full">Apply Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Package;