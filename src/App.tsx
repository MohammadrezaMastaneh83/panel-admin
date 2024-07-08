import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Navbar from './navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Info from './Info/Info';
import User from './User/User';
import Ticket from './Ticket/Ticket';
import Support from './Support/Support';
import Services from './Services/Services';
import AplouaNews from './AplouaNews/AplouaNews';
import Transaction from './Transaction/Transaction';
import { useLocation } from 'react-router-dom';

function App() {
  
  return (
    <>

      <div className='main'>
        <Header  />
        <div className='navbar_component'>
          <Navbar />
          <div className='mainnnnn'>
            <Routes>
              <Route path='/Information' element={<Info />} />
              <Route path='/Users' element={<User />} />
              <Route path='/Ticket' element={<Ticket />} />
              <Route path='/Support' element={<Support />} />
              <Route path='/Services' element={<Services />} />
              <Route path='/AplouaNews' element={<AplouaNews />} />
              <Route path='/Transaction' element={<Transaction />} />
            </Routes>
          </div>
        </div>


      </div>


    </>
  );
}

export default App;
