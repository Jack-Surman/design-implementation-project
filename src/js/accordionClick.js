export default class AccordionClick {
    constructor() {
        this.accordionClick();
    }
    accordionClick() {
        const accordionElements = document.querySelectorAll('.accordion-section-item');
        accordionElements.forEach((element) => {
            element.addEventListener('click', (e) => {
                /** TODO: Good implementation. One little performance enhancement:
                 * Rather than going through every element in the item and hiding it.
                 * Just add one class to the item, and target the elements you want to hide in CSS
                 */
                const chevronEl = element.querySelector('i');
                const accordionContent = element.querySelectorAll('.accordion-section-content');
                const accordionUnderline = element.querySelector('.accordion-section-underline');
                chevronEl.classList.toggle('fa-chevron-down');
                chevronEl.classList.toggle('fa-chevron-up');
                accordionContent.forEach(el => {
                    el.classList.toggle('hide');
                })
                accordionUnderline.classList.toggle('hide');
            });
        });
    }
}
