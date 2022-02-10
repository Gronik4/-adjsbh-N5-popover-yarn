document.getElementById('bn').addEventListener('click', (e) => {
  e.preventDefault();
  const show = document.querySelector('.show');
  if (show.style.display === 'block') {
    show.style.display = 'none';
  } else { show.style.display = 'block'; }
});
