const coding = ["js" , "cpp" , "py"]

// for each return nhi kr paata 
const num = coding.forEach( (item) => {
      return item
})

// console.log(num)  //undefined....it means it will not return anything

//filter 
// return krta hai kuch
 const myNums = [ 2,4,6,7,9,10]

//  const newNums = myNums.filter( (item) => item>4)
// console.log(newNums)

// if want to use forEach only then
const newNums = []
myNums.forEach((item) => {
    if(item>4){
     newNums.push(item)}
})

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter((bk) => bk.genre === 'History')
  userBooks = books.filter((bk) => (bk.edition >=2000))
  console.log(userBooks)