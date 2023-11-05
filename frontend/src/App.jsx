import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import DeleteBook from './pages/deleteBook';
import Create from './pages/create';
import ShowBooks from './pages/ShowBooks';

function App() {

  return (
<>
<Routes>
  <Route path ='/' element ={<Home />} />
  <Route path ='/books/edit/:id' element ={<Edit />} />
  <Route path ='/books/delete/:id' element ={<DeleteBook />} />
  <Route path ='/books/create' element ={<Create />} />
  <Route path ='/books/details/:id' element ={<ShowBooks />} />
</Routes>
</>
  )  }
export default App
