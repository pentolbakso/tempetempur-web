import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <Footer/> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
