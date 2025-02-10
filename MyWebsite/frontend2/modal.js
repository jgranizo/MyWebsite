document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('sentimental-analysis-modal');
    const modalClose = document.querySelector('.close');
    const mlImage = document.querySelector('.rectangle-icon');

    if (modal && modalClose && mlImage) {
        mlImage.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            modal.style.display = 'block';
        });

        modalClose.addEventListener('click', () => {
            modal.classList.add('hide');
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.add('hide');
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
        });
    }
});
