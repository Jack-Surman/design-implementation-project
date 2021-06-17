export default class GalleryPages {
    constructor() {
        this.changePage();
        this.showImages();
    }
    changePage() {
        const galleryNav = document.getElementById('gallery-nav').querySelectorAll('button');
        galleryNav.forEach((button) => {
            button.addEventListener('click', (e) => {
                button.classList.remove('text-dark-bold');
                galleryNav.forEach((button) => {
                   button.classList.remove('text-dark-bold')
                    button.classList.add('text-grey');
                });
                button.classList.add('text-dark-bold');
                button.classList.remove('text-grey');
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
               if (galleryCollection.dataset.num === '1') {
                   galleryCollection.classList.toggle('hide');
               }
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
}
