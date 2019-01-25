const bookCardTemplate = {
  wrap: '.j-catalog__list',
  tag: 'article',
  tagClass: 'member-card',
  setContent: function(data) {
    // console.log(data);
    return `<a href="bookInner.html" class="product-card-mini__inner">
              <div class="product-card-mini">
                <h2 class="product-card-mini__title">${data.name}</h2>
                <div class="product-card-mini__img-wrap">
                  <img src="img/book-store/books_all/${data.uri}.png" alt="Обложка книги" class="product-card-mini__img">
                </div>
                <p class="product-card-mini__descr">${data.desc}</p>
                <span class="product-card-mini__price">${data.price} &#8381;</span>
              </div>
            </a>`;
  }
}

export default bookCardTemplate;
