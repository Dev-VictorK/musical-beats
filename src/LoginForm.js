import React from "react";
import pic from "./login.jpg";
import user5 from "./user5.jpg";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUp: false,
            showText: false
        };
        this.signUpClick = this.signUpClick.bind(this);
    }

    signUpClick = (e) => {
        e.preventDefault();
        this.setState({ isSignUp: !this.state.isSignUp });
        setTimeout(() => { this.setState({ showText: !this.state.showText }) }, 2000);
    }
    render() {
        const { isSignUp, showText } = this.state;

        return (
            <>
                {/**Image section */}
                <div className={`overflow-hidden relative rounded-3xl col-start-1 col-span-1 z-20
                transition-all duration-[5s] ease-in-out ${isSignUp ? "translate-x-full opacity-100" : "translate-x-0 opacity-100"} `}>
                    <img src={pic} className="w-full h-auto object-cover z-10 " alt="" />
                    <h1 className="absolute top-0 left-0 text-white z-50 m-6 font-normal">Earth-Space Image</h1>
                    <button className="absolute top-0 right-0 m-6 border border-white px-2 py-1 rounded-full text-white text-sm"
                        onClick={this.signUpClick}>Sign up</button>
                    {/**user profile preview */}
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
                {/**Form section */}


                {!isSignUp ? (
                    <div className={`col-start-2 p-4 min-h-full transition-all duration-[5s] ease-in-out z-10
                        ${isSignUp ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}>
                        {/**login */}
                        <div className="animate-fade-in w-full">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-2xl font-bold font-sans">Musical Beats</h1>
                                <button className="text-[12px] border border-gray-400 px-2 rounded-2xl">English</button>
                            </div>

                            <form className={`flex flex-col ${!showText ? "my-[40px]" : "my-[60px]"} items-center`}>
                                <h1 className="text-5xl font-sans font-bold">{!showText ? "Hi There" : "Sign Up"}</h1>
                                <h3 className="my-2">Welcome to Musical Beats</h3>
                                <input type="text" placeholder="Username"
                                    className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />
                                {!showText ?
                                    <>
                                        <input type="password" placeholder="Password"
                                            className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />
                                        <button className="text-orange-700 text-sm hover:text-orange-900">Forgot Password?</button>
                                    </>
                                    :
                                    <>
                                        <input type="email" placeholder="Email"
                                            className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />
                                        <input type="password" placeholder="Password"
                                            className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />

                                    </>}
                                <button className="p-2 border w-64 border-gray-500 rounded-md my-1 px-8 hover:ring-2 hover:ring-orange-500 hover:border hover:border-orange-500">Log in with Google</button>
                                <button className="bg-orange-600 w-64 text-white rounded-3xl p-2 px-20 my-2 hover:bg-orange-700 hover:ring-2 hover:ring-orange-500">
                                    {!showText ? "Login" : "Sign Up"}</button>
                                {showText ?
                                    <p>Have an account?
                                        <button className="justify-end text-orange-700 text-sm hover:text-orange-900">
                                            Log in
                                        </button>
                                    </p> : <p>Don't have an account? <button className="justify-end text-orange-700 text-sm hover:text-orange-900">Sign Up</button></p>}
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className={`col-start-2 p-4 min-h-full transition-all duration-[5s] ease-in-out 
                        ${isSignUp ? "-translate-x-full opacity-100" : "translate-x-100 opacity-0"}`}>
                        {/**sign up */}
                        <div className="animate-fade-in w-full">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-2xl font-bold font-sans">Musical Beats</h1>
                                <button className="text-[12px] border border-gray-400 px-2 rounded-2xl">English</button>
                            </div>

                            <form className={`flex flex-col ${showText ? "my-[60px]" : "my-[40px]"} items-center`}>
                                <h1 className="text-5xl font-sans font-bold">{showText ? "Sign Up" : "Hi There"}</h1>
                                <h3 className="my-2">Welcome to Musical Beats</h3>
                                <input type="text" placeholder="Username"
                                    className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />
                                {showText ? <>
                                    <input type="email" placeholder="Email"
                                        className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />
                                    <input type="password" placeholder="Password"
                                        className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />
                                </>
                                    : <input type="password" placeholder="Password"
                                        className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />
                                }
                                {showText ? <></>
                                    : <button className="text-orange-700 text-sm hover:text-orange-900">Forgot Password?</button>}
                                <button className="p-2 border w-64 border-gray-500 rounded-md my-1 px-8 hover:ring-2 hover:ring-orange-500 hover:border hover:border-orange-500">
                                    Log in with Google
                                </button>
                                <button className="bg-orange-600 w-64 text-white rounded-3xl p-2 px-20 my-2 hover:bg-orange-700 hover:ring-2 hover:ring-orange-500"
                                    onClick={this.signUpClick}
                                >
                                    {showText ? "Sign Up" : "Login"}
                                </button>
                                {showText ?
                                    <p>Have an account?
                                        <button className="justify-end text-orange-700 text-sm hover:text-orange-900">
                                            Log in
                                        </button>
                                    </p> : <p>Don't have an account? <button className="justify-end text-orange-700 text-sm hover:text-orange-900">Sign Up</button></p>}

                            </form>
                        </div>
                    </div>
                )
                }
            </>
        )
    }
}
export default LoginForm;