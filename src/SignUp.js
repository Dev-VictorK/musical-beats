import React from "react";
import pic from './login.jpg';
import user5 from './user5.jpg';

class SignUp extends React.Component {
    render() {
        const isSignUp = false;
        return (
            <div className="border border-blue-600">

                <div className="grid grid-cols-2 h-screen overflow-hidden relative">
                    {/* Image section */}
                    <div
                        className={`overflow-hidden relative rounded-3xl transition-all duration-700 ease-in-out 
                    ${isSignUp ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"} col-start-1 col-span-1`}
                    >
                        <img src={pic} className="w-full h-full object-cover z-10" alt="" />
                        <h1 className="absolute top-0 left-0 text-white z-50 m-6 font-normal">Earth-Space Image</h1>
                        <button
                            className="absolute top-0 right-0 m-6 border border-white px-2 py-1 rounded-full text-white text-sm"
                            onClick={this.signUpClick}
                        >
                            Sign up
                        </button>

                        {/* user profile preview */}
                        <div className="absolute bottom-4 left-2 z-50 m-3 grid grid-cols-5 items-center w-[256px] h-[56px]">
                            <div className="col-start-1 rounded-full overflow-hidden w-[40px] h-[40px] my-auto mx-2">
                                <img src={user5} className="object-center" alt="" />
                            </div>
                            <div className="col-start-2 col-span-3 grid grid-rows-2 mx-1">
                                <h1 className="text-white">Victor K.B</h1>
                                <h1 className="text-white text-sm font-light">Design & UI</h1>
                            </div>
                        </div>
                    </div>

                    {/* Form section */}
                    <div className="col-start-2 p-8 transition-all duration-700 ease-in-out flex items-center justify-center">
                        {/* Login Form */}
                        {!isSignUp ? (
                            <div className="animate-fade-in w-full">
                                <div className="flex flex-row justify-between">
                                    <h1 className="text-2xl font-bold font-sans">Musical Beats</h1>
                                    <button className="text-[12px] border border-gray-400 px-2 rounded-2xl">English</button>
                                </div>

                                <form className="flex flex-col my-[60px] items-center">
                                    <h1 className="text-5xl font-sans font-bold">Hi There</h1>
                                    <h3 className="my-2">Welcome to Musical Beats</h3>
                                    <input type="text" placeholder="Username"
                                        className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500" />
                                    <input type="password" placeholder="Password"
                                        className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500" />
                                    <a href="#" className="text-orange-700 text-sm hover:text-orange-900">Forgot Password?</a>
                                    <button className="p-2 border w-64 border-gray-500 rounded-md my-1 hover:ring-2 hover:ring-orange-500">
                                        Log in with Google
                                    </button>
                                    <button className="bg-orange-600 w-64 text-white rounded-3xl p-2 my-2 hover:bg-orange-700 hover:ring-2 hover:ring-orange-500">
                                        Login
                                    </button>
                                    <p>Don't have an account? <span className="text-orange-700 text-sm hover:text-orange-900">Sign Up</span></p>
                                </form>
                            </div>
                        ) : (
                            // Sign-up form
                            <div className="animate-fade-in w-full">
                                <div className="flex flex-row justify-between">
                                    <h1 className="text-2xl font-bold font-sans">Musical Beats</h1>
                                    <button className="text-[12px] border border-gray-400 px-2 rounded-2xl">English</button>
                                </div>

                                <form className="flex flex-col my-[60px] items-center">
                                    <h1 className="text-5xl font-sans font-bold">Join Us</h1>
                                    <h3 className="my-2">Create your Musical Beats account</h3>
                                    <input type="text" placeholder="Full Name"
                                        className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500" />
                                    <input type="email" placeholder="Email"
                                        className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500" />
                                    <input type="password" placeholder="Password"
                                        className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500" />
                                    <button className="bg-orange-600 w-64 text-white rounded-3xl p-2 my-2 hover:bg-orange-700 hover:ring-2 hover:ring-orange-500">
                                        Sign Up
                                    </button>
                                    <p>Already have an account? <span className="text-orange-700 text-sm hover:text-orange-900">Log In</span></p>
                                </form>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        )
    }
}
export default SignUp;