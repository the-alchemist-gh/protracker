import React,{useState} from "react";
import { NavLink,useHistory } from "react-router-dom";

function Button(
    {btnText, loginName, isLoggedIn}
    ){
  const [navbar, setNavbar] = useState(false);
  let loginRedirect = useHistory();

 
  return (
    <>
        <button type="button" className="sec-btn justify-center items-center px-4 py-2 m-3 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-white">
          {btnText}
      </button>
    </>
  );
}

export default Button;