import { useState } from 'react';
// import { fetchDataItems } from '../App';

const baseUrl = 'http://localhost:3000/items';
export default function BaseProductForm({callback}) {

  const [inputItem, setInputItem] = useState({
    name: '',
    description: '',
    price: "",
    imgUrl:
      '',
    list: '',
    authorId: "",
    categoryId: "",
    createdAt: '',
    updatedAt: '',
  });
  const onChangeName = (event) =>{
    const {value, name: formInput} = event.target
    setInputItem({
      ...inputItem,
      [formInput]: value
    },[inputItem])
  }
  const onSubmitItem= ((event)=>{
    event.preventDefault()
    fetch(baseUrl,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputItem)
    })
    .then((res)=>{
      return res.json()
    })
    .then(res => {
      return callback()
    })
    .catch((error)=>{
    })
  })

  return (
    <>
      <div className="flex justify-center items-center min-h-[50vh] bg-slate-700 w-[30%] rounded-lg m-auto text-slate-500">
        <form onSubmit={onSubmitItem}>
          <div className="relative m-3" data-te-input-wrapper-init>
            <label className="text-white">
              name
              </label>
            <input
              onChange={onChangeName}
              type="text"
              name='name'
              className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="name"
            />
          </div>
          <div className="relative m-3" data-te-input-wrapper-init>
          <label className="text-white">
              price
            </label>
            <input
              type="text"
              name='price'
              onChange={onChangeName}
              className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput1"
              placeholder="price"
            />
            
            
          </div>
          <div className="relative m-3" data-te-input-wrapper-init>
          <label className="text-white">
              image url
            </label>
            <input
              type="text"
              name='imgUrl'
              onChange={onChangeName}
              className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

              id="exampleFormControlInput1"
              placeholder="imgUrl"
            />
          </div>
          <div className="relative m-3" data-te-input-wrapper-init>
          <label className="text-white">
          description
            </label>
            <input
              type="text"
              name='description'
              onChange={onChangeName}
              className="peer block min-h-[auto] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

              id="exampleFormControlInput1"
              placeholder="description"
            />
          </div>
          <div className="flex justify-center items-center">
            <button type='submit' className="bg-indigo-700 p-2 px-5 rounded-md font-bold text-white mb-3 hover:bg-indigo-500">
              Add Items
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
