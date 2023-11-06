import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useSnackbar} from 'notistack';
import Backbutton from '../components/Backbutton';
import { Link } from 'react-router-dom';


const Create = () => {
  const [title, setTitle] = useState("");
  console.log('title',title)
  const [author, setAuthor] = useState("");
  console.log('author',author)
  const [publishYear, setPublishYear] = useState("");
  console.log('year',publishYear)
  const [loading, setLoading] = useState(false);
  const {enqueueSnackbar} = useSnackbar();
 
 const handelOnClick = (e)=>{

  e.preventDefault();
         
          const data = {
                    title,
                    author,
                    publishYear
          };
          console.log({data})
         
          
          setLoading(true);
          axios.post('http://localhost:5555/books',data).then(()=>{
            setLoading(false);
            enqueueSnackbar("Book Added Succesfully", {variant:'success'})
            setAuthor("");
            setTitle("");
            setPublishYear(0);
            // navigate('/');
          }).catch((err)=>{
            setLoading(false);  
            enqueueSnackbar("Error:Cant update", {variant:'error'})      
            console.log(err);
          });
 }
 
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
    <input value = {title} onChange={ (e)=>{setTitle(e.target.value)}} type="text" className="form-control" id="Title"  placeholder="Book Name" />
    </div>
  <div className="form-group">
    <label htmlFor="Author" className='text-bold text-xl'>Author</label>
    <input value = {author} onChange={ (e)=>{setAuthor(e.target.value)}} type="text" className="form-control" id="Author" placeholder='Book Author'  />
  </div>
  <div className="form-group">
    <label htmlFor="publishYear" className='text-bold text-xl'>Publish Year</label>
    <input value = {publishYear} onChange={ (e)=>{setPublishYear(e.target.value)}}  className="form-control" id="publishYear"  placeholder='Publish year' />
  </div>
  
  <button onClick={handelOnClick}  className="btn btn-primary m-3">Submit</button>
</form>
</div>
</div>
</>
  )
}

export default Create
