const bookCardTemplate = {
  wrap: '.j-catalog-list',
  tag: 'div',
  tagClass: 'member-card',
  setContent: function(data) {
  	console.log(data);
  	return `<h2 class="product-card-mini__title">
			  <a href="${data.link}">${data.name}</a>
			</h2>
			<a href="${data.link}" class="product-card-mini__img-wrap">
			  <img src="/img/book-store/books_all/${data.uri}.png" alt="Обложка книги" class="product-card-mini__img">
			</a>
			<p class="product-card-mini__descr">${data.desc}</p>
			<span class="product-card-mini__price">${data.price} &#8381;</span>`;
  }
}

export default bookCardTemplate;
