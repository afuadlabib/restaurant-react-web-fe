import { Outlet } from 'react-router-dom';
import BaseNavBar from './BaseNavBar';
import BaseSideBar from './BaseSideBar';

export default function BaseLayout() {
  return (
    <>
      <div className="grid grid-cols-12 bg-[#fffbeb] text-gray-900 overflow-hidden">
        <div className="col-span-12 h-[12vh]">
          <BaseNavBar />
        </div>
        <div className="col-span-3 h-[88vh] bg-transparent">
          <BaseSideBar />
        </div>
        <div className="col-span-9 h-[88vh] p-5 bg-white rounded-xl ">
          <div className="overflow-y-scroll w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
