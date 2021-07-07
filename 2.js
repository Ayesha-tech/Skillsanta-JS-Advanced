var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus:false
    }];





 const displaybooksTitles = (arr) => console.log(arr.map(({title}) => title));
 const displaybooksTitles1 = (arr) => console.log(arr.map(({author}) => author)) ;
 const displaybooksTitles2 =(arr) => console.log(arr.map(({readingStatus}) => readingStatus));

displaybooksTitles(library);
displaybooksTitles1(library);
displaybooksTitles2(library);