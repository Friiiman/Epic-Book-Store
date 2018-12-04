import dataBooks from './module/dataBooks.js';
import addToPage from './module/addToPage.js';
import bookCardTemplate from './module/bookCardTemplate.js';

// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }

// ready(function(){

  if (document.querySelector(bookCardTemplate.wrap)) {
		
		addToPage(dataBooks.books, bookCardTemplate);
  }
  // console.log('DOM ready');
// });


