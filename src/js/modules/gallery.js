document.querySelectorAll('.gallery__item').forEach(el => {
    el.addEventListener('mouseover', (e) => {
        document.querySelectorAll('.gallery__item').forEach(item => {
            if (item !== el) {
                item.style.filter = "grayscale(1)";
            } else {
                item.style.filter = "grayscale(0)";
            }
        });
    });

    el.addEventListener('mouseleave', (e) => {
        document.querySelectorAll('.gallery__item').forEach(item => {
            item.style.filter = "grayscale(0)";
        });
    });
});