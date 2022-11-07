import React,{useState} from "react";
import { NavLink,useHistory } from "react-router-dom";

function CompareStatus( ){
  let loginRedirect = useHistory();

  return (
    <>
        <div className="-mt-80">
            <div className="flex justify-center">
                <div className=" rounded yearBG p-10 m-10 w-2/3">
                    <div class="grid grid-cols-5 gap-4 text-center">
                        <div>
                            <div>
                                <h3>Fulfilled</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md h-1/5 w-3 bg-green-700"></div>
                                </div>
                            </div>
                            <div>
                                <h2>10%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>10 promises </h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Broken</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md h-3/5 w-3 bg-red-700"></div>
                                </div>
                            </div>
                            <div>
                                <h2>60%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>60 promises </h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Stalled</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md h-1/5 w-3 bg-orange-500"></div>
                                </div>
                            </div>
                            <div>
                                <h2>15%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>15 promises </h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>In Progress</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md h-1/5 w-3 bg-yellow-300"></div>
                                </div>
                            </div>
                            <div>
                                <h2>15%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>15 promises </h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Not Rated Yet</h3>
                            </div>
                            <div className="h-48 flex justify-center mt-5">
                                <div className="rounded-md h-full bg-white w-3 flex items-end">
                                    <div className="rounded-b-md h-1/2 w-3 bg-gray-300"></div>
                                </div>
                            </div>
                            <div>
                                <h2>15%</h2>
                            </div>
                            <div className="mt-3">
                                <h2>15 promises</h2>
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