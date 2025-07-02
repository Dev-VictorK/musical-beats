import React from "react";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

class LoginWrapper extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="grid grid-cols-2 container mx-auto my-5 p-2  h-[512px] w-[842px] drop-shadow-md border border-white rounded-3xl bg-white">
                {this.props.showLogin ? <LoginForm/> : <SignUp/>}
            </div>
        )
    }
}

export default LoginWrapper;