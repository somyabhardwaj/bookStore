import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from '../components/Spinner';

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
      <tr>
      <th scope="row">{index+1}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.publishYear}</td>
    </tr>  ))}
  </tbody>
</table>
</div>

  </>
  )
}

export default Home
