import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useLocation } from 'react-router-dom';
import { detailItems } from '../store/actions/action.creator';

export default function DetailPage() {
  const {item} = useSelector((state)=> {
    console.log(state);
    return state.items
  })
  const dispatch = useDispatch()
  const location = useLocation()
  const [path, items, itemId] = location.pathname.split("/")
  useEffect(()=>{
    console.log(itemId);
    dispatch(detailItems(itemId))
  },[])
  return (
    <Card className="w-full h-full flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-[50%] shrink-0 rounded-r-none"
        >
          <img
            src={item?.imgUrl}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className='flex justify-center items-center bg-red-900'>
          <Typography variant="h4" className="mb-2 text-red-900 bg-white p-4 shadow-xl">
            {item?.name}
          </Typography>
          <Typography variant="h6" className="block mb-2 text-white p-2 px-5">
            {item?.Category?.name}
          </Typography>
          </div>
          <Typography color="gray" className="mb-8 font-normal">
            {item?.description}
          </Typography>
          <a className="inline-block">
            <Button variant="text" className="flex items-center gap-2 hover:bg-amber-500 hover:text-white text-red-800 shadow-md">
              Rp. {item?.price}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
  )
}

