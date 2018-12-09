// import dataBooks from './module/dataBooks.js';
import addToPage from './module/addToPage.js';
import bookCardTemplate from './module/bookCardTemplate.js';
import sendRequest from './module/sendRequest.js';


// Объект данных для запроса
const data = {
  page: 1,
  perpage: 8,
  type: ''
};

const wrap = document.querySelector(bookCardTemplate.wrap)

if (wrap) {
  const dataAjax = createDataAjax();

  sendRequest(dataAjax, function(responseObj){
    if (wrap.children) {
  	  wrap.innerHTML = '';
  	}

  	addToPage (responseObj.items, bookCardTemplate);
  });
}

// const dataAjax = createDataAjax();

// sendRequest(dataAjax, function(responseText) {

// 	const wrap = document.querySelector(bookCardTemplate.wrap)

//   	if (wrap.children) {
//   	  wrap.innerHTML = '';
//   	}

//   	if (document.querySelector(bookCardTemplate.wrap)) {
//   	  addToPage (request.items, bookCardTemplate);
//     }

//   console.log(responseText);
// });


// Слушатель на табы
const tabsWrap = document.querySelector('.j-tabs');
const tabsArray = Array.from(tabsWrap.children);

tabsArray.forEach(function(tab) {
  const link = tab.firstElementChild;

  link.addEventListener('click', function(event) {
  	event.preventDefault();
  	data.type = event.target.dataset.type;

  	const dataAjax = createDataAjax();

    sendRequest(dataAjax, function(responseObj){
      if (wrap.children) {
  	    wrap.innerHTML = '';
   	  }

  	  addToPage (responseObj.items, bookCardTemplate);
    });
  });
});


// Функция подготовки url для GET запроса
function createDataAjax () {
	if (window.matchMedia("(min-width: 768px)").matches) {
  	  data.perPage = 8;
  	} else {
  	  data.perPage = 3;
  	}

	return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
};


// Запрос данных
// function sendRequest(data) {
//   let xhr = new XMLHttpRequest;

//   xhr.open('GET', data);

//   xhr.send();

//   xhr.onreadystatechange = function() {
//   	if(xhr.readyState === 4 && xhr.status === 200) {
//   	  const request = JSON.parse(xhr.responseText);

//   	  console.log(request);

//   	  const wrap = document.querySelector(bookCardTemplate.wrap)

//   	  if (wrap.children) {
//   	    wrap.innerHTML = '';
//   	  }

//   	  if (document.querySelector(bookCardTemplate.wrap)) {
//   	    addToPage (request.items, bookCardTemplate);
//       }

//   	} else {
//   	  console.log(`Жду загрузки: + ${xhr.readyState}`);
//   	}
//   }
// };




