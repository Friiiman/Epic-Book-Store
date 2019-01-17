import createElement from './createElement.js';
import bookCardTemplate from './bookCardTemplate.js';


function addToPage(dataArray, template) {
  // const booksArr = obj.books;
  const wrap = document.querySelector(bookCardTemplate.wrap);


  dataArray.forEach((book) => {
    const card = createElement(book, template);

    wrap.appendChild(card);
  })

}

export default addToPage;
