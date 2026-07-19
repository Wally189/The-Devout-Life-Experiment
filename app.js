window.DEVOUT = window.DEVOUT || {};

document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';

  if (page !== 'crisis.html') {
    document.querySelectorAll('.resume').forEach((box) => box.remove());
  }

  document.querySelectorAll('.prayer-strip').forEach((block) => {
    if (!block.querySelector('.sign-of-cross.opening')) {
      const opening = document.createElement('p');
      opening.className = 'sign-of-cross opening';
      opening.textContent = 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.';
      block.prepend(opening);
    }
    if (!block.querySelector('.sign-of-cross.closing')) {
      const closing = document.createElement('p');
      closing.className = 'sign-of-cross closing';
      closing.textContent = 'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.';
      block.append(closing);
    }
  });
});