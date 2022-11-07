import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

function AddPromise({myuser, period}){
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [countriesData, setCountriesData] = useState([])
  const [yearsData, setYearsData] = useState([])

  const [promiseDataState, setPromiseDataState] = useState({
      title: "",
      topic: "",
      description: "",
      promise_date: "",
      promise_completion: "",
      promise_venue: "",
      votes: 0,
      status: "unrated",
      country_id: 1,
      governance_year_id: 3,
      user_id: 1
  });

  useEffect(()=> {
    fetch("/countries")
    .then(res=> res.json())
    .then((data)=> {
        setCountriesData(data)

    })
},[])

useEffect(()=> {
  fetch(`/countries/${promiseDataState.country_id}/period`)
        .then(res=> res.json())
        .then((yData)=>{
          setYearsData(yData)
        })
},[promiseDataState.country_id])

  function handleChange(e){
    setPromiseDataState({
      ...promiseDataState,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e){
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    const newFormData = {
      title: promiseDataState.title,
      topic: promiseDataState.topic,
      description: promiseDataState.description,
      promise_date: promiseDataState.promise_date,
      promise_completion: promiseDataState.promise_completion,
      promise_venue: promiseDataState.promise_venue,
      votes: 0,
      status: promiseDataState.status,
      country_id: promiseDataState.country_id,
      governance_year_id: promiseDataState.governance_year_id,
      user_id: promiseDataState.user_id
    }
    setPromiseDataState(newFormData);

    fetch(`/campaign_promises`,{
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
        window.location.reload();

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
            <div className="mx-5  items-center justify-center">
              <div className="md:flex">
                <div className="m-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Select Country
                    </label>
                    <select
                      id="type"
                      onChange={handleChange}  
                      value={promiseDataState.country_id} 
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
                    <label className="block text-sm font-medium text-gray-700">
                      Select Governance Period
                    </label>
                    <select
                      id="type"
                      onChange={handleChange}  
                      value={promiseDataState.governance_year_id} 
                      name="governance_year_id"
                      autoComplete="Type"
                      className={"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}>
                      {
                        yearsData?.map((item)=> (
                          <option key={item.id} value={item.id}>{item.year}</option>
                        ))
                      }
                  </select>
                </div>
              </div>
              <div className="md:flex">
                <div className="m-2">
                  <label className="block">Title</label>
                  <input 
                    type="text" 
                    placeholder="Title" 
                    name="title" 
                    onChange={handleChange}  
                    value={promiseDataState.title} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="m-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Choose Topic
                    </label>
                    <select
                      id="type"
                      onChange={handleChange}  
                      value={promiseDataState.topic} 
                      name="topic"
                      autoComplete="Type"
                      className={"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}>
                      <option value="Education">Education</option>
                      <option value="Health">Health</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Energy">Energy</option>
                      <option value="Tourism">Tourism</option>
                      <option value="Technology">Technology</option>
                      <option value="Manaufacturing">Manufacturing</option>
                  </select>
                </div>
                <div className="m-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Status of Promise
                    </label>
                    <select
                      id="type"
                      onChange={handleChange}  
                      value={promiseDataState.status} 
                      name="status"
                      autoComplete="Type"
                      className={"mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"}>
                      <option value="Unrated">Unrated</option>
                      <option value="Fulfilled">Fulfilled</option>
                      <option value="In-Progress">In Progress</option>
                      <option value="Stalled">Stalled</option>
                      <option value="Broken">Broken</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="m-2">
                  <label className="block">Promise Details</label>
                  <input 
                    type="text" 
                    placeholder="More info" 
                    name="description" 
                    onChange={handleChange}  
                    value={promiseDataState.description} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
              </div>
              <div className="md:flex">
                <div className="m-2">
                  <label className="block">Date Promised</label>
                  <input 
                    type="date" 
                    placeholder="date" 
                    name="promise_date" 
                    onChange={handleChange}  
                    value={promiseDataState.promise_date} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="m-2">
                  <label className="block">Promise Fulfillment Date</label>
                  <input 
                    type="date" 
                    placeholder="date" 
                    name="promise_completion" 
                    onChange={handleChange}  
                    value={promiseDataState.promise_completion} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="m-2">
                  <label className="block">Promise Venue</label>
                  <input 
                    type="text" 
                    placeholder="eg. Manifesto" 
                    name="promise_venue" 
                    onChange={handleChange}  
                    value={promiseDataState.promise_venue} className="w-full px-4 py-2 mt-0 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
              </div>
              <div className="mt-4 mx-2">
                <button type="submit" className="primary-btn w-full px-2 py-2 text-white bg-black rounded hover:bg-gray-500">{isLoading ? "Loading..." : "Add"}</button>
              </div>
              
            </div>

          </form>
          {
            isSuccess ? 
            <div className="text-green-600 text-sm font-bold bg-green-100 m-2 px-2 py-2 rounded-md">
              Year Added Successfully
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

export default AddPromise