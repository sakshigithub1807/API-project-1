const express = require("express");
//Database
const database = require("./database"); //slash dot means its in same folder
//Initialise
const booky = express();
 /*
Route          /
Description     Get all the books
Access          PUBLIC
Parameter       NONE
Methods         GET
 */

booky.get("/",(req,res)=> {
  return res.json({books:database.books});
});

/*
Route          /is
Description     Get specific book on ISBN
Access          PUBLIC
Parameter       isbn
Methods         GET
*/
booky.get("/is/:isbn",(req,res)=> {
  const getSpecificBook = database.books.filter (
    (book) => book.ISBN === req.params.isbn
  );
  if(getSpecificBook.length === 0) {
    return res.json({error:`No book found for the ISBN of ${req.params.isbn}`});//as its chaning dynamilcly used dolar sighn and curly bracet and withnthat used back tick
  }
  return res.json({book: getSpecificBook});
});

/*
Route          /c
Description     Get specific book on catageory
Access          PUBLIC
Parameter       category
Methods         GET
*/

booky.get("/c/:category", (req,res) => {
  const getSpecificBook = database.books.filter(
    (book) =>book.category.includes(req.params.category)
  );
  if(getSpecificBook.length === 0){
    return res.json({erro: `No book found for the cateogory of ${req.params.category}`})
  }
  return res.json({book: getSpecificBook});
});

/*
Route          /la
Description     Get specific book on language
Access          PUBLIC
Parameter       language
Methods         GET
*/

booky.get("/la/:language",(req,res)=>{
  const getSpecificBook =database.books.filter(
    (book) => book.language === req.params.language
  );

  if(getSpecificBook.length ===0){
    return res.json({error:`No book found for the language of${req.params.language}`})
  }
  return res.json({books:getSpecificBook})
});

/*
Route          /author
Description     Get all the authors
Access          PUBLIC
Parameter       NONE
Methods         GET
*/

booky.get("/author",(req,res)=>{
  return res.json({authors:database.author});
});

/*
Route          /a
Description     Get a specific author
Access          PUBLIC
Parameter       author
Methods         GET
*/
booky.get("/a/:author",(req,res)=> {
  const getSpecificAuthor = database.author.filter(
    (author) => author.name === req.params.author
  );
  if (getSpecificAuthor.length === 0) {
      return res.json({error:`No book found for the author of ${req.params.author}`})
  }
  return res.json({books:getSpecificAuthor})
});

/*
Route          /pub/boo
Description     Get a list of publication based on book
Access          PUBLIC
Parameter       author
Methods         GET
*/
booky.get("/pub/boo/:books",(req,res) =>{
  const getSpecificPublication = database.publication.filter(
    (publication) => publication.books.includes(req.params.books)
  );
  if (getSpecificPublication.length === 0) {
    return res.json({error:`No book found for the publication of ${req.params.books}`})
  }
  return res.json({books:getSpecificPublication})
});


booky.listen(3000,() => {
  console.log("server is up and running");
});
