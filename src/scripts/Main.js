import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }
  init() {
    Icons.load();
    this.initSwiper();
  }
  initSwiper() {
    const target = document.querySelector('.js-swiper');
    if (target) {
      const swiper = new Swiper(target, {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
}
new Main();
