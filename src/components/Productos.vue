<template>

<div class="page-container-conocenos">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
  <section>
    <div class="intro">
  <h3>¡Conoce nuestras Unidades!</h3>
  </div>
  <div class="services-grid">
    <div class="service services" v-for="service in services">
      <h4>{{service.tipo}}</h4>
      <img id="imagen_catalogo" :src="service.imagen" alt="no image">
      <a href="#" class="cta">Conoce más <span class="ti-angle-right"></span></a>
    </div>

  </div>
</section>
  </div>
</template>

<script>
export default{
  data(){
    return{
      services:[
        {
          tipo:"Sedán",
          imagen:'../static/sedan.jpg'
        },
        {
          tipo:"SUV's",
          imagen:'../static/suv.jpg'
        },
        {
          tipo:"Pick Up's",
          imagen:'../static/pick-up.jpg'
        },
        {
          tipo:"Autobuses",
          imagen:'../static/bus.jpg'
        },
        {
          tipo:"Camionetas de lujo",
          imagen:'../static/camioneta_lujo.jpg'
        },
        {
          tipo:"VAN's",
          imagen:'../static/van.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans');
.intro{
  margin: 2.5em
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}
#imagen_catalogo{
  height: 13em;
  width: 100%;
  padding: 0
}
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  background: #fff;
  color: #999;
}

a {
  text-decoration: none;
  margin: 1rem 0;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8125rem;
  letter-spacing: 1px;
}

p {
  font-size: 0.9rem;
  margin: 1rem 0;
  line-height: 1.5;
}

section {
  margin: 0 auto;
  text-align: center;
  padding: 30px;
  width: 100%;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #333;
  font-size: 1.825rem;
  margin: 1.3rem 0;
}

.section-lead {
  max-width: 600px;
  margin: 1rem auto 1.5rem;
}

.service a {
  color: #0e3e74;
  display: block;
}

.service h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #198C19;
  font-size: 1.3rem;
  margin: .01em
}

.services-grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.service {
  background: #fff;
  margin: 20px;
  height: 30em;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #e7e7e7;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 100%
}

.service:hover {
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
}

.service i {
  font-size: 3.45rem;
  margin: 1rem 0;
}

.service1 i,
.service1 h4,
.service1 .cta {
    background:;
}

.service1:hover {
  border: 2px solid #42b7ca;
}

.service2 i,
.service2 h4,
.service2 .cta {
  color: #425fca;
}

.service2:hover {
  border: 2px solid #425fca;
}

.service4 i,
.service4 h4,
.service4 .cta {
  color: goldenrod;
}

.service4:hover {
  border: 2px solid goldenrod;
}
.service3 i,
.service3 h4,
.service3 .cta {
  color: red;
}

.service3:hover {
  border: 2px solid red;
}

.service .cta span {
  font-size: 0.6rem;
}

.service > * {
  flex: 1 1 100%;
}

.service .cta {
  align-self: flex-end;
}

@media all and (max-width:900px) {
  .service{
    height: 20em;
    width: 50%
  }
  .services-grid {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}
</style>
