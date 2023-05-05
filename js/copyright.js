const year = new Date().getFullYear();
const copyright = document.querySelector('.copyright');
const date = `© Copyright Телега, ${year}`;

copyright.insertAdjacentText('beforeend', date);