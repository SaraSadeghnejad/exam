const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
const redirects = {
  async redirects() {
    return [
   
      {   
        source: '/fa',
        destination: '/fa',
        permanent: true
      },
   


    ]; 
     
  } ,
  i18n
};

module.exports = withImages(redirects);
