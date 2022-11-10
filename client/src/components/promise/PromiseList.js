import React,{useState, useEffect} from "react";
import CompareStatus from "./CompareStatus";
// import { NavLink,useHistory } from "react-router-dom";
import PromiseItem from "./PromiseItem";

function PromiseList({setSelectedStatus,user, statCounts, allPromise, showStat}){
    // const [statCounts, setStatCounts] = useState()

 
  return (
    < >
        <div className={`w-full bg-blue-50 p-10 ${showStat ? 'mt-60' : null}`}>
            {
                showStat ? 
                (
                 <CompareStatus setSelectedStatus={setSelectedStatus} totalCount={allPromise.length} statCounts={statCounts} />) : null
            }
            {
                allPromise.length < 1 ?
                (
                    <div>
                        <div className="flex justify-center">
                            <h1 className="bg-red-100 px-10 py-5 font-bold text-lg text-red-700">No Promises Added for this Period, Kindly send us a mail to let us know what you're looking for.</h1>
                        </div>
                    </div>
                ) :
                (
                    <div>
                        <div>
                            <h1 className="font-bold text-lg primary-color border-b">All Promises</h1>
                        </div>
                        <div className="flex justify-center">
                            <div className="m-10 w-3/4 grid md:grid-cols-3 gap-8 ">
                                {

                                    allPromise?.map((item)=>(
                                        <PromiseItem key={item.id} user={user} items={item} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            
            
        </div>
    </>
  );
}

export default PromiseList;