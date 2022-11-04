import React,{useState} from "react";
import { NavLink,useHistory } from "react-router-dom";

function Register({ onLogin }){
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const loginRedirect = useHistory();
  const [registerDataState, setRegisterDataState] = useState({
    name: "",
    email: "",
    user_type: "Voter",
    institution: "",
    password: "",
    password2: "",
    approved: 1
  });
  
  
  function handleSubmit(e){
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    let approval = 1;
    if(registerDataState.user_type==="Media"){
      approval = 0;
    }
    const newFormData = {
      name: registerDataState.name,
      email: registerDataState.email,
      user_type: registerDataState.user_type,
      institution: registerDataState.institution,
      password: registerDataState.password,
      password_confirmation: registerDataState.password2,
      approved: approval
    }
    setRegisterDataState(newFormData);

    fetch("/users",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newFormData),
    })
    .then((r)=> {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        loginRedirect.push("/login")
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })

    .then(
       
    )

  };

  function handleChange(e){
    setRegisterDataState((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }));
    
  }


  return (
    <>
      <div className="flex py-10 items-center justify-center content-center yearBG">
        <div className="px-8 py-6 mx-4 my-10 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center primary-color">Register for an account now</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <div>
                <label className="block">Name</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="name" 
                  onChange={handleChange}  
                  value={registerDataState.name} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div className="mt-4">
                <label className="block">Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  onChange={handleChange}  
                  value={registerDataState.email} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div className="mt-4 col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  User Type
                </label>
                <select
                  id="type"
                  onChange={handleChange}  
                  value={registerDataState.user_type} 
                  name="user_type"
                  autoComplete="Type"
                  className={"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}>
                  <option value="Admin">Admin</option>
                  <option value="Media">Media</option>
                  <option value="Voter">Voter</option>
                </select>
              </div>
              <div className={`mt-4
                ${
                  registerDataState.user_type === "Media"
                  ? 'block' 
                  : 'hidden'
                }
              `}>
                <label className="block">Which institution are affiliated to?</label>
                <input 
                  type="text" 
                  placeholder="Eg. tv3, joy fm, peace fm" name="institution"
                  onChange={handleChange}  
                  value={registerDataState.institution} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={handleChange}  
                    value={registerDataState.password} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div className="mt-4">
                <label className="block">Confirm Password</label>
                  <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    onChange={handleChange} name="password2" 
                    value={registerDataState.password2} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div className="flex">
                <button type="submit" className="primary-btn w-full px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-gray-500">{isLoading ? "Loading..." : "Register"}</button>
              </div>
              <div>
                {errors.map((err) => (
                  <li className="text-red-600 bg-red-100 m-2 px-2 rounded-lg" key={err}>{err}</li>
                ))}
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account? <span> 
                  <NavLink className="text-blue-900 hover:underline" to="/login">
                    Log in
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

export default Register