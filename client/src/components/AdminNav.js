import React,{useState} from "react";
import { NavLink,useHistory } from "react-router-dom";
import Button from "./Button";
import LoginForm from "./LoginForm";
import AddCountry from "./AddCountry";
import AddYears from "./AddYears";
import AddPromise from "./AddPromise";

// import NewItem from "./NewItem";

function AdminNav(
    // {sendSearchValue, loginName, isLoggedIn}
    ){
  const [showCountryForm, setShowCountryForm] = useState(false);
  const [showYearForm, setShowYearForm] = useState(false);
  const [showPromiseForm, setShowPromiseForm] = useState(false);


  function handleShowCountryForm(){
    setShowYearForm(false)
    setShowPromiseForm(false)
    setShowCountryForm(!showCountryForm)
  }

  function handleShowYearForm(){
    setShowCountryForm(false)
    setShowPromiseForm(false)
    setShowYearForm(!showYearForm)
  }

  function handleShowPromiseForm(){
    setShowCountryForm(false)
    setShowYearForm(false)
    setShowPromiseForm(!showPromiseForm)

  }

 
  return (
    <div>
        <nav className="sec-bg w-full p-10">
            <div className="justify-between w-2/3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
                <div onClick={handleShowCountryForm}>
                    <Button btnText={"Add New Country"} />
                </div>
                <div onClick={handleShowYearForm}>
                    <Button btnText={"Add New Governance Period"} />
                </div>
                <div onClick={handleShowPromiseForm}>
                    <Button btnText={"Add Promise"} />
                </div>
            </div>
                {
                    showCountryForm ? 
                    (
                       <div>
                        <AddCountry />
                       </div>
                    ) : null
                }
                {
                    showYearForm ? 
                    (
                        <div>
                            <AddYears/>
                        </div>
                    ) : null
                }
                {
                    showPromiseForm ? 
                    (
                        <div>
                            <AddPromise/>
                        </div>
                    ) : null
                }
                
        </nav>

    </div>
  );
}

export default AdminNav;