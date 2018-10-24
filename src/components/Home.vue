<template>
  <div class="page-container">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">
    <div class="Navbar">
   <div class="Navbar__Link Navbar__Link-brand">
      <b> Transportadora Vhanana </b>
    </div>
    <div class="Navbar__Link Navbar__Link-toggle">
      <i class="fas fa-bars" @click="classToggle"></i>
    </div>
  <nav class="Navbar__Items">
    <div class="Navbar__Link">
            <i class="fas fa-car"></i>
      <a><router-link to="/Home/Catalogo">Catalogo de unidades</router-link></a>
    </div>
    <div class="Navbar__Link">
             <i class="fab fa-servicestack"></i>
            <a><router-link to="/Home/Servicios">Servicios</router-link></a>
    </div>
    <div class="Navbar__Link">
             <i class="fas fa-fingerprint"></i>
      <a><router-link to="/Home/Servicios">Quienes somos</router-link></a>
    </div>
  </nav>
  <nav class="Navbar__Items Navbar__Items--right">
     <div class="Navbar__Link">
             <i class="fas fa-envelope-open"></i>
      <a><router-link to="/Home/Contactanos">Contactanos</router-link></a>
    </div>
     <div class="Navbar__Link">
<i class="fas fa-location-arrow"></i>
      <a><router-link to="/Home/Contactanos">Ubicacion</router-link></a>
    
</div>

  </nav>
</div>
 <div class="contenido">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'PersistentMini',
   
    methods: {
      classToggle () {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow')); 
     }
    
    }
   
  }
</script>

<style lang="scss" scoped>
html,body{margin:0}
a{
  text-decoration: none;
  list-style: none;
  color: white;
}
.page-container{
max-width: 100%;
  margin-top: -60px;
  padding: 0 0 0 0%;
  clear: both;
}

 .Navbar {
  background-color:#198C19;
  display: flex;
  padding: 16px;
  font-family: sans-serif;
  color: white;
  font-family: 'Quicksand', sans-serif;
 

}

.Navbar__Link {
  margin-left: 8px;

}
.Navbar__Items {
  margin-left: 8px;
  display: flex;
  padding-right: 20px;
}
.Navbar__Items--right {
  margin-left:auto;
}
.Navbar__Link-toggle {
  display: none;
}
@media only screen and (max-width: 768px) {

  .Navbar__Items,
  .Navbar {
    flex-direction:column;
  }
.Navbar__Items {
    display:none;
    padding-bottom: 8px;
  }
.Navbar__Items--right {
    margin-left:0;
  }
.Navbar__ToggleShow {
    display: flex;
  }
.Navbar__Link-toggle {
    align-self:flex-start;
    display: initial;
    position: absolute;
    cursor: pointer;
   } 
}
   // Demo purposes only
  router-link{
    text-decoration: none;
  }
</style>