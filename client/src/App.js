// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar  from "./components/NavBar";
import YearSection from "./components/YearSection";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PresInfo from "./components/PresInfo";
import AdminNav from "./components/AdminNav"
import PromiseList from "./components/promise/PromiseList";

function App() {
  const [user, setUser] = useState(null);
  const [logInId, setLogInId] = useState(null);
  const [trackCountry, setTrackCountry] = useState();
  const [trackYear, setTrackYear] = useState();
  const [selectedYear, setSelectedYear] = useState("");
  const [showStat, setShowStat] = useState(false);
  const [yearId, setYearId] = useState();
  const [promiseState, setPromiseState] = useState([]);
  const [statCounts, setStatCounts] = useState()
  




  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => {
          setLogInId(currentUser.id)
          setUser(currentUser)
        });
        
      }
    });

    fetch("/campaign_promises")
        .then((r) => r.json())
        .then((data)=>{
                setPromiseState(data)
            })
  }, []);

  

  const filteredPromiseData = promiseState.filter((promise)=>{
    if (promise && selectedYear === '') return true;

    return ((promise.governance_year.year===selectedYear));
  });
  
  return (
    <>
      <Navbar user={user} setUser={setUser} getSelectedCountryName={setTrackCountry} getSelectedCountryYears={setTrackYear} />
      {
        user ? 

          user.user_type === "Admin" ?
          <AdminNav myuser={user} /> : null
          
          : null
        
      }
      
      <main className="App">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login confirmLogin={setUser} />
          </Route>
          <Route path="/">
            <YearSection setSelectedYear={setSelectedYear} user={user} trackYear={trackYear} setShowStat={setShowStat} trackCountry={trackCountry} getYearId={setYearId} />
            <PresInfo setStatCounts={setStatCounts} setShowStat={setShowStat} yearId={yearId} promiseAdded={filteredPromiseData.length}/>
            <PromiseList statCounts={statCounts} showStat={showStat} allPromise={filteredPromiseData} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;