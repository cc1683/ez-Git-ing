const topPart = document.querySelector('.eg-split-top');
const botPart = document.querySelector('.eg-split-bot');
const container = document.querySelector('.eg-header-container');

topPart.addEventListener('mouseenter', ()=> {
    container.classList.add('hover-top');
});

topPart.addEventListener('mouseleave', ()=> {
    container.classList.remove('hover-top');
});

botPart.addEventListener('mouseenter', ()=> {
    container.classList.add('hover-bot');
});

botPart.addEventListener('mouseleave', ()=> {
    container.classList.remove('hover-bot');
});