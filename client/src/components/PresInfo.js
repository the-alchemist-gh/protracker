import React,{useState, useEffect} from "react";
import { NavLink,useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import adinkra from "../assets/adinkra.png";
// import NewItem from "./NewItem";

function PresInfo({yearId}){
    const [period, setPeriod] = useState({

    })

    useEffect(()=> {
        fetch(`/governance_years/${yearId}`)
        .then((r) => {
            if (r.ok) {
              r.json().then((data) => setPeriod(data));
              
            }
          });
    },[yearId])
 
  return (
    < >
        {
            period ?
            (
                <div className="flex justify-center w-full" style={{
                    backgroundImage: `url(${adinkra})`,
                    backgroundRepeat: "repeat-x",
                    backgroundPositionX: "center"
                }}>
                    <div className="md:w-2/3 md:flex my-10 items-center justify-center">
                        <div className="md:w-1/3 my-5 mx-2 p-10">
                            <img className="rounded m-5" src={`${period.image_url}`} alt="" />
                        </div>
                        <div className="md:w-2/3 primary-color my-5 mx-2 p-10">
                            <h2 className=" text-2xl font-bold px-10 mb-5"> President {
                                    period.president
                                }
                            </h2>
                            <div>
                                <h4 className="px-10">
                                The {period.political_party} party led by {period.president} won power for the period of {period.year}. We selected below the top 100 most important campaign promises of President {period.political_party}. For each campaign promise, our media partners research the issue and then rate it based on whether the promise was Fulfilled, Broken, Stalled, In Progress or Not Yet Rated. 
                                We rate the promise not on the president's intentions or effort, but on verifiable outcomes from our media partners. 
                                </h4>
                            </div>
                            <div>
                                <div className="px-10 py-2">
                                    <button type="submit" className="track-btn px-6 py-2 my-3 rounded hover:bg-red-900">Track {period.president}'s Campaign Promises now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
        }
    </>
  );
}

export default PresInfo;