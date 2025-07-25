import React from "react";
import LoginForm from "./LoginForm";

class LoginWrapper extends React.Component {
    
    render(){
        return(
            <div className="grid grid-cols-2 container mx-auto my-5 p-2  h-[512px] w-[842px] drop-shadow-md border border-white rounded-3xl bg-white">
                {this.props.showLogin ? <LoginForm/> : null}
            </div>
        )
    }
}

export default LoginWrapper;