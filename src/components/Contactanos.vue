<template>
  <div page_container-contacto>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <div class="info-redes">
      <p> ¡Conecta con nuestras redes sociales! </p>
<md-icon class="fab fa-facebook"></md-icon>
<md-icon class="fab fa-twitter"></md-icon>
<p>¿Prefieres contactarnos por telefono?</p>
<div class="tel">
<table id="telefono">
    <tr>
        <th>Gerencia</th>
        <th>Ventas</th>
    </tr>
    <tr>
        <th id="telefono-icono"><md-icon class="fas fa-phone"> <span id="tel"><b>01(993) 353 0555</b></span> </md-icon></th>
        <th id="telefono-icono"><md-icon class="fas fa-phone"> <span id="tel"><b>01(922) 113 4494</b></span> </md-icon></th>
    </tr>
    <tr>
        <th id="whats-icono"><md-icon class="fab fa-whatsapp"> <span id="tel"><b>993 120 7440</b></span> </md-icon></th>
        <th id="whats-icono"><md-icon class="fab fa-whatsapp"> <span id="tel"><b>992 113 4494</b></span> </md-icon></th>
    </tr>
</table>
</div>
    </div>
    <md-field>
      <md-icon>email</md-icon>
      <label><b>Tu correo electronico</b> </label>
      <md-input v-model="correo"></md-input>
    </md-field>

    <md-field>
              <md-icon>person</md-icon>

      <label><b>Nombre</b></label>
      <md-input v-model="nombre"></md-input>
    </md-field>
<div class="mensaje">
   <md-field>
      <md-icon>message</md-icon>
      <label><b>Mensaje</b></label>
      <md-textarea v-model="mensaje"></md-textarea>
    </md-field>
</div>
      <md-button class="md-raised md-accent"><b>Enviar</b></md-button>
</div>
  
</template>

<script>
  export default {
    name: 'FieldIcons',
    data: () => ({
      correo: null,
      nombre: null,
      mensaje: null
          })
  }
</script>

<style lang="scss" scoped>
#telefono{
    width: 100%;
    border:0;
    position: relative;
    right: -4.5em;

}
#telefono-icono{
    position: relative;
    right: -1.5em; 
}
#whats-icono{
    position: relative;
    right: -4em;
    padding: 0;
    top: -1.5em;
}
#gerencia{
    position: relative;
    top: -18px;
    color:#198C19;
}
#ventas{
      position: relative;
    top: -18px;
        right: -15px;

    color:#198C19;
}
.info-redes{
  font-family: 'Quicksand', sans-serif;

}
.fa-facebook{
    color:blue
}
.fa-twitter{
    color:aqua
}
.fa-phone{
position: relative;
right: 3.5em;
}
.fa-whatsapp{
position: relative;
top: 1em;
right: 4.5em;
}
.tel{
    position: relative;
    right: 4.5em;
}
#tel{
font-family: 'Quicksand', sans-serif;
font-size: .6em;

}

.md-field{
      font-family: 'Quicksand', sans-serif;
      padding: 35px;
}
.mensaje{
    border-style: double;
    width:100%;
}
  .md-field:last-child {
    margin-bottom: 40px;
  }
  .md-button{
      background-color: #198C19;
      color:white;
  }
  i{
      color: #198C19
  }
</style>