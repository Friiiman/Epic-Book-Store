// Функция подготовки url для GET запроса

const data = {
  page: 1,
  perpage: 8,
  type: ''
};

function createDataAjax () {
  if (window.matchMedia("(min-width: 768px)").matches) {
      data.perPage = 8;
    } else {
      data.perPage = 3;
    }

  return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
};

export default createDataAjax
