import React from "react";
import pic from "./login.jpg"

class LoginForm extends React.Component {
    render() {
        return (
            <>
                {/**Image section */}
                <div className="overflow-hidden rounded-3xl col-start-1">
                    <img src={pic} className="w-full h-auto object-cover z-10 " alt="" />
                    <h1 className="absolute top-0 left-0 text-white z-50 m-6 font-bold">Hi Victor</h1>
                </div>
                {/**Form section */}
                <div className="col-start-2 p-4 min-h-full">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-2xl font-bold font-sans">Musical Beats</h1>
                        <button className="text-[12px] border border-gray-400 px-[10px] py-[1px] rounded-2xl">English</button>
                    </div>

                    <form className="flex flex-col my-[60px] items-center">
                        <h1 className="text-5xl font-sans font-bold">Hi There</h1>
                        <h3 className="my-2">Welcome to Musical Beats</h3>
                        <input type="text" placeholder="Username"
                            className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />
                        <input type="password" placeholder="Password"
                            className="p-2 w-64 border border-gray-500 rounded-md my-1 focus:outline-none focus:border focus:border-orange-500 focus:ring-2 focus:ring-orange-500 hover:border hover:border-orange-200 hover:ring-2 hover:ring-orange-400" />
                        <a href="#" className="text-orange-700 text-sm hover:text-orange-900">Forgot Password?</a>
                        <button className="p-2 border w-64 border-gray-500 rounded-md my-1 px-8 hover:ring-2 hover:ring-orange-500 hover:border hover:border-orange-500">Log in with Google</button>
                        <button className="bg-orange-600 w-64 text-white rounded-3xl p-2 px-20 my-2 hover:bg-orange-700 hover:ring-2 hover:ring-orange-500">Login</button>
                        <p>Don't have an account? <a href="#" className="justify-end text-orange-700 text-sm hover:text-orange-900">Sign Up</a></p>
                    </form>
                </div>
            </>
        )
    }
}
export default LoginForm;