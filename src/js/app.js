document.querySelector('.btn').addEventListener('click', (e) => {
  const button = e.target;
  const topGap = 12;
  /**
   * const {header, content} = button.dataset; - Не работает.....
   * Да потому, что в данном случае должно быть const {head, text} = button.dataset;. Это потому, что в index.html 
   * data-head="это какой-то заголовок" и 
   * data-text="получишь результат и какой-то поясняющий текст"
   * Но сразу так делать не стал - нужно переименовывать переменные head и text далее по проге, пересобирать и на AppVeyor тоже....
   */
  if (document.querySelector('.popup')) {
    document.querySelector('.popup').remove();
  } else {
    const head = document.createElement('div');
    head.className = 'head';
    const h4 = document.createElement('h4');
    h4.textContent = `${button.dataset.head}`;
    head.appendChild(h4);

    const text = document.createElement('div');
    text.className = 'text';
    const p = document.createElement('p');
    p.textContent = `${button.dataset.text}`;
    text.appendChild(p);

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.appendChild(head);
    popup.appendChild(text);
    const contain = document.querySelector('.container');
    contain.appendChild(popup);
    popup.style.left = `${button.offsetLeft + button.offsetWidth / 2 - popup.offsetWidth / 2}px`;
    popup.style.top = `${button.offsetTop - popup.offsetHeight - topGap}px`;
  }
});
