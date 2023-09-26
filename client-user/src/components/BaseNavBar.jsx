import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {Link} from 'react-router-dom'
function NavList() {
  return (
    <div className="text-white">
      <ul className="h-20 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
      <Link to="/" className="flex items-center transition-colors ">
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="font-bold hover:bg-amber-800 p-4 rounded-xl"
      >
          Menu
      </Typography>
        </Link>
        <Link className="flex items-center transition-colors ">
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="font-bold hover:bg-amber-800 p-4 rounded-xl"
      >
        Breakfast
      </Typography>
        </Link>
        <Link  className="flex items-center transition-colors">
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="font-bold hover:bg-amber-800 p-4 rounded-xl"
      >
        Regular
      </Typography>
        </Link>
      <Typography
        as="li"
        variant="small"
        color="text-white"
        className="font-bold hover:bg-amber-800 p-4 rounded-xl"
      >
        <a href="#" className="flex items-center transition-colors">
          Promo Day
        </a>
      </Typography>
    </ul>
    </div>
    
  );
}
 
export default function BaseNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto min-w-screen py-3 h-24 bg-red-900  ">
      <div className="flex items-center justify-between text-white">
        <Typography
          
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 text-2xl"
        >
          DonaldDuck
        </Typography>
        <div className="hidden lg:block text-white">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}