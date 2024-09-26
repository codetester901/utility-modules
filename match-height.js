export default class MatchHeight {
    /**
     * @classdesc Functionality to equalize the height of horizontally aligned elements
     */
    constructor() {
        this.init();
        this.onResize();
    }
    /**
     * @description Retrieves elements and applies styles
     */
    init() {
        this.target = document.querySelectorAll('.js-match-height');
        this.targetHeightList = [];
        for (let i = 0; i < this.target.length; i++) {
            const height = this.target[i].clientHeight;
            this.targetHeightList.push(height);
        }
        // Expands the array as an argument and finds the maximum value
        const maxHeight = Math.max.apply(null, this.targetHeightList);
        for (let i = 0; i < this.target.length; i++) {
            this.target[i].style.height = maxHeight + 'px';
        }
    }
    /**
     * @description Resize event
     */
    onResize() {
        window.addEventListener('resize', () => {
            for (let i = 0; i < this.target.length; i++) {
                this.target[i].removeAttribute('style');
            }
            this.init();
        });
    }
}
