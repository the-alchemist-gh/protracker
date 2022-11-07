import React,{useState, useEffect} from "react";
import CompareStatus from "./CompareStatus";
// import { NavLink,useHistory } from "react-router-dom";
import PromiseItem from "./PromiseItem";

function PromiseList({}){
    const [allPromise, setAllPromise] = useState([]);

    useEffect(()=> {
        fetch("/campaign_promises")
        .then((r) => r.json())
        .then((data)=>{
                setAllPromise(data)
            })
    },[]);
 
  return (
    < >
        <div className="w-full bg-blue-50 p-10 mt-72">
            <CompareStatus />
            <div className=" flex justify-center hover:gap-6 m-10 w-3/4 grid md:grid-cols-3 gap-4 ">
                {console.log(allPromise)}
                {

                    allPromise?.map((item)=>(
                        <PromiseItem key={item.id} items={item} />
                    ))
                }
                {/* <PromiseItem /> */}
            </div>
            
        </div>
    </>
  );
}

export default PromiseList;