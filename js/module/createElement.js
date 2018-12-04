function createElement(book, template) {
        const nodeElement = document.createElement(template.tag);
        nodeElement.classList.add(template.tagClass);

        if (template.href) {
        	nodeElement.setAttribute('href', template.href);
        }

        nodeElement.innerHTML = template.setContent(book);

   //      card.innerHTML = `<h2 class="product-card-mini__title">
			// 	<a href="${book.titleLink}">${book.title}</a>
			// </h2>
			// <a href="${book.imgLink}" class="product-card-mini__img-wrap">
			// 	<img src="${book.imgBook}" alt="Обложка книги: ${book.imgAlt}" class="product-card-mini__img">
			// </a>
			// <p class="product-card-mini__descr">${book.description}</p>
			// <span class="product-card-mini__price">${book.price}&#8381;</span>`;

        return nodeElement;
    }

    export default createElement;