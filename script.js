document.querySelectorAll('.feedback .rating span').forEach(mask => {
    mask.addEventListener('click', () => {
        let value = mask.getAttribute('data-value');
        document.querySelectorAll('.feedback .rating img').forEach((img, i) => {
            img.classList.toggle('active', i < value);
        });
    });
});