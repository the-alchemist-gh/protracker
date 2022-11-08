import React,{useState,useEffect} from "react";
import { NavLink,useHistory } from "react-router-dom";

function CompareStatus( {totalCount, statCounts}){
    const [brokenStatus, setBrokenStatus] = useState(0)
    const [fulfilledStatus, setFulfilledStatus] = useState(0)
    const [inProgressStatus, setInProgressStatus] = useState(0)
    const [stalledStatus, setStalledStatus] = useState(0)
    const [unratedStatus, setUnratedStatus] = useState(0)

    const [brokenPercent, setBrokenPercent] = useState(Math.round((brokenStatus/totalCount)*100))
    const [fulfilledPercent, setFulfilledPercent] = useState(Math.round((fulfilledStatus/totalCount)*100))
    const [inProgressPercent, setInProgressPercent] = useState(Math.round((inProgressStatus/totalCount)*100))
    const [stalledPercent, setStalledPercent] = useState(Math.round((stalledStatus/totalCount)*100))
    const [unratedPercent, setUnratedPercent] = useState(Math.round((unratedStatus/totalCount)*100))
    


    useEffect(()=> {
        
        setBrokenStatus(statCounts.Broken)
        setFulfilledStatus(statCounts.Fulfilled)
        setInProgressStatus(statCounts.In_Progress)
        setStalledStatus(statCounts.Stalled)
        setUnratedStatus(statCounts.Unrated)
        
        setBrokenPercent(Math.round((brokenStatus/totalCount)*100))
        setFulfilledPercent(Math.round((fulfilledStatus/totalCount)*100))
        setInProgressPercent(Math.round((inProgressStatus/totalCount)*100))
        setStalledPercent(Math.round((stalledStatus/totalCount)*100))
        setUnratedPercent(Math.round((unratedStatus/totalCount)*100))

        

    },[statCounts])

  return (
    <>
        <div className="-mt-80 primary-color">
            <div className="flex justify-center">
                <div className=" rounded yearBG p-10 m-10 w-2/3">
                    <div className="grid grid-cols-5 gap-4 text-center">
                        <div>
                            <div>
                                <h3>Fulfilled</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md w-3 bg-green-700" style={{
                                        height: `${fulfilledPercent}%`,
                                    }}></div>
                                </div>
                            </div>
                            <div className="text-green-700 font-bold">
                                <h2>{fulfilledPercent ? fulfilledPercent:'0'}%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>
                                    {
                                        fulfilledStatus ? 
                                            fulfilledStatus === 1 ?
                                                (
                                                    `${fulfilledStatus} Promise`
                                                )
                                            : 
                                                (
                                                    `${fulfilledStatus} Promises`
                                                )

                                        : 
                                         (
                                            "0 Promise"
                                         )
                                    }
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Broken</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md w-3 bg-red-700" style={{
                                        height: `${brokenPercent}%`,
                                    }}></div>
                                </div>
                            </div>
                            <div className="text-red-700 font-bold">
                                <h2>{brokenPercent ? brokenPercent:'0'}%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>
                                    {
                                        brokenStatus ? 
                                            brokenStatus === 1 ?
                                                (
                                                    `${brokenStatus} Promise`
                                                )
                                            : 
                                                (
                                                    `${brokenStatus} Promises`
                                                )

                                        : 
                                         (
                                            "0 Promise"
                                         )
                                    }
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Stalled</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md w-3 bg-orange-500" style={{
                                        height: `${stalledPercent}%`,
                                    }}></div>
                                </div>
                            </div>
                            <div className="text-orange-500 font-bold">
                                <h2>{stalledPercent ? stalledPercent:'0'}%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>
                                    {
                                        stalledStatus ? 
                                            stalledStatus === 1 ?
                                                (
                                                    `${stalledStatus} Promise`
                                                )
                                            : 
                                                (
                                                    `${stalledStatus} Promises`
                                                )

                                        : 
                                         (
                                            "0 Promise"
                                         )
                                    }
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>In Progress</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md w-3 bg-yellow-300" style={{
                                        height: `${inProgressPercent}%`,
                                    }}></div>
                                </div>
                            </div>
                            <div className="text-yellow-500 font-bold">
                                <h2>{inProgressPercent ? inProgressPercent:'0'}%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>
                                    {
                                        inProgressStatus ? 
                                            inProgressStatus === 1 ?
                                                (
                                                    `${inProgressStatus} Promise`
                                                )
                                            : 
                                                (
                                                    `${inProgressStatus} Promises`
                                                )

                                        : 
                                         (
                                            "0 Promise"
                                         )
                                    }
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Not Rated Yet</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md w-3 bg-gray-300" style={{
                                        height: `${unratedPercent}%`,
                                    }}></div>
                                </div>
                            </div>
                            <div className="text-gray-500 font-bold">
                                <h2>{unratedPercent ? unratedPercent:'0'}%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>
                                    {
                                        unratedStatus ? 
                                            unratedStatus === 1 ?
                                                (
                                                    `${unratedStatus} Promise`
                                                )
                                            : 
                                                (
                                                    `${unratedStatus} Promises`
                                                )

                                        : 
                                         (
                                            "0 Promise"
                                         )
                                    }
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default CompareStatus;