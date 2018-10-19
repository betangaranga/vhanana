<template>
  <div class="page-container">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <div class="Navbar">
   <div class="Navbar__Link Navbar__Link-brand">
      Website title
    </div>
    <div class="Navbar__Link Navbar__Link-toggle">
      <i class="fas fa-bars" @click="classToggle"></i>
    </div>
  <nav class="Navbar__Items">
    <div class="Navbar__Link">
      Longer Link
    </div>
    <div class="Navbar__Link">
      Longer Link
    </div>
    <div class="Navbar__Link">
      Link
    </div>
  </nav>
  <nav class="Navbar__Items Navbar__Items--right">
    <div class="Navbar__Link">
      Link
    </div>
    <div class="Navbar__Link">
      Link
    </div>
  </nav>
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

.page-container{
max-width: 940px;
  margin-top: -60px;
  padding: 0 0 0 0%;
  clear: both;
}

 .Navbar {
  background-color: #46ACC2;
  display: flex;
  padding: 16px;
  font-family: sans-serif;
  color: white;
}
.Navbar__Link {
  padding-right: 8px;
}
.Navbar__Items {
  display: flex;
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
    flex-direction: column;
  }
.Navbar__Items {
    display:none;
  }
.Navbar__Items--right {
    margin-left:0;
  }
.Navbar__ToggleShow {
    display: flex;
  }
.Navbar__Link-toggle {
    align-self: flex-end;
    display: initial;
    position: absolute;
    cursor: pointer;
   } 
}
   // Demo purposes only
  
</style>