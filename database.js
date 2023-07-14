const books= [
  {
    ISBN:"1234book",
    title:"Tesla!!",
    pubDAte:"2021-08-05",
    language:"en",
    numPage: 250,
    author:[1,2],
    publication:[1],
    category:["tech","space","education"]
  }
]

const author =[
  {
    id:1,
    name:"Aradhna",
    books:["1234book","SecretBook"]
  },
  {
    id:2,
    name: "Elon Musk",
    books : ["1234book"]
  }
]

const publication =[
  {
    id:1,
    name:"writex",
    books:["1234book"]
  }
]

module.exports={books,author,publication};
