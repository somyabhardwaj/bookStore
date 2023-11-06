import express from 'express';
import {Book} from '../bookModules/booksSchema.js'
const router = express.Router();


router.post('/',async (req,res)=>{
    try{
        if(
            !req.body.title || !req.body.author || !req.body.publishYear 
        ){
            return res.status(400).send("fill all details")
        }

        const newBook ={
            title:req.body.title,
            author:req.body.author,
            publishyear:req.body.publishYear 
        }
       const book = await Book.create(newBook);
       return res.status(200).send(book);
    }catch(err){
        console.log(err.message);
        return response.status(500).send({message:err.message})
    }
})
router.get('/', async (req,res)=>{
    try{
  const books = await Book.find({})
  return res.status(200).json({
    count:books.length,
    data:books
  })
    }catch(err){
        console.log(err.message);
        return response.status(500).send({message:err.message})
    }
})
router.get('/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const books = await Book.findById(id);
          return res.status(200).json({
            count:books.length,
            data:books,
          })
    }catch(err){
        console.log(err.message);
        return res.status(500).send({message:err.message})
    }
})

router.put('/:id',async (req,res)=>{
    try{
        if(
            !req.body.title || !req.body.author || !req.body.publishYear 
        ){
            return res.status(404).send("fill all details")
        }
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body)
        if(!result){
            return res.status(404).json({message:"Book not found"})
        }
        return res.status(200).send({message:"Book Updated"})
    }
    catch(err){
        console.log(err.message)
        response.status(500).send({message:err.message});
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result){
            return res.status(400).json({message:"book not found"})
        }
        return res.status(200).json({message:" book deleted"})
    } catch(err){
        console.log(err.message);
        return res.status(500).send(err.message)
    }
})
export default router