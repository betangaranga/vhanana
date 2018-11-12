<template>

  <div id="app">
  <modal name="imagenes" :width="800"
         :height="100" pivotY	=".9"  >
    <img id="imagen_carros" v-for="sub in hola" v-bind:src="sub.src"  alt="que">

</modal>
    <p>Nuestras Unidades</p>
<div v-for= "(image,index) in images" id="car">
  <img id="imagen_carros"v-bind:src="image.src" @click="show(index)" alt="">
<div class="informacion">
<p>{{image.info}}</p>
</div>
</div>
  </div>
</template>

<script>

  export default {
  
    data(){
        return{
          hola:"",
          images : [
{
src:'https://preview.ibb.co/mpTUNq/versa.jpg',
info:'Versa 2017',
sub_images : [
 
  {
    src:'https://preview.ibb.co/gBvXaA/versa3.jpg'
  }
]
},
{
src:'https://preview.ibb.co/cc0LTV/camioneta.jpg',
info:'Camioneta Mercedes-Benz',
sub_images:[
  {
    src:'https://preview.ibb.co/kMvXaA/camioneta2.jpg'
  },
  {
    src:'https://preview.ibb.co/i1GuoV/camioneta3.jpg'
  }
]
},
{
src:'https://preview.ibb.co/dLUfTV/camion-blanco.jpg',
info:'Camión Blanco',
sub_images:[
  {
    src :'https://preview.ibb.co/fOAn8V/camion-blanco2.jpg'
  }
]
},

          ],
          options : {
            closeText : 'X',
            widthRatio:.8,
            enableKeyboard:true
            }
        }
      },
      methods:{
         beforeOpen (event) {
    console.log(event.params.hola);
    
  },
 show (index) {
    this.$modal.show('imagenes');
    this.hola=this.images[index].sub_images


  },
  hide () {
    this.$modal.hide('imagenes');
  }
      }
  }
</script>
<style scoped>

#car{
  border-style:ridge;
  margin: 1em;
  border-radius:1.5em;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
}
#imagen_carros{
  width: 30em;
  height: 30em;
  margin: 2em;
}
.informacion{
  border-style:solid;
  grid-column-start: 2;
  grid-column-end: 5;
  margin: 2em;
  
}
</style>

