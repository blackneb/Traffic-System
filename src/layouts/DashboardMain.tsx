import React from 'react';
import Sidebar from '../widgets/layouts/SideBar';
import NavBar from '../widgets/layouts/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Breadcrumb } from 'antd';
import { useSelector } from 'react-redux/es/exports';

import Home from '../components/Home';


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
              </Routes>
          </div>
        </div>

      </div>
      
        </BrowserRouter>
    </div>
  );
}

export default DashboardMain;
