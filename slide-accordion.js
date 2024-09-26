export default class SlideAccordion {
    /**
     * @classdesc Accordion functionality with slide animation using GSAP 3.x JavaScript
     */
    constructor() {
        this.init();
        this.onClick();
    }
    /**
     * @description Retrieval and setting of elements
     */
    init() {
        this.target = document.querySelectorAll('');
        this.content = document.querySelectorAll('');
        this.duration = 0.4;
    }
    /**
     * @description When the target is clicked, a slide animation is triggered
     */
    onClick() {
        for (let i = 0; i < this.target.length; i++) {
            this.target[i].addEventListener('click', () => {
                if (this.target[i].classList.contains('is-active')) {
                    this.target[i].classList.remove('is-active');
                    gsap.to(this.content[i], {
                        duration: this.duration,
                        height: 0,
                    });
                }
                else {
                    this.target[i].classList.add('is-active');
                    gsap.to(this.content[i], {
                        duration: this.duration,
                        height: 'auto',
                    });
                }
            });
        }
    }
}
