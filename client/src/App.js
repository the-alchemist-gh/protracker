// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar  from "./components/NavBar";
import YearSection from "./components/YearSection";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PresInfo from "./components/PresInfo";
import AdminNav from "./components/AdminNav"

function App() {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [trackCountry, setTrackCountry] = useState();
  const [trackYear, setTrackYear] = useState();
  const [yearId, setYearId] = useState();


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setUser(currentUser));
        
      }
    });
  }, []);

  // setTrackYear(trackCountry.governance_years)
  console.log(trackYear)
  console.log(trackCountry)

  return (
    <>
      <Navbar user={user} setUser={setUser} getSelectedCountryName={setTrackCountry} getSelectedCountryYears={setTrackYear} />
      {
        user ? 

          user.user_type === "Admin" ?
          <AdminNav user={user} /> : null
          
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
            <YearSection  user={user} trackYear={trackYear} trackCountry={trackCountry} getYearId={setYearId} />
            <PresInfo yearId={yearId}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;