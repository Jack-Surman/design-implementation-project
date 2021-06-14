export default class HeaderScroll {
    constructor() {
        this.colorChangeScroll();
    }
    colorChangeScroll() {
        const headerElement = document.getElementById('header');
        const bodyWidth = document.querySelector('body').offsetWidth;
        window.addEventListener('scroll', () => {
            if (bodyWidth > 500) {
                if (window.scrollY > 50) {
                    headerElement.classList.add('scrollColorChange');
                } else {
                    headerElement.classList.remove('scrollColorChange');
                }
            }
        })
    }
}
