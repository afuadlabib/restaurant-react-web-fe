import React, { useEffect } from 'react';
import BaseCard from '../components/BaseCard';
import { BaseCircularPagination } from '../components/BasePagination';
import BaseCarousel from '../components/BaseCarousel';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataItem } from '../store/actions/action.creator';

export default function LandingPage() {
  const {items} = useSelector((state) => state.items)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchDataItem())
  },[])
  return (
    <>
      <BaseCarousel />
      <div className="block m-2 p-5 text-3xl font-bold text-red-900 bg-red-50 rounded-lg">
        <h1>List Menu</h1>
      </div>
      <div className="grid grid-cols-12 gap-5 my-3">
        {
          items?.map((e)=>{
            return (<BaseCard data={e} />)
          })
        }
      </div>
      <div className="flex justify-center items-center m-10">
        <BaseCircularPagination />
      </div>
    </>
  );
}
