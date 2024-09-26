class checkDevice {
  /**
   * @classdesc Browser and device detection functionality
   */
  constructor() {
    const ua = navigator.userAgent.toLowerCase();

    this.sp = ua.indexOf('iphone') !== -1 || ua.indexOf('android') !== -1 && ua.indexOf('mobile') !== -1;

    this.ipad = ua.indexOf('ipad') !== -1 || (ua.indexOf('macintosh') !== -1 && 'ontouchend' in document);

    this.tab = !this.sp && (this.ipad || ua.indexOf('android') !== -1);

    this.touch = ('ontouchend' in document);

    this.msie = ua.indexOf('msie') !== -1 || ua.indexOf('trident') !== -1;

    this.edge = ua.indexOf('edge') !== -1;

    this.safari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;

    this.android = ua.indexOf('android') !== -1;
  }

  /**
   * @description Returns true if the device is a smartphone (SP device)
   */
  isSp() {
    if (this.sp) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description Returns true if the device is an Android
   */
  isAndroid() {
    if (this.android) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description Returns true if the device is a tablet
   */
  isTab() {
    if (this.tab) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description Returns true if touch events are supported
   */
  isTouch() {
    if (this.touch) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description Returns true if the browser is Internet Explorer (IE)
   */
  isMSIE() {
    if (this.msie) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description Returns true if the browser is Microsoft Edge
   */

  isEdge() {
    if (this.edge) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
   * @description Returns true if the browser is Safari
   */

  isSafari() {
    if (this.safari) {
      return true;
    }
    else {
      return false;
    }
  }
}

const CheckDevice = new checkDevice();
export default CheckDevice;
