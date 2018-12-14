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



