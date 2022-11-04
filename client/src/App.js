// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar  from "./components/NavBar";
import YearSection from "./components/YearSection";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <>
      <Navbar />
      <main className="App">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <YearSection />
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;