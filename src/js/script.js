import $ from './../../node_modules/jquery/dist/jquery.min.js';
// import slick from './../../node_modules/slick-carousel/slick/slick.js';
import addToPage from './module/addToPage.js';
import bookCardTemplate from './module/bookCardTemplate.js';
import sendRequest from './module/sendRequest.js';
import svg4everybody from 'svg4everybody';

$(document).ready(function(jqueryFunctions){

  $('#burger').click(function(menuShow){
    $(this).toggleClass('burger-hide');
    $('#burger-close').toggleClass('burger-hide');
    $('.main-nav__list').toggleClass('menu-open');
  });

  $('#burger-close').click(function(menuHide){
    $(this).toggleClass('burger-hide');
    $('#burger').toggleClass('burger-hide');
    $('.main-nav__list').toggleClass('menu-open');
  });


  $('.tabs-link').click(function(tabsActive) {
    $('.tabs-link').removeClass('tabs-link--active');
    $(this).addClass('tabs-link--active')
  });


  $('.pagination__link').click(function(paginationActive) {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active')
  });


  $('.book-purchase__description-link-show').click(function() {
    event.preventDefault();
    $(this).toggleClass('text-hide');
    $('.book-purchase__description-text-more').toggleClass('text-hide');
    $('.book-purchase__description-link-hide').toggleClass('text-hide');
  });

  $('.book-purchase__description-link-hide').click(function() {
    event.preventDefault();
    $(this).toggleClass('text-hide');
    $('.book-purchase__description-text-more').toggleClass('text-hide');
    $('.book-purchase__description-link-show').toggleClass('text-hide');
  });

  // $('.j-slider').slick({
  // });

});

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
const tabsArray = Array.prototype.slice.call(tabsWrap.children);

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
