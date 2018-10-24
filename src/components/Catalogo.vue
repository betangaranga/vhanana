
<template>
 <div class="page-container">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
 <div class="galeria">
  <img class="image" v-for="(image, i) in images" :src="image">
  </div>
  </div>
</template>

<script>

import VueGallery from 'vue-gallery-slideshow';
  
  export default {
    data: function () {
      return {
        images: [
          'https://preview.ibb.co/bQVA8A/IMG-20181021-WA0064.jpg', 'https://preview.ibb.co/dVjsMV/IMG-20181021-WA0063.jpg', 'https://preview.ibb.co/d7MHoA/IMG-20181021-WA0062.jpg', 'https://preview.ibb.co/eZmTvq/IMG-20181021-WA0061.jpg', 'https://preview.ibb.co/fhGiTA/IMG-20181021-WA0060.jpg', 'https://preview.ibb.co/dfQXMV/IMG-20181021-WA0059.jpg', 'https://preview.ibb.co/coxOTA/IMG-20181021-WA0058.jpg', 'https://preview.ibb.co/jt7e1V/IMG-20181021-WA0057.jpg', 'https://preview.ibb.co/feFA8A/IMG-20181021-WA0056.jpg', 'https://preview.ibb.co/bwFXMV/IMG-20181021-WA0055.jpg', 'https://preview.ibb.co/kDaA8A/IMG-20181021-WA0054.jpg', 'https://image.ibb.co/m0eFaq/IMG-20181021-WA0051.jpg', 'https://preview.ibb.co/hHfcoA/IMG-20181021-WA0050.jpg', 'https://preview.ibb.co/iBSe1V/IMG-20181021-WA0049.jpg', 'https://preview.ibb.co/h3rvaq/IMG-20181021-WA0048.jpg', 'https://preview.ibb.co/i5Mvaq/IMG-20181021-WA0047.jpg', 'https://preview.ibb.co/fdnCMV/IMG-20181021-WA0046.jpg', 'https://preview.ibb.co/iFbTvq/IMG-20181021-WA0045.jpg', 'https://preview.ibb.co/kKqA8A/IMG-20181021-WA0044.jpg', 'https://preview.ibb.co/gLQcoA/IMG-20181021-WA0043.jpg', 'https://preview.ibb.co/czqA8A/IMG-20181021-WA0042.jpg', 'https://preview.ibb.co/fhegFq/IMG-20181021-WA0040.jpg', 'https://preview.ibb.co/mWN1Fq/IMG-20181021-WA0038.jpg', 'https://preview.ibb.co/jhO8vq/IMG-20181021-WA0037.jpg', 'https://preview.ibb.co/hAtf8A/IMG-20181021-WA0036.jpg', 'https://preview.ibb.co/muQtTA/IMG-20181021-WA0035.jpg', 'https://preview.ibb.co/mfkGgV/IMG-20181021-WA0017.jpg', 'https://preview.ibb.co/g3ktTA/IMG-20181021-WA0015.jpg', 'https://preview.ibb.co/e04noA/IMG-20181021-WA0011.jpg', 'https://preview.ibb.co/jmLhMV/IMG-20181021-WA0006.jpg', 'https://preview.ibb.co/eutQaq/IMG-20181021-WA0004.jpg', 'https://preview.ibb.co/nPvGgV/IMG-20181021-WA0002.jpg'
        ],
        index: 0
      };
    },
 methods: {
      onClick(i) {
        this.index = i;
      }
    }
  }
</script>

<style scoped>
.galeria{
  border-style: groove;
  position: relative;
  top: 5em;
  height:100%;
}
.image {
  width: 200px;
  height: 100%;
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>