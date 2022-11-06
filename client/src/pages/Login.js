import React from "react";
import LoginForm from "../components/LoginForm"

function Login( {confirmLogin}){
 
  return (
    < >
    <div className="flex items-center justify-center content-center yearBG py-10 ">
      <div className="px-8 py-6 mx-4 my-10 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <LoginForm confirmLogin={confirmLogin} />
      </div>
      
    </div>
      
    </>
  );
}

export default Login;