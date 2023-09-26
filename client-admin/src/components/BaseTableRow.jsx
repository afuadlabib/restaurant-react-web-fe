import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteCategory, deleteItem } from '../store/actions/action.creator';
import Swal from 'sweetalert2';

export default function BaseTableRow({ data }) {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUpdate = (id) => {
    if (pathname === '/') {
      navigate(`/items/${id}`);
    } else {
      navigate(`/categories/${id}`);
    }
  };

  const handleDelete = (id) => {
    if (pathname === '/') {
      Swal.fire({
        icon: 'info',
        title: `deleting item`,
        grow: 'row',
        text: '',
        toast: true,
        position: 'top-end',
        timer: 2000,
        showConfirmButton: false,
      });
      dispatch(deleteItem(id));
    } else {
      Swal.fire({
        icon: 'info',
        title: `deleting category`,
        text: '',
        grow: 'row',
        toast: true,
        position: 'top-end',
        timer: 2000,
        showConfirmButton: false,
      });
      dispatch(deleteCategory(id));
    }
  };

  return data.map((e, i) => {
    return e.imgUrl ? (
      <>
        <tr key={e.id}>
          <td>{i + 1}</td>
          <td className="flex justify-center items-center">
            <img src={e.imgUrl} className="h-16" />
          </td>
          <td>{e.name}</td>
          <td>{e.description}</td>
          <td>{e.price}</td>
          <td className="flex justify-center">
            <button
              onClick={() => handleUpdate(e.id)}
              className="bg-black py-1 px-4 m-2 text-white hover:bg-amber-500 hover:text-white rounded-xl"
            >
              update
            </button>
            <button
              onClick={() => handleDelete(e.id)}
              className="bg-red-700 py-1 px-4 m-2 text-white hover:bg-red-500 hover:text-white rounded-xl"
            >
              delete
            </button>
          </td>
        </tr>
      </>
    ) : (
      <>
        <tr key={e.id}>
          <td>{i + 1}</td>
          <td>{e.name}</td>
          <td>
            <td className="flex justify-center">
              <button
                onClick={() => handleUpdate(e.id)}
                className="bg-black py-1 px-4 m-2 text-white hover:bg-amber-500 hover:text-white rounded-xl"
              >
                update
              </button>
              <button
                onClick={() => handleDelete(e.id)}
                className="bg-red-700 py-1 px-4 m-2 text-white hover:bg-red-500 hover:text-white rounded-xl"
              >
                delete
              </button>
            </td>
          </td>
        </tr>
      </>
    );
  });
}
