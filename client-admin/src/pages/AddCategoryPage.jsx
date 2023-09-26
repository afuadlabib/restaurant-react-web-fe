import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {
  addCategory,
  detailCategory,
  editCategory,
} from '../store/actions/action.creator';
import { useLocation, useNavigate } from 'react-router-dom';
export default function AddCategoryPage() {
  const [category, setCategory] = useState({
    name: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { category: editCategoryDetail } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  const [path, categories, categoryId] = location.pathname.split('/');

  const updateInputCategory = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (categories !== 'add-category') {
      Swal.fire({
        icon: 'info',
        title: `editing category`,
        text: `${category.name}`,
        toast: true,
        position: 'top-end',
        grow: 'row',
        timer: 2000,
        showConfirmButton: false,
      });
      dispatch(
        editCategory(category, ({ status }) => {
          if (status) {
            navigate('/categories');
          }
        })
      );
    } else {
      if (categories && !categoryId) {
        Swal.fire({
          icon: 'info',
          title: `adding category`,
          text: `${category.name}`,
          toast: true,
          position: 'top-end',
          grow: 'row',
          timer: 2000,
          showConfirmButton: false,
        });
        dispatch(
          addCategory(category, ({ status }) => {
            if (status) {
              navigate('/categories');
            }
          })
        );
      }
    }
  };
  useEffect(() => {
    if (categories && categoryId) {
      dispatch(detailCategory(categoryId));
    }
  }, []);

  useEffect(() => {
    if (categories !== 'add-category') {
      setCategory({
        ...editCategoryDetail,
      });
    } else {
      setCategory({
        name: '',
      });
    }
  }, [editCategoryDetail]);

  return (
    <div className="flex justify-center items-center p-10">
      <Card color="transparent" shadow={false} className="w-full items-center">
        <Typography variant="h4" color="blue-gray">
          Add Category
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details category.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleAddCategory}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              onChange={updateInputCategory}
              value={category.name}
              name="name"
              size="lg"
              label="Name"
            />
          </div>

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
