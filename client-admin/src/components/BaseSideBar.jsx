import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  InboxIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionConfigIsLogin } from '../store/actions/action.config';

export default function BaseSideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-none bg-transparent">
        <List className="text-black ">
          <Link to="/">
            <ListItem className="hover:bg-amber-500 hover:text-white hover:rounded-r-full">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>

          <Link to="/categories">
            <ListItem className="hover:bg-amber-500 hover:text-white hover:rounded-r-full">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Categories
            </ListItem>
          </Link>
          <Link to="/register-admin">
            {' '}
            <ListItem className="hover:bg-amber-500 hover:text-white hover:rounded-r-full">
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Register Admin
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <ListItem
            className="hover:bg-amber-500 hover:text-white hover:rounded-r-full"
            onClick={() => {
              localStorage.clear();
              navigate('/login');
              dispatch(actionConfigIsLogin({ isLogin: false }));
            }}
          >
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </>
  );
}
