import React,{useState} from "react";
import { NavLink,useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import adinkra from "../assets/adinkra.png";
// import NewItem from "./NewItem";

function PresInfo(
    // {sendSearchValue, loginName, isLoggedIn}
    ){
 
  return (
    < >
        <div className="flex justify-center w-full" style={{
            backgroundImage: `url(${adinkra})`,
            backgroundRepeat: "repeat-x",
            backgroundPositionX: "center"
        }}>
            <div className="md:w-2/3 md:flex my-10 items-center justify-center">
                <div className="md:w-1/3 my-5 mx-2 p-10">
                    <img className="rounded m-5" src="https://upload.wikimedia.org/wikipedia/commons/3/31/Nana_Akufo-Addo_at_European_Development_Days_2017.jpg" alt="" />
                </div>
                <div className="md:w-2/3 primary-color my-5 mx-2 p-10">
                    <h2 className=" text-2xl font-bold text-center mb-5">Nana Addo Dankwa</h2>
                    <div>
                        <h4 className="px-10">
                        The NPP led by Nana Addo Dankwa won power for the period of 2020-2022. We selected below the top 100 most important campaign promises of President Akuffo Addo. For each campaign promise, our partners research the issue and then rate it based on whether the promise was Fulfilled, Broken, Stalled, In Progress or Not Yet Rated. 
                        We rate the promise not on the president's intentions or effort, but on verifiable outcomes from our media partners. 
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default PresInfo;