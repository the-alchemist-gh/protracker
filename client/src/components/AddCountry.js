import React,{useState} from "react";
import { NavLink,useHistory } from "react-router-dom";
import CountryDropdown from "./CountryDropdown";

function AddCountry(){
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const loginRedirect = useHistory();
  const [countryDataState, setCountryDataState] = useState({
    name: "",
    flag_image_url: ""
  });
  
  function getCountryName(cName){
    const countryData = {
      name: cName,
      flag_image_url: `https://countryflagsapi.com/png/${cName}`
    }
    setCountryDataState(countryData)
  }

  function handleSubmit(e){
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    const newFormData = {
      name: countryDataState.name,
      flag_image_url: countryDataState.flag_image_url,
    }
    setCountryDataState(newFormData);

    fetch("/countries",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newFormData),
    })
    .then((r)=> {
      if (r.ok) {
        r.json().then((user) => user);
        setIsSuccess(true)
      } else {
        r.json().then((err) => setErrors(err.errors));
        setIsSuccess(false)
      }
    })

  };


  return (
    <>
      <div className="w-2/3 flex justify-center rounded p-7 m mx-auto bg-white md:items-center md:px-4">
          <form className="flex md:w-3/4  md:flex" onSubmit={handleSubmit}>
            <div className="md:flex items-center justify-center">
              <div className="mt-4">
                <CountryDropdown getSelectedCountryName = {getCountryName} />
              </div>
              <div className="mt-4 mx-2">
                <button type="submit" className="primary-btn w-full px-2 py-2 text-white bg-black rounded-lg hover:bg-gray-500">{isLoading ? "Loading..." : "Add Country"}</button>
              </div>
              
            </div>

          </form>
          {
            isSuccess ? 
            <div className="text-green-600 text-sm font-bold bg-green-100 m-2 px-2 py-2 rounded-md">
              Country Added Successfully
            </div>
            : null
          }
          <div>
            {errors.map((err) => (
              <li className="text-red-600 bg-red-100 m-2 px-2 rounded-lg" key={err}>{err}</li>
            ))}
          </div>
      </div>
    </>
  )
}

export default AddCountry