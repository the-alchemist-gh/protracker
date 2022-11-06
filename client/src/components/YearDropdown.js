import React, { useEffect, useState } from "react"
import {BsChevronDown} from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";


function YearDropdown({trackYear,trackCountry, getYearId}){
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);


    useEffect(()=> {
        setSelected("")
        setOpen(false)
        setInputValue("")
    },[trackCountry])
    return (
        <>
            <div className="w-auto font-medium ">
                <form className="flex">
                    <div className={`bg-white w-1/2 border p-2 m-2 flex items-center justify-between rounded $`}
                    onClick={()=>setOpen(!open)}>
                        <div className="flex">
                            {
                                selected ?
                                (
                                    <img className="w-8 mr-2" src={`https://countryflagsapi.com/png/${trackCountry}`} alt="" />
                                ) : null
                            }
                            

                            {
                                selected 
                                ?
                                    
                                    selected.length > 25 ? 
                                    selected.substring(0, 25)+"..." 
                                    : selected
                                
                                : "Select Year"
                            }
                        </div>
                        
                        
                        <BsChevronDown size={20} className={`${open && 'rotate-180'}`}/>
                        
                    </div>
                </form>
                
                <ul className={`bg-white shadow-md rounded mt-2 overflow-y-auto absolute max-h-60 ${
                    !open ? "hidden" : "block" 
                }`}>
                    <div className="flex items-center  w-auto px-2 sticky top-0 bg-white border-b">
                        <AiOutlineSearch size={18} className="text-gray-700"/>
                        <input type="text" 
                        value={inputValue}
                       onChange={(e)=> setInputValue(e.target.value.toLowerCase())} placeholder="Enter Year" className="placeholder:text-gray-400 p-2 outline-none" />
                    </div>
                    {
                        trackYear?.map(year => (
                            <li key={year?.id} className={`p-2 test-sm flex hover:bg-sky-600 hover:text-white 
                            ${
                                year.year.toLowerCase() === selected.toLowerCase() && 'bg-sky-600 text-white'
                            }
                            ${
                                year.year.toLowerCase().startsWith(`${inputValue}`)
                                ? "block" 
                                : "hidden"
                        
                            }
                            `}
                            
                                onClick={()=>{
                                    if(year.year.toLowerCase() !== selected){
                                        setSelected(year.year)
                                        setOpen(false)
                                        setInputValue("")
                                        getYearId(year.id)
                                        // setTrackYear()
                                    }
                                }}
                            > 
                                <img className="w-8 mr-2" src={`https://countryflagsapi.com/png/${trackCountry}`} alt="" />
                                {year.year}
                            
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </>
    )
}

export default YearDropdown