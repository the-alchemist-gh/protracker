import React,{useState, useEffect} from "react";
import { NavLink,useHistory } from "react-router-dom";

function PromiseItem({user, items}){
    const [promiseItem, setPromiseItem] = useState();

    // useEffect(()=> {
    //     fetch("/campaign_promises")
    //     .then((r) => {
    //         if (r.ok) {
    //           r.json().then((data) => setAllPromise(data));
              
    //         }
    //       });
    // },[])
 
  return (
    < >
        <div className="bg-white shadow-lg p-5 round">
            <div className="max-w-md bg-white rounded overflow-visible ">
                <div className="flex w-full pb-3">
                    <div className="w-1/4 m-1">
                        <div className="rounded-full w-20 h-20 image-div-round">
                            <img className=" rounded-full h-full w-full object-cover" src={items.governance_year.image_url} alt=""/>
                        </div>
                        
                    </div>
                    <div className="w-3/4 ml-4 primary-color ">
                        <h2 className="font-bold text-lg ">{items.title}</h2>
                        <h2 className="text-xs text-gray-400">Topic . {items.topic}</h2>
                        <div className="flex">
                            <h2 className={`bg-orange-200 px-3 rounded-full text-xs py-1 mt-2 text-orange-600 ${items.status}`}>{items.status}</h2>
                        </div>
                    </div>
                </div>
                {
                    user ?
                    (
                        <div className="flex justify-between mt-2 border-t">
                            {
                                user.user_type === "Admin" ?
                                (
                                    <div className="bg-gray-100 rounded-md px-3 py-1">
                                        <h2 className="text-sm">Review</h2> 
                                    </div>
                                ) : null

                            }
                            
                            <div className="bg-gray-100 rounded-md px-3 py-1">
                                <h2 className="text-sm">Comment</h2>
                            </div>
                            <div className="bg-gray-100 rounded-md px-3 py-1">
                                <h2 className="text-sm">Upvote  <span className="font-bold">{items.votes}</span></h2>
                            </div>
                        </div>
                    ) : null
                }
                
            </div>
            
        </div>
    </>
  );
}

export default PromiseItem;