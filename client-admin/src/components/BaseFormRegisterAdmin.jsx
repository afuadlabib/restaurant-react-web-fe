import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegisterAdmin } from '../store/actions/action.creator';
import { useNavigate } from 'react-router-dom';

export default function BaseFormRegisterAdmin() {
  const dispatch = useDispatch();
  const { isLoading, error, status } = useSelector((state) => state.config);
  const [inputRegister, setInputRegister] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });
  const navigate = useNavigate()

  const updateInputRegister = (e) => {
    const { name, value } = e.target;
    setInputRegister({ ...inputRegister, [name]: value });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(userRegisterAdmin(inputRegister, ({status})=>{
      if(status){
        navigate("/")
      }
    }));
  };
  useEffect(() => {
    setTimeout(() => {
      if (status) {
        setInputRegister({
          username: '',
          email: '',
          password: '',
          phoneNumber: '',
          address: '',
        });
      }
    }, 1300);
  }, [status]);
  return (
    <div className="flex justify-center items-center p-10">
      <Card color="transparent" shadow={false} className="w-full items-center">
        <Typography variant="h4" color="blue-gray">
          Register Admin
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleRegister}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              onChange={updateInputRegister}
              value={inputRegister.username}
              name="username"
              size="lg"
              label="User Name"
            />
            <Input
              onChange={updateInputRegister}
              value={inputRegister.email}
              name="email"
              size="lg"
              label="Email"
            />
            <Input
              onChange={updateInputRegister}
              value={inputRegister.password}
              name="password"
              type="password"
              size="lg"
              label="Password"
            />
            <Input
              onChange={updateInputRegister}
              value={inputRegister.phoneNumber}
              name="phoneNumber"
              size="lg"
              label="Phone Number"
            />
            <Input
              onChange={updateInputRegister}
              value={inputRegister.address}
              name="address"
              size="lg"
              label="Address"
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a className="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          <Button
            type="submit"
            className="mt-6 hover:bg-amber-500 hover:text-white"
            fullWidth
          >
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
}
