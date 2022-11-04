import React, { useEffect, useState } from "react"
import {BsChevronDown} from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";


function YearDropdown(){
    const [countries, setCountries] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("Ghana");
    const [open, setOpen] = useState(false)

    useEffect(()=> {
        fetch("https://restcountries.com/v2/all?fields=name")
        .then(res=> res.json())
        .then((data)=> {
            
            setCountries(data)
        })
    },[])
    return (
        <>
            <div className="w-auto font-medium ">
                <form className="flex">
                    <div className={`bg-white w-1/2 border p-2 m-2 flex items-center justify-between rounded $`}
                    onClick={()=>setOpen(!open)}>
                        <div className="flex">
                            <img className="w-8 mr-2" src={`https://countryflagsapi.com/png/${selected}`} alt={`${selected}`} />

                            {
                                selected 
                                ?
                                    selected.length > 25 ? 
                                    selected.substring(0, 25)+"..." 
                                    : selected
                                
                                : "Select Country"
                            }
                        </div>
                        
                        
                        <BsChevronDown size={20} className={`${open && 'rotate-180'}`}/>
                        
                    </div>
                    <div>
                        <div className="flex">
                            <button type="submit" className="track-btn w-full px-6 py-2 m-2 rounded hover:bg-red-900">Track now</button>
                        </div>
                    </div>
                </form>
                
                <ul className={`bg-white shadow-md rounded mt-2 overflow-y-auto absolute max-h-60 ${
                    !open ? "hidden" : "block" 
                }`}>
                    <div className="flex items-center  w-auto px-2 sticky top-0 bg-white border-b">
                        <AiOutlineSearch size={18} className="text-gray-700"/>
                        <input type="text" 
                        value={inputValue}
                       onChange={(e)=> setInputValue(e.target.value.toLowerCase())} placeholder="Enter country name" className="placeholder:text-gray-400 p-2 outline-none" />
                    </div>
                    {
                        countries?.map(country => (
                            <li key={country?.name} className={`p-2 test-sm flex hover:bg-sky-600 hover:text-white 
                            ${
                                country.name.toLowerCase() === selected.toLowerCase() && 'bg-sky-600 text-white'
                            }
                            ${
                                country.name.toLowerCase().startsWith(`${inputValue}`)
                                ? "block" 
                                : "hidden"
                        
                            }
                            `}
                            
                                onClick={()=>{
                                    if(country.name.toLowerCase() !== selected){
                                        setSelected(country.name)
                                        setOpen(false)
                                        setInputValue("")
                                    }
                                }}
                            > 
                                <img className="w-8 mr-2" src={`https://countryflagsapi.com/png/${country.name}`} alt="" />
                                {country.name}
                            
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </>
    )
}

export default YearDropdown