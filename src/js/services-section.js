export default class ServicesSection {
    constructor() {
        this.highlightService();
    }
    highlightService() {
        const serviceElements = document.querySelectorAll('.services-items-item');
        serviceElements.forEach(service => {
            service.addEventListener('mouseover', () => {
                service.querySelector('.underline').classList.add('changeVisibility');
            });
            service.addEventListener('mouseout', () => {
                service.querySelector('.underline').classList.remove('changeVisibility');
            });
        });
    }
}
