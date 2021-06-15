export default class GalleryPages {
    constructor() {
        this.changePage();
        this.showImageText();
        this.showImages();
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
            });
        });
    }
    showImages() {
        const galleryImgCollections = document.querySelectorAll('.gallery-img');
        const galleryNavItems = document.getElementById('gallery-nav').querySelectorAll('button');
        const allWorksBtn = document.getElementById('gallery-button');
        allWorksBtn.addEventListener('click', () => {
            if (allWorksBtn.textContent === 'All works') {
                allWorksBtn.textContent = 'Less works';
            } else allWorksBtn.textContent = 'All works';
           galleryImgCollections.forEach(galleryCollection => {
              galleryCollection.classList.toggle('hide');
           });
        });
        galleryNavItems.forEach(navItem => {
            const navDataNum = navItem.dataset.num;
            navItem.addEventListener('click', () => {
                galleryImgCollections.forEach(galleryCollection => {
                    galleryCollection.classList.add('hide');
                    if (galleryCollection.dataset.num === navDataNum) {
                        galleryCollection.classList.remove('hide');
                    }
                })
            })
        })
    }
    showImageText() {
        const galleryElements = document.querySelectorAll('.gallery-img');
        galleryElements.forEach(gallery => {
            const galleryDivs = gallery.querySelectorAll('.gallery-img-el');
            galleryDivs.forEach(element => {
                element.addEventListener('mouseover', () => {
                    element.querySelector('.image-text').classList.add('changeVisibility');
                });
                element.addEventListener('mouseout', () => {
                    element.querySelector('.image-text').classList.remove('changeVisibility');
                });
            });
        })
    }
}
