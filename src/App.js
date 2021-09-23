import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./Header";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
function App() {
  return (
     <div className="main-content">
        <BrowserRouter>
          <nav>
            <Header />
          </nav>
          <Switch>
            <Route exact path="/portfolio" component={Home} />
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </BrowserRouter>
        <Contact />
      </div>
  );
}

export default App;
