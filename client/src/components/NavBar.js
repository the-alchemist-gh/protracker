import React,{useState} from "react";
import { NavLink,useHistory } from "react-router-dom";
// import "../assets/logo.svg";
import logo from "../assets/logo.svg";
import CountryDropdown from "./CountryDropdown";

// import NewItem from "./NewItem";

function Navbar(
    {sendSearchValue, loginName, isLoggedIn}
    ){
  const [navbar, setNavbar] = useState(false);
  let loginRedirect = useHistory();

  function handleSearch(e){
    e.preventDefault();
    sendSearchValue(e.target.value);
  }

  function handleLogOut(){
    window.location.reload();
    loginRedirect("/");
  }
 
  return (
    <div >
      
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:pb-0 pb-3 md:flex md:px-4">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div className="inline-flex">
                          <NavLink to="/">
                            <img src={logo}/>
                          </NavLink>
                          
                        </div>
                        

                        {/* Mobile resp hamburger */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                  <div>
                    <div className="relative">
                      <CountryDropdown />
                    </div>
                  </div>
                  <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                          navbar ? "block" : "hidden"
                      }`}>
                      <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                        <ul className="items-center lg-hidden flex justify-between md:flex md:space-x-6 md:space-y-0">
                            {
                                isLoggedIn ? (
                                    <><li className="text-blue-900">
                                              Welcome {loginName}
                                          </li><li onClick={handleLogOut} className="text-blue-900">
                                                  <button type="button">Log Out</button>
                                              </li>
                                    </>
                                ) : (
                                    <>
                                    <li className="text-blue-900">
                                        <NavLink to="/login">Log In</NavLink>
                                    </li>
                                    <li className="text-blue-900">
                                        <NavLink to="/register">Register</NavLink>
                                    </li>
                                </>
                                )
                            }
                           
                            
                        </ul>
                        
                      </div>
                  </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                      <ul className="items-center flex justify-between md:flex md:space-x-6 md:space-y-0">

                          {
                                isLoggedIn ? (
                                    <><li className="text-blue-900">
                                              Welcome {loginName}
                                          </li><li onClick={handleLogOut} className="text-blue-900">
                                                  <button type="button">Log Out</button>
                                              </li>
                                    </>
                                ) : (
                                    <>
                                    <li className="text-blue-900">
                                        <NavLink to="/login">Log In</NavLink>
                                    </li>
                                    <li className="text-blue-900">
                                        <NavLink to="/register">Register</NavLink>
                                    </li>
                                </>
                                )
                            }
                          
                      </ul>
                      
                    </div>
                    
                </div>
            </div>
        </nav>

    </div>
  );
}

export default Navbar;