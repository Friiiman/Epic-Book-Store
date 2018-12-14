function createElement(book, template) {
  const nodeElement = document.createElement(template.tag);
  nodeElement.classList.add(template.tagClass);

    if (template.href) {
      nodeElement.setAttribute('href', template.href);
    }

  nodeElement.innerHTML = template.setContent(book);

  return nodeElement;
}

export default createElement;