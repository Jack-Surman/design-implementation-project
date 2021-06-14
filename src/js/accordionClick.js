export default class AccordionClick {
    constructor() {
        this.accordionClick();
    }
    accordionClick() {
        const accordionElements = document.querySelectorAll('.accordion-section-item');
        accordionElements.forEach((element) => {
            element.addEventListener('click', (e) => {
                const chevronEl = element.querySelector('i');
                const accordionContent = element.querySelector('.accordion-section-content');
                const accordionUnderline = element.querySelector('.accordion-section-underline');
                chevronEl.classList.toggle('fa-chevron-down');
                chevronEl.classList.toggle('fa-chevron-up');
                accordionContent.classList.toggle('hide');
                accordionUnderline.classList.toggle('hide');
            });
        });
    }
}
