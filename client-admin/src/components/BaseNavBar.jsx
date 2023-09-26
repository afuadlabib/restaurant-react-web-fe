import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from '@material-tailwind/react';
import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

export default function BaseNavBar() {
  return (
    <Navbar className="blur-none shadow-none backdrop-opacity-0 border-none bg-opacity-0 w-full text-amber-500 ">
      <div className="flex flex-wrap items-center justify-between gap-y-4 bg-transparent">
        <Typography
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5  pl-5 text-4xl"
        >
          DonaldDuck
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="amber">
            <Cog6ToothIcon className="h-6 w-6" />
          </IconButton>
          <IconButton variant="text" color="amber">
            <BellIcon className="h-6 w-6" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}
