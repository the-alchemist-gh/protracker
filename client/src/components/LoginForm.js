import React,{useState} from "react";
import { NavLink, useHistory } from "react-router-dom";

function Login({confirmLogin}){
  let homeRedirect = useHistory();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loginDataState, setLoginDataState] = useState({
    email: "",
    password: ""
  });

  function handleChange(e){
    setLoginDataState({
      ...loginDataState,
      [e.target.name]: e.target.value
    });
  }

  function handleFormSubmit(e){
    e.preventDefault();
    const newLogInData = {
      email: loginDataState.email,
      password: loginDataState.password
    };
    setLoginDataState(newLogInData);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLogInData),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => confirmLogin(user));
        homeRedirect.push("/")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });

  }

  return (
    <>
      <div className="flex py-10 items-center justify-center content-center yearBG">
            <div className="px-8 py-6 mx-4 my-10 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
              <h3 className="text-2xl mt-2 font-bold text-center text-blue-900">Login</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mt-4">
                  <div className="mt-4">
                    <label className="block" >Email</label>
                    <input type="text" placeholder="Email" name="email" onChange={handleChange}  value={loginDataState.email} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                  </div>
                  <div className="mt-4">
                    <label className="block">Password</label>
                      <input type="password" placeholder="Password" name="password" onChange={handleChange}  value={loginDataState.password}  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                      <span className="text-xs text-gray-400">Forgot Password?</span>
                  </div>
                  <div className="flex">
                    <button type="submit" className="w-full px-6 py-2 mt-4 text-white primary-btn rounded-lg hover:bg-gray-500">{isLoading ? "Loading..." : "Login"}</button>
                  </div>
                  <div>
                    {errors.map((err) => (
                      <li className="text-red-600 bg-red-100 m-2 px-2 rounded-lg" key={err}>{err}</li>
                    ))}
                  </div>
                  <div className="mt-6 text-grey-dark">
                    Don't have an account yet? <span> 
                      <NavLink className="text-blue-900 text-bold hover:underline" to="/register">
                        Register Now
                      </NavLink>
                    </span>
                    
                  </div>
                  <div className="mt-6 text-grey-dark">
                    Go back to <span> 
                      <NavLink className="text-blue-900 hover:underline" to="/">
                        HomePage
                      </NavLink>
                    </span>
                    
                  </div>
                </div>
              </form>
            </div>
      </div>
    </>
  )
}

export default Login