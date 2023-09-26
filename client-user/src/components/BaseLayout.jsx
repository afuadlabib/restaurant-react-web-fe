import React from 'react';
import BaseNavBar from '../components/BaseNavBar';
import BaseCarousel from './BaseCarousel';
import { BaseCircularPagination } from './BasePagination';
import { Outlet } from 'react-router-dom';
import BaseFooter from './BaseFooter';

export default function BaseLayout() {
  return (
    <>
      <div className="min-h-screen grid grid-cols-12">
        <div className="col-start-2 col-end-12">
          <div className="my-5 text-white text-center ">
            <BaseNavBar/>
          </div>
          <div className="min-h-[80vh] text-black text-center">
            <Outlet />
          </div>
          <div className=" h-[40vh] text-black text-center">
            <BaseFooter />
          </div>
        </div>
      </div>
      {/* 
        
        
        */}
    </>
  );
}
