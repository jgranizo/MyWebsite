const modal= document.getElementById('sentimental-analysis-modal');
const modalclose = document.querySelector('.close');
const mlImage = document.querySelector('.rectangle-icon');

mlImage.addEventListener('click',()=>{
    modal.classList.add('show');
    modal.classList.remove('hide');
    modal.style.display = 'block';
})
