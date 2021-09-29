import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import FrontEndProjects from './pages/FrontEndProjects';
import FunctionsProjects from './pages/FunctionsProjects';

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
function App() {
  return (
     <div className="main-content">
        <BrowserRouter>
          <nav>
            <Header />
          </nav>
          <Switch>
            <Route exact path="/portfolio" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/projects" component={ Projects } />
            <Route exact path="/projects/front-end" component={ FrontEndProjects } />
            <Route exact path="/projects/functions" component={ FunctionsProjects } />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
