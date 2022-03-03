document.getElementById('bn').addEventListener('click', (e) => {
  e.preventDefault();
  if (document.querySelector('.popup')) {
    const show = document.querySelector('.popup');
    if (!show.hasAttribute('hidden')) {
      show.setAttribute('hidden', 'hidden');
    } else {show.removeAttribute('hidden');}
  } else {
    const button = document.getElementById('bn');

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

    const message = document.createElement('div');
    message.className = 'popup';
    message.style.top = `${button.offsetTop - 132}px`;
    message.style.left = `${button.offsetLeft}px`;
    message.appendChild(head);
    message.appendChild(text);
    const contain = document.querySelector('.container');
    contain.appendChild(message);
  } 
});
