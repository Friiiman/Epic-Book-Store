import $ from 'jquery';
import slick from './../../node_modules/slick-carousel/slick/slick.min.js';
import addToPage from './module/addToPage.js';
import bookCardTemplate from './module/bookCardTemplate.js';
import sendRequest from './module/sendRequest.js';
import svg4everybody from 'svg4everybody'

svg4everybody();

$(document).ready(function($){

  $('#form').submit(function(formSubmit) {
    formSubmit.preventDefault();
  });


  $('#burger').click(function(menuShow){
    $(this).toggleClass('main-nav__toggle--hide');
    $('#burger-close').toggleClass('main-nav__toggle--hide');
    $('.main-nav__list').toggleClass('main-nav__list--show');
  });

  $('#burger-close').click(function(menuHide){
    $(this).toggleClass('main-nav__toggle--hide');
    $('#burger').toggleClass('main-nav__toggle--hide');
    $('.main-nav__list').toggleClass('main-nav__list--show');
  });


  $('.j-slider').slick({
    infinite: false
  });

  $('.j-pages-slider').slick({
    infinite: false
  });


  $('.tabs__link').click(function(tabsActive) {
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active')
  });


  $('.pagination__link').click(function(paginationActive) {
    $('.pagination__link').removeClass('pagination__link--active');
    $(this).addClass('pagination__link--active')
  });


  $('.book-purchase__description-link').click(function(showMore) {
    showMore.preventDefault();
    $(this).toggleClass('book-purchase__description-link--hide');
    $('.book-purchase__description-text-more').toggleClass('book-purchase__description-text--hide');
    $('.book-purchase__description-link-more').toggleClass('book-purchase__description-link--hide');
  });

  $('.book-purchase__description-link-more').click(function(hideMore) {
    hideMore.preventDefault();
    $(this).toggleClass('book-purchase__description-link--hide');
    $('.book-purchase__description-text-more').toggleClass('book-purchase__description-text--hide');
    $('.book-purchase__description-link').toggleClass('book-purchase__description-link--hide');
  });

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
