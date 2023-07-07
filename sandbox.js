const contactButton = document.querySelector('.contact-button');
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close');

contactButton.addEventListener('click', () =>{
    popup.style.display = 'block';
});

close.addEventListener('click', () =>{
    popup.style.display = 'none';
});

//Contact form data

