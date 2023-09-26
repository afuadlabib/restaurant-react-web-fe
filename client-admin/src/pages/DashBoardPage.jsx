import React, { useEffect } from 'react';
import BaseTableItem from '../components/BaseTable';
import { useDispatch, useSelector } from 'react-redux';
import { getDataItems } from '../store/actions/action.creator';

export default function DashBoardPage() {
  const { items } = useSelector((state) => {

    return state.items
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataItems());
  }, []);

  return (
    <div className="text-center">
      <BaseTableItem data={items} />
    </div>
  );
}
