<template>
    <div class="conocenos_container">
     <div class="container-contact2">
        <h1 id="nuestra_mision-title">Nuestra Mision</h1>
        <p id="mision">Ser una empresa de  transporte terrestre que de manera segura y eficiente proporcione para sus clientes servicios de calidad, con rentabilidad y en armonía con nuestros colaboradores, la comunidad y el medioambiente.</p>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.conocenos_container{
    width: 100%;
    height: 58em;
    padding: 15px;
    background: #198C19;
    background: -webkit-linear-gradient(left, #198C19, #32cd32);
    background: -o-linear-gradient(left, #198C19, #32cd32);
    background: -moz-linear-gradient(left, #198C19, #32cd32);
    background: linear-gradient(left, #198C19, #32cd32);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.container-contact2 {
    width: 100%;
    height: 40%;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px 130px 88px 148px;
    position: relative;
    top: -30%;
   
  }
  #nuestra_mision-title{
width:100%;
  }
  #mision{
      text-align: center;
      width: 100%;
      text-align: justify;
  }
</style>
