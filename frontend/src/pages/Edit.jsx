import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Backbutton from '../components/Backbutton';
import { useSnackbar } from 'notistack';

const Edit = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams;



  const handelOnClick= (e) => {
    e.preventDefailt();
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };


  return (
    <>
      <div className='flex justify-center items-center text-center'>

        <div className='w-96 border p-2'>
          <div className=''>
            <Backbutton />
          </div>

          <form>
            <div className="form-group ">
              <label htmlFor="Title" className='text-bold text-xl'>Title</label>
              <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" id="Title" placeholder="Book Name" />
            </div>
            <div className="form-group">
              <label htmlFor="Author" className='text-bold text-xl'>Author</label>
              <input value={author} onChange={(e) => { setAuthor(e.target.value) }} type="text" className="form-control" id="Author" placeholder='Book Author' />
            </div>
            <div className="form-group">
              <label htmlFor="publishYear" className='text-bold text-xl'>Publish Year</label>
              <input value={publishYear} onChange={(e) => { setPublishYear(e.target.value) }}  className="form-control" id="publishYear" placeholder='Publish year' />
            </div>

            <button onClick={handelOnClick} className="btn btn-primary m-3">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Edit
