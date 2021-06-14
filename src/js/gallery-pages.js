export default class GalleryPages {
    constructor() {
        this.changePage();
    }
    changePage() {
        const galleryNav = document.getElementById('gallery-nav').querySelectorAll('button');
        galleryNav.forEach((button) => {
            button.addEventListener('click', (e) => {
                button.classList.remove('text-dark-bold');
                galleryNav.forEach((button) => {
                   button.classList.remove('text-dark-bold')
                    button.classList.add('text-gray');
                });
                button.classList.add('text-dark-bold');
                button.classList.remove('text-gray');
                const buttonNum = Number(e.target.dataset.num);
                this.changeImage(buttonNum);
            });
        });
    }
    changeImage(buttonNum) {
        const imageElements = document.getElementById('gallery-img').querySelectorAll('img');
        imageElements.forEach((image) => {
            let imgNum = Number(image.dataset.num);
            if (buttonNum === 2) {
                imgNum = imgNum + 3;
            } else if (buttonNum === 3) {
                imgNum = imgNum + 3 * (buttonNum - 1);
            } else if (buttonNum === 4) {
                imgNum = imgNum + 3 * (buttonNum - 1);
            } else if (buttonNum === 5) {
                imgNum = imgNum + 3 * (buttonNum - 1);
            }
            image.setAttribute('src', `/img/gallery-img-${imgNum}.PNG`);
        });
    }
}
