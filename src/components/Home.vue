<template>
 <div class="page-container">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">

    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Transportes Hanan</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Menu
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon class="fa fa-car"></md-icon>
            <span class="md-list-item-text"><router-link to="/Home/Catalogo">Catalogo</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon class="fa fa-question"></md-icon>
            <span class="md-list-item-text"><li><router-link to="/Home/Conocenos">¿Por qué nosotros?</router-link></li></span>
          </md-list-item>
          <md-list-item>
            <md-icon class="fas fa-bus-alt"></md-icon>
            <span class="md-list-item-text">Servicios</span>
          </md-list-item>
          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Contacto</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

 <md-app-content>
   
   <div>
                <router-view></router-view>
  </div>
 </md-app-content>
    </md-app>
  </div>
</template>

<script>


</script>

<style scoped>
  
</style>