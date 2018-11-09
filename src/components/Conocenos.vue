<template>
  <div class="conocenos_container">
    <div class="container-contact3">
        <div class="mision">
      <h1 id="mision_title"> Misión</h1>
      <p id="mision">Ser una empresa de  transporte terrestre que de manera segura y eficiente proporcione para sus
        clientes servicios de calidad, con rentabilidad y en armonía con nuestros colaboradores, la comunidad y el
        medioambiente.</p>
        </div>
        <div class="vision">
      <h1 id="vision_title"> Visión</h1>
      <p id="vision">Convertirse en la empresa líder de la industria del transporte terrestre logrando una mayor
        calidad en todos nuestros servicios, propiciando confianza y permanencia en nuestros clientes, satisfacción y
        orgullo para quienes la integramos, respetando siempre el entorno social.</p>
</div>
 <div class="equipo">
      <h1 id="vision_title"> Conoce a nuestro equipo</h1>
     
</div>

    </div>
    
  </div>
  
</template>
<script>
  export default {
  }
</script>
<style lang="scss" scoped>
  .conocenos_container {
    width: 100%;
    height: 65em;
    padding: 15px;
    background: #198C19;
    background: -webkit-linear-gradient(left, #198C19, #32cd32);
    background: -o-linear-gradient(left, #198C19, #32cd32);
    background: -moz-linear-gradient(left, #198C19, #32cd32);
    background: linear-gradient(left, #198C19, #32cd32);
  }
  .container-contact3 {
    width: 80%;
    height: 90%;
    background: white;
    border-radius: 10px;
    margin: auto;
  }
  h1 {
    text-align: center;
    padding-top: .5em;
  }
  p {
    text-align: center;
    width: 100%;
    text-align: justify;
    padding: 1em;
}
.mision{
animation-duration: 3s;
animation-name: mision;
}
.vision{
    animation-duration: 3s;
    animation-delay: 3s;
    animation-name: vision;
     animation-fill-mode: both;
  }
  @keyframes mision {
    from {
      margin-left: 100%;
      width: 300%
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  @keyframes vision {
    from {
      margin-left: 130%;
      width: 400%
    }
    to {
      margin-left: 0%;
      width: 100%;
      margin-top: 0;
    }
  }
  @media (max-width: 768px) {
    .container-contact3 {
      height: 40em;
    }
  }
</style>