export default class SmoothScroll {
  /**
   * @classdesc Custom smooth scroll functionality
   */
  constructor() {
    this.init();
    this._getBuffer();
    this.onScroll();
    this.onResize();
  }
  
  /**
   * @description Initializes class member variables
   */
  init() {
    this.clickElm = document.querySelectorAll('.js-smooth-scroll');
    this.targetId = null;
    this.targetElm = null;
    this.headerLength = 0;
    this.rectTop = 0;
    this.offsetTop = 0;
    this.top = 0;
    this.buffer = 0;
  }
  
  /**
   * @description Retrieves the buffer
   */
  _getBuffer() {
    this.headerLength = document.querySelector('').clientHeight;
    this.buffer = this.headerLength;
  }
  
  /**
   * @description Triggers smooth scroll when the target is clicked
   */
  onScroll() {
    [...this.clickElm].forEach((target) => {
      target.addEventListener('click', (e) => {

        // Disable the default event
        e.preventDefault();

        // Retrieve target ID and element
        this.targetId = target.hash;
        this.targetElm = document.querySelector(this.targetId);

        // Distance from the top of the viewport to the element
        this.rectTop = this.targetElm.getBoundingClientRect().top;

        // Current scroll distance
        this.offsetTop = window.pageYOffset;

        // Distance from the top of the viewport to the element + current scroll distance - header height
        this.top = this.rectTop + this.offsetTop - this.buffer;

        window.scrollTo({
          top: this.top,
          behavior: "smooth"
        });
      });
    });
  }
  
  /**
   * @description Resize event
   */
  onResize() {
    window.addEventListener('resize', () => {
      this._getBuffer();
    });
  }
}
