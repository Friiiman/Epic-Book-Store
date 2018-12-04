const bookCardTemplate = {
  wrap: '.j-catalog-list',
  tag: 'div',
  tagClass: 'member-card',
  setContent: function(data) {
  	return `<h2 class="product-card-mini__title">
				<a href="${data.titleLink}">${data.title}</a>
			</h2>
			<a href="${data.imgLink}" class="product-card-mini__img-wrap">
				<img src="${data.imgBook}" alt="Обложка книги: ${data.imgAlt}" class="product-card-mini__img">
			</a>
			<p class="product-card-mini__descr">${data.description}</p>
			<span class="product-card-mini__price">${data.price}&#8381;</span>`;
  }
}

export default bookCardTemplate;