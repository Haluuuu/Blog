import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Historia from './components/Historia';
import Tramientos  from './components/Tramientos';
import Sintomas  from './components/Sintomas';
import Afectados  from './components/Afectados';
import Acerca from './components/Acerca';

import './App.css'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Historia" element={<Historia />} />
          <Route path="/Tramientos" element={<Tramientos/>}/>
          <Route path="/Sintomas" element={<Sintomas/>}/>
          <Route path="/Afectados" element={<Afectados/>}/>
          <Route path="/Acerca" element={<Acerca/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
