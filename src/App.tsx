import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Components/Header';
import { Home } from './Routes/Home';
import { About } from './Routes/about';
import { Applications } from './Routes/applications';
import { Application } from './Routes/application';
import { Resources } from './Routes/Resources';
import { Resource } from './Routes/Resource';
import { PageNotFound } from './Components/PageNotFound';



function App() {
  return (
    <div className="App">
      <Header/>
     <Container>
     <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/about" element={ <About />}/>
           <Route path="/application" element={<Applications/>}/>
           <Route path="/application/:applicationId" element={<Application/>}/>
           <Route path="/resource" element={<Resources/>}/>
           <Route path="/resource/:resourceId" element={<Resource/>}/>
           {/* <Route path="*" element={<PageNotFound/>}/> */}
        </Routes>
      </HashRouter>
  </Container>
    </div>
  );
}

export default App;
