<template>
  <div id="app">
    <p>Nuestras Unidades</p>
<div class="galeria">
    <lightbox
      id="mylightbox"
      :images="images"
      :image_class=" imagen "
      :album_class=" 'my-album-class' "
      :options="options">
    </lightbox>
</div>
  </div>
</template>

<script>
  import Lightbox from 'vue-simple-lightbox'

  export default {
    components: {
      Lightbox
    },
    data(){
        return{
          images : [
           {
src:'https://preview.ibb.co/gBvXaA/versa3.jpg'
},
{
 src:'https://preview.ibb.co/fcZfTV/versa2.jpg'
},
{
src:'https://preview.ibb.co/mpTUNq/versa.jpg'
},
{
src:'https://preview.ibb.co/cc0LTV/camioneta.jpg'
},
{
src:'https://preview.ibb.co/kMvXaA/camioneta2.jpg'
},
{
src:'https://preview.ibb.co/i1GuoV/camioneta3.jpg'
},
{
src:'https://preview.ibb.co/dLUfTV/camion-blanco.jpg'
},
{
src:'https://preview.ibb.co/fOAn8V/camion-blanco2.jpg'
}
,
          ],
          options : {
            closeText : 'X',
            widthRatio:.8,
            enableKeyboard:true
            }
        }
      }
  }
</script>
<style scoped>
.galeria{
  border-style: groove;
  border-radius:.8em;
  margin: 2em;
  height:0%;
}
.imagen{
  border-block-end: 2em;
}

</style>

