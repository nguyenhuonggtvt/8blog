import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Tắt tự động thêm CSS vì đã import thủ công ở trên
config.autoAddCss = false;

library.add(faBars, faUser, faFacebook, faTwitter);

export default defineNuxtPlugin((nuxtApp) => {
  // Đăng ký FontAwesomeIcon như một global component
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
})
