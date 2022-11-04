import React, { useEffect, useState } from "react"
import {BsChevronDown} from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import YearDropdown from "./YearDropdown";


function YearSection(){
    // const [countries, setCountries] = useState(null);
    // const [inputValue, setInputValue] = useState("");
    // const [selected, setSelected] = useState("Ghana");
    // const [open, setOpen] = useState(false)

    // useEffect(()=> {
    //     fetch("https://restcountries.com/v2/all?fields=name")
    //     .then(res=> res.json())
    //     .then((data)=> {
            
    //         setCountries(data)
    //     })
    // },[])
    return (
        <>
            <div className="py-10 px-5">
                <div className="md:flex my-10 mx-5">
                    <div className="m-5 md:w-1/2">
                        <h3>Track Government of Ghana Promises and be updated on status of the policies you care about.</h3>
                    </div>
                    <div className="md:w-1/2 m-5">
                        <h3>Select Period of Governance</h3>
                        <YearDropdown/>
                    </div> 
                </div>
                
            </div>
        </>
    )
}

export default YearSection