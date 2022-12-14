import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

function AddYears(){
  let homeRedirect = useHistory();
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [countriesData, setCountriesData] = useState([])
  const [yearDataState, setYearDataState] = useState({
    year: "",
    political_party: "",
    president: "",
    country_id: 1,
    image_url: ""
  });

  useEffect(()=> {
    fetch("/countries")
    .then(res=> res.json())
    .then((data)=> {
        
        setCountriesData(data)
    })
},[])

  function handleChange(e){
    setYearDataState({
      ...yearDataState,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    const newFormData = {
      year: yearDataState.year,
      political_party: yearDataState.political_party,
      president: yearDataState.president,
      country_id: yearDataState.country_id,
      image_url: yearDataState.image_url
    }
    setYearDataState(newFormData);

    fetch("/governance_years",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newFormData),
    })
    .then((r)=> {
      if (r.ok) {
        r.json().then((data) => data);
        setIsSuccess(true)
        // window.location.reload();

      } else {
        r.json().then((err) => setErrors(err.errors));
        setIsSuccess(false)
      }
    })

  };


  return (
    <>
      <div className="w-3/4 flex justify-center rounded p-7 m mx-auto bg-white md:items-center md:px-4">
          <form className="md:flex" onSubmit={handleSubmit}>
            <div className="mx-5 md:flex items-center justify-center">
              <div className="m-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Country
                  </label>
                  <select
                    id="type"
                    onChange={handleChange}  
                    value={yearDataState.country_id} 
                    name="country_id"
                    autoComplete="Type"
                    className={"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}>
                    {
                      countriesData?.map((item)=> (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      ))
                    }
                </select>
              </div>
              <div className="m-2">
                <label className="block">Enter Governance Period</label>
                <input 
                  type="text" 
                  placeholder="Eg. 2020-2024" 
                  name="year" 
                  onChange={handleChange}  
                  value={yearDataState.year} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              
              <div className="m-2">
                <label className="block">Name of President</label>
                <input 
                  type="text" 
                  placeholder="President's Name" 
                  name="president" 
                  onChange={handleChange}  
                  value={yearDataState.president} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div className="m-2">
                <label className="block">Image url for president</label>
                <input 
                  type="text" 
                  placeholder="President's Image" 
                  name="image_url" 
                  onChange={handleChange}  
                  value={yearDataState.image_url} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div className="m-2">
                <label className="block">Political Party</label>
                <input 
                  type="text" 
                  placeholder="Political Party" 
                  name="political_party" 
                  onChange={handleChange}  
                  value={yearDataState.political_party} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              
              <div className="mt-4 mx-2">
                <button type="submit" className="primary-btn w-full px-2 py-2 text-white bg-black rounded hover:bg-gray-500">{isLoading ? "Loading..." : "Add"}</button>
              </div>
              
            </div>

          </form>
          {
            isSuccess ? 
            <div className="text-green-600 text-sm font-bold bg-green-100 m-2 px-2 py-2 rounded-md">
              Governance Period Added Successfully
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

export default AddYears