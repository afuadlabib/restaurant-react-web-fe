import { useEffect, useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLoginAdmin } from '../store/actions/action.creator';
import Swal from 'sweetalert2';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.config);

  const [inputLogin, setInputLogin] = useState({
    email: '',
    password: '',
  });

  const updateInputLogin = (e) => {
    const { name, value } = e.target;
    setInputLogin({ ...inputLogin, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: `Wait ... `,
      text: `Login processing`,
      toast: true,
      position: 'top-end',
      grow: 'row',
      timer: 2000,
      showConfirmButton: false,
    });
    dispatch(
      userLoginAdmin(inputLogin, ({ status }) => {
        navigate('/');
      })
    );
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin]);
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-amber-50">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Sign in to your account.
        </Typography>
        <form
          onSubmit={handleLogin}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              name="email"
              size="lg"
              label="Email"
              onChange={updateInputLogin}
            />
            <Input
              name="password"
              type="password"
              size="lg"
              label="Password"
              onChange={updateInputLogin}
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
            className="mt-6 hover:bg-amber-500 hover:text-white"
            fullWidth
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
}
