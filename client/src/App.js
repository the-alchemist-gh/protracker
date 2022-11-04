// client/src/components/App.js
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar  from "./components/NavBar";
import YearSection from "./components/YearSection";

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
          <Route path="/testing">
            <h1 className="text-2xl font-bold text-white">Test Route system2</h1>
            
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