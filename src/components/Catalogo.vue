<template>

  <div id="app">
  <modal  name="imagenes" :width="600"
         :height="750" pivotY	=".5"  >
         <div class="info_carros">
          <div class="imagen_grande">
            <img id="imagen_grande" v-bind:src="imagen_grande" alt="">

          </div>

           <div id="info_carros">
             <h3>{{titulo}}</h3>
           </div>
<div class="subimagenes_carros">
  <img id="subimagenes_carros" v-for="(sub,index) in sub_imagenes" v-bind:src="sub.src" alt="sin imagen" @click="cambiar(index)">
</div>
         </div>

</modal>
    <h2>Nuestras Unidades</h2>
<div>
  <img id="imagen_carros" v-for="(image,index) in images" v-bind:src="image.src" @click="show(index)" alt="">

</div>
  </div>
</template>

<script>

  export default {
  
    data(){
        return{
          index_img:"",
          imagen_grande:"",
          sub_imagenes:"",
          titulo:"",
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
    this.titulo=this.images[index].info;
    this.sub_imagenes=this.images[index].sub_images;
    this.imagen_grande=this.images[index].src;
    this.index_img=index;


  },
  cambiar(index){
    this.imagen_grande=this.images[this.index_img].sub_images[index].src
  },
  hide () {
    this.$modal.hide('imagenes');
  }
      }
  }
</script>
<style scoped>
h3{
  text-align: center;
}
.info_carros{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3,1fr);
  grid-template-columns: repeat(3,1fr);
}
#info_carros{
  grid-row:1/3;
  grid-column: 3/4;
}
.subimagenes_carros{
    grid-row: 3;
    grid-column: 1/4;
}
#subimagenes_carros{
  width: 33%;
  height: 100%;
  padding: 1em;
}
.imagen_grande{
  grid-row:1/3;
  grid-column: 1/3;
}
#imagen_grande{
  width: 90%;
  height: 90%;
  margin: 1em
}
#imagen_carros{
  width: 30em;
  height: 30em;
  margin: 2em;
}

</style>

