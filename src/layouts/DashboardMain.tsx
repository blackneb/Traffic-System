import React from 'react';
import Sidebar from '../widgets/layouts/SideBar';
import NavBar from '../widgets/layouts/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux/es/exports';

import Home from '../components/Home';
import Traffics from '../components/Traffics';
import Accidents from '../components/Accidents';
import Analysis from '../components/Analysis';
import Documentation from '../components/Documentation';
import Keys from '../components/Keys';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Statistics from '../components/Statistics';

function DashboardMain() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <div className='flex flex-row'>
        <div>
          <Sidebar/>
        </div>
        <div className='w-full'>
          <div className='ml-4 mt-2'>
          </div>
          <div className="scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 " >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/traffics' element={<Traffics/>} />
                <Route path='/accidents' element={<Accidents/>} />
                <Route path='/analysis' element={<Analysis/>} />
                <Route path='/documentation' element={<Documentation/>} />
                <Route path='/keys' element={<Keys/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/statistics' element={<Statistics/>} />
                v
              </Routes>
          </div>
        </div>

      </div>
      
        </BrowserRouter>
    </div>
  );
}

export default DashboardMain;
