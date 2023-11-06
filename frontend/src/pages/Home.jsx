import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from '../components/Spinner';
import Create from './Create';
import { FaBeer } from "react-icons/fa";
import { AiOutlineEdit,AiOutlineFileAdd ,AiOutlineInfoCircle, AiOutlineDelete  } from 'react-icons/ai'
// import { BsInfoCircle } from 'react-icons/bs'

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
          setLoading(true);
          axios.get('http://localhost:5555/books')
          .then((res)=>{
            console.log({res})
            setBooks(res.data.data)
            setLoading(true);
          }).catch((err)=>{
            console.log(err);
            
          })
    },[])

  return (
<>
<div>
<div className="block float-right">
  <Link to = '/books/create'>
  <AiOutlineFileAdd className='text-2xl text-green-800' />
  </Link>
</div>
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">title</th>
      <th scope="col">Author</th>
      <th scope="col">PublishYear</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody>
    {books.map((book,index)=>(
      <tr key={book._id}>
      <th scope="row">{index+1}</th>
      <td >{book.title}</td>
      <td >{book.author}</td>
      <td>{book.publishYear}</td>
      <div className='flex justify-center gap-x-4'>
      <td>
        <Link to={`/books/details/${book._id}`}>
                <AiOutlineInfoCircle className='text-2xl text-green-800' />
        </Link>
      </td>
      <td>
      <Link to={`/books/delete/${book._id}`}>
                <AiOutlineDelete className='text-2xl text-red-600'/>
        </Link>
      </td>
      <td>
      <Link to={`/books/edit/${book._id}`}>
                <AiOutlineEdit className='text-2xl text-yellow-600'/>
        </Link> 
      </td>
      </div>
    </tr>  ))}
  </tbody>
</table>
</div>
</>
  )
}

export default Home
