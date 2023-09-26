import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  editItem,
  getDataCategories,
  itemDetail,
} from '../store/actions/action.creator';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AddItemPage() {
  const [inputItems, setInputItems] = useState({
    name: '',
    description: '',
    price: '',
    imgUrl: '',
    categoryId: '',
  });

  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [path, items, itemId] = location.pathname.split('/');
  const { item } = useSelector((state) => state.items);
  const [generateButton, setGenerateButton] = useState([]);
  const [ingredient, setIngredient] = useState({length: 0});

  useEffect(() => {
    dispatch(getDataCategories());
    if (location.pathname !== "/add-item") {
      dispatch(itemDetail(itemId));
    }
  }, []);
  useEffect(() => {
    if (location.pathname !== "/add-item") {
      setInputItems({ ...item });
    }
  }, []);

  const updateInputItem = (e, type) => {
    if (type === 'select') {
      setInputItems({
        ...inputItems,
        categoryId: e,
      });
    } else {
      const { name, value } = e.target;
      setInputItems({ ...inputItems, [name]: value });
    }
  };
  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (location.pathname !== "/add-item") {
      Swal.fire({
        icon: 'info',
        title: `editing item`,
        text: `${inputItems.name}`,
        toast: true,
        position: 'top-end',
        grow: 'row',
        timer: 2000,
        showConfirmButton: false,
      });
      dispatch(
        editItem(inputItems, ({ status }) => {
          navigate('/');
        })
      );
    } else {
      Swal.fire({
        icon: 'info',
        title: `adding new item`,
        text: `${inputItems.name}`,
        toast: true,
        position: 'top-end',
        grow: 'row',
        timer: 2000,
        showConfirmButton: false,
      });
      dispatch(
        addItem(inputItems,  ingredient,({ status }) => {
          if (status) {
            navigate('/');
          }
        })
      );
    }
  };

  const incrementGradient = (e) => {
    const { name, value } = e.target;
    setIngredient({
      ...ingredient,
      [name]: value
    });

  };
  return (
    <div className="flex justify-center items-center p-10">
      <Card color="transparent" shadow={false} className="w-full items-center">
        <Typography variant="h4" color="blue-gray">
          Add Item
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details item.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleInputSubmit}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              onChange={updateInputItem}
              value={inputItems.name}
              name="name"
              size="lg"
              label="Name"
            />
            <Input
              onChange={updateInputItem}
              value={inputItems.description}
              name="description"
              size="lg"
              label="Description"
            />
            <Input
              onChange={updateInputItem}
              value={inputItems.price}
              name="price"
              type="number"
              size="lg"
              label="Price"
            />
            <Input
              onChange={updateInputItem}
              value={inputItems.imgUrl}
              name="imgUrl"
              size="lg"
              label="Image Url"
            />
            <Select
              value={inputItems?.categoryId}
              variant="outlined"
              label="Select Category"
              onChange={(value) => {
                updateInputItem(value, 'select');
              }}
            >
              {categories?.map((el) => {
                return (
                  <Option key={el.id} value={el.id}>
                    {el.name}
                  </Option>
                );
              })}
            </Select>
            {generateButton?.map((el, i) => {
              const [e1, e2] = el.split('_');
              return (
                <div className="flex justify-center items-center gap-2">
                  <Input
                    onChange={incrementGradient}
                    name={el}
                    size="lg"
                    label={`Ingradient-${e2}`}
                  />
                  <Button
                    onClick={() => {
                      setGenerateButton(generateButton.filter((e) => e !== el));
                      setIngredient(()=> {
                        delete ingredient[el]
                        return {...ingredient}
                      })
                    }}
                    className="w-16 hover:bg-amber-500 hover:text-white text-center px-2 bg-red-600"
                    fullWidth
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </Button>
                </div>
              );
            })}
          </div>
          <Button
            onClick={() => {
              let temp = ""
              temp = ingredient.length +1
              setIngredient({...ingredient, length: temp})
              setGenerateButton([
                ...generateButton,
                `ingredient_${temp}`,
              ]);
            }}
            className="mt-6 hover:bg-amber-500 hover:text-white"
            fullWidth
          >
            Add Ingredient
          </Button>

          <Button
            type="submit"
            className="mt-6 hover:bg-amber-500 hover:text-white"
            fullWidth
          >
            Add Item
          </Button>
        </form>
      </Card>
    </div>
  );
}
