<template>
<div class="contenedor">

    <div class="menu">
<ul>
  <li>
    <p><router-link to="/Home/Catalogo">Catalogo</router-link></p>
</li>
         <li><router-link to="/Home/Conocenos">Conocenos</router-link>
         </li>



<li>
<p v-on:click="logout">Sarlir</p>
</li>
</ul>

    </div>
    <div class="contenido">
      <router-view></router-view>

    </div>
    <div class="footer">
      <span>{{datenow}}</span>
    </div>
  </div>
</template>

<script>


</script>

<style scoped>
</style>