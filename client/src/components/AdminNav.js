import React,{useState} from "react";
import { NavLink,useHistory } from "react-router-dom";
import Button from "./Button";
import LoginForm from "./LoginForm";
import AddCountry from "./AddCountry";
import AddYears from "./AddYears";

// import NewItem from "./NewItem";

function AdminNav(
    // {sendSearchValue, loginName, isLoggedIn}
    ){
  const [showCountryForm, setShowCountryForm] = useState(false);
  const [showYearForm, setShowYearForm] = useState(false);
  let loginRedirect = useHistory();


  function handleShowCountryForm(){
    setShowYearForm(false)
    setShowCountryForm(!showCountryForm)
  }

  function handleShowYearForm(){
    setShowCountryForm(false)
    setShowYearForm(!showYearForm)
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
                
        </nav>

    </div>
  );
}

export default AdminNav;