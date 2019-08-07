<template>
  <div page_container-contacto>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
      crossorigin="anonymous">

    <head>
      <title>Contact V1</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!--===============================================================================================-->
    </head>

    <body>

      <div class="contact1">
        <div class="container-contact1">
          <div class="contact1-pic js-tilt" data-tilt>
            <div class="redes">
              <p id="redes"><b>Nuestras Redes Sociales</b> </p>
              <img id="face" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MDguNzg4IDQwOC43ODgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwOC43ODggNDA4Ljc4ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM0NzU5OTM7IiBkPSJNMzUzLjcwMSwwSDU1LjA4N0MyNC42NjUsMCwwLjAwMiwyNC42NjIsMC4wMDIsNTUuMDg1djI5OC42MTZjMCwzMC40MjMsMjQuNjYyLDU1LjA4NSw1NS4wODUsNTUuMDg1ICBoMTQ3LjI3NWwwLjI1MS0xNDYuMDc4aC0zNy45NTFjLTQuOTMyLDAtOC45MzUtMy45ODgtOC45NTQtOC45MmwtMC4xODItNDcuMDg3Yy0wLjAxOS00Ljk1OSwzLjk5Ni04Ljk4OSw4Ljk1NS04Ljk4OWgzNy44ODIgIHYtNDUuNDk4YzAtNTIuOCwzMi4yNDctODEuNTUsNzkuMzQ4LTgxLjU1aDM4LjY1YzQuOTQ1LDAsOC45NTUsNC4wMDksOC45NTUsOC45NTV2MzkuNzA0YzAsNC45NDQtNC4wMDcsOC45NTItOC45NSw4Ljk1NSAgbC0yMy43MTksMC4wMTFjLTI1LjYxNSwwLTMwLjU3NSwxMi4xNzItMzAuNTc1LDMwLjAzNXYzOS4zODloNTYuMjg1YzUuMzYzLDAsOS41MjQsNC42ODMsOC44OTIsMTAuMDA5bC01LjU4MSw0Ny4wODcgIGMtMC41MzQsNC41MDYtNC4zNTUsNy45MDEtOC44OTIsNy45MDFoLTUwLjQ1M2wtMC4yNTEsMTQ2LjA3OGg4Ny42MzFjMzAuNDIyLDAsNTUuMDg0LTI0LjY2Miw1NS4wODQtNTUuMDg0VjU1LjA4NSAgQzQwOC43ODYsMjQuNjYyLDM4NC4xMjQsMCwzNTMuNzAxLDB6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
              <img id="face" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTAuMTU1IDQxMC4xNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxMC4xNTUgNDEwLjE1NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM3NkE5RUE7IiBkPSJNNDAzLjYzMiw3NC4xOGMtOS4xMTMsNC4wNDEtMTguNTczLDcuMjI5LTI4LjI4LDkuNTM3YzEwLjY5Ni0xMC4xNjQsMTguNzM4LTIyLjg3NywyMy4yNzUtMzcuMDY3ICBsMCwwYzEuMjk1LTQuMDUxLTMuMTA1LTcuNTU0LTYuNzYzLTUuMzg1bDAsMGMtMTMuNTA0LDguMDEtMjguMDUsMTQuMDE5LTQzLjIzNSwxNy44NjJjLTAuODgxLDAuMjIzLTEuNzksMC4zMzYtMi43MDIsMC4zMzYgIGMtMi43NjYsMC01LjQ1NS0xLjAyNy03LjU3LTIuODkxYy0xNi4xNTYtMTQuMjM5LTM2LjkzNS0yMi4wODEtNTguNTA4LTIyLjA4MWMtOS4zMzUsMC0xOC43NiwxLjQ1NS0yOC4wMTQsNC4zMjUgIGMtMjguNjcyLDguODkzLTUwLjc5NSwzMi41NDQtNTcuNzM2LDYxLjcyNGMtMi42MDQsMTAuOTQ1LTMuMzA5LDIxLjktMi4wOTcsMzIuNTZjMC4xMzksMS4yMjUtMC40NCwyLjA4LTAuNzk3LDIuNDgxICBjLTAuNjI3LDAuNzAzLTEuNTE2LDEuMTA2LTIuNDM5LDEuMTA2Yy0wLjEwMywwLTAuMjA5LTAuMDA1LTAuMzE0LTAuMDE1Yy02Mi43NjItNS44MzEtMTE5LjM1OC0zNi4wNjgtMTU5LjM2My04NS4xNGwwLDAgIGMtMi4wNC0yLjUwMy01Ljk1Mi0yLjE5Ni03LjU3OCwwLjU5M2wwLDBDMTMuNjc3LDY1LjU2NSw5LjUzNyw4MC45MzcsOS41MzcsOTYuNTc5YzAsMjMuOTcyLDkuNjMxLDQ2LjU2MywyNi4zNiw2My4wMzIgIGMtNy4wMzUtMS42NjgtMTMuODQ0LTQuMjk1LTIwLjE2OS03LjgwOGwwLDBjLTMuMDYtMS43LTYuODI1LDAuNDg1LTYuODY4LDMuOTg1bDAsMGMtMC40MzgsMzUuNjEyLDIwLjQxMiw2Ny4zLDUxLjY0Niw4MS41NjkgIGMtMC42MjksMC4wMTUtMS4yNTgsMC4wMjItMS44ODgsMC4wMjJjLTQuOTUxLDAtOS45NjQtMC40NzgtMTQuODk4LTEuNDIxbDAsMGMtMy40NDYtMC42NTgtNi4zNDEsMi42MTEtNS4yNzEsNS45NTJsMCwwICBjMTAuMTM4LDMxLjY1MSwzNy4zOSw1NC45ODEsNzAuMDAyLDYwLjI3OGMtMjcuMDY2LDE4LjE2OS01OC41ODUsMjcuNzUzLTkxLjM5LDI3Ljc1M2wtMTAuMjI3LTAuMDA2ICBjLTMuMTUxLDAtNS44MTYsMi4wNTQtNi42MTksNS4xMDZjLTAuNzkxLDMuMDA2LDAuNjY2LDYuMTc3LDMuMzUzLDcuNzRjMzYuOTY2LDIxLjUxMyw3OS4xMzEsMzIuODgzLDEyMS45NTUsMzIuODgzICBjMzcuNDg1LDAsNzIuNTQ5LTcuNDM5LDEwNC4yMTktMjIuMTA5YzI5LjAzMy0xMy40NDksNTQuNjg5LTMyLjY3NCw3Ni4yNTUtNTcuMTQxYzIwLjA5LTIyLjc5MiwzNS44LTQ5LjEwMyw0Ni42OTItNzguMjAxICBjMTAuMzgzLTI3LjczNywxNS44NzEtNTcuMzMzLDE1Ljg3MS04NS41ODl2LTEuMzQ2Yy0wLjAwMS00LjUzNywyLjA1MS04LjgwNiw1LjYzMS0xMS43MTJjMTMuNTg1LTExLjAzLDI1LjQxNS0yNC4wMTQsMzUuMTYtMzguNTkxICBsMCwwQzQxMS45MjQsNzcuMTI2LDQwNy44NjYsNzIuMzAyLDQwMy42MzIsNzQuMThMNDAzLjYzMiw3NC4xOHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
            </div>
            <div class="tel">
              <table id="telefono">
                <tr>
                  <th>Gerencia</th>
                  <th>Ventas</th>
                </tr>
                <tr>
                  <th id="telefono-icono1">
                    <md-icon class="fas fa-phone"> <span id="tel"><b>01(993) 353 0555</b></span> </md-icon>
                  </th>
                  <th id="telefono-icono2">
                    <md-icon class="fas fa-phone"> <span id="tel"><b>01(922) 113 4494</b></span> </md-icon>
                  </th>
                </tr>
                <tr>
                  <th id="whats-icono1">
                    <md-icon class="fab fa-whatsapp"> <span id="tel"><b>993 120 7440</b></span> </md-icon>
                  </th>
                  <th id="whats-icono2">
                    <md-icon class="fab fa-whatsapp"> <span id="tel"><b>992 113 4494</b></span> </md-icon>
                  </th>
                </tr>
              </table>
            </div>
            <div class="domicilio">
              <p><b></b></p>
             
            </div>
          </div>

          <form class="contact1-form validate-form">
            <span class="contact1-form-title">
              ¡Mándanos un mensaje!
            </span>

            <div class="wrap-input1 validate-input" data-validate="Se requiere nombre">
              <input class="input1" type="text" name="name" placeholder="Nombre">
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="Correo valido es requerido: ejemplo@abc.xyz">
              <input class="input1" type="text" name="email" placeholder="Email">
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="Es necesario el Asunto">
              <input class="input1" type="text" name="subject" placeholder="Asunto">
              <span class="shadow-input1"></span>
            </div>

            <div class="wrap-input1 validate-input" data-validate="Se requiere un cuerpo en el mensaje">
              <textarea class="input1" name="message" placeholder="Mensaje"></textarea>
              <span class="shadow-input1"></span>
            </div>

            <div class="container-contact1-form-btn">
              <button class="contact1-form-btn">
                <span>
                  Enviar
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

    </body>

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

<style lang="css" scoped>
.domicilio{
  position: relative;
  top: 5em;
}
  .redes {
    position: relative;
    right: -1em;
  }

  #telefono {
    width: 100%;
    border: 0;
    position: relative;
    right: -5em;
  }

  #face {
    width: 5em;
    padding: .5em;
  }

  .tel {
    position: relative;
    right: 4.5em;
  }

  #tel {
    font-family: 'Quicksand', sans-serif;
    font-size: .6em;

  }

  th {
    padding: 1em;
  }

  tr {
    margin-left: .2em;
  }

  .fa-phone {
    position: relative;
    right: 3.5em;
  }

  .fa-whatsapp {
    position: relative;
    top: 1em;
    right: 4.5em;
  }

  #redes {
    font-size: 1.4em;
  }

  #telefono-icono1 {
    position: relative;
    right: 0em;
  }

  #telefono-icono2 {
    position: relative;
    right: -3em;
  }

  #whats-icono1 {
    position: relative;
    right: -2em;
    padding: 0;
    top: -1.5em;
  }

  #whats-icono2 {
    position: relative;
    right: -5em;
    padding: 0;
    top: -1.5em;
  }

  /*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/
  .contact1-pic {
    height: 35em;
    width: 100%
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    font-family: 'Quicksand', sans-serif;
  }

  /*---------------------------------------------*/
  a {
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
  }

  a:focus {
    outline: none !important;
  }

  a:hover {
    text-decoration: none;
    color: #57b846;
  }

  /*---------------------------------------------*/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  p {
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
  }

  ul,
  li {
    margin: 0px;
    list-style-type: none;
  }


  /*---------------------------------------------*/
  input {
    outline: none;
    border: none;
  }

  textarea {
    outline: none;
    border: none;
  }

  textarea:focus,
  input:focus {
    border-color: transparent !important;
  }

  input::-webkit-input-placeholder {
    color: #999999;
  }

  input:-moz-placeholder {
    color: #999999;
  }

  input::-moz-placeholder {
    color: #999999;
  }

  input:-ms-input-placeholder {
    color: #999999;
  }

  textarea::-webkit-input-placeholder {
    color: #999999;
  }

  textarea:-moz-placeholder {
    color: #999999;
  }

  textarea::-moz-placeholder {
    color: #999999;
  }

  textarea:-ms-input-placeholder {
    color: #999999;
  }

  /*---------------------------------------------*/
  button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  iframe {
    border: none !important;
  }




  /*//////////////////////////////////////////////////////////////////
[ Contact 1 ]*/

  .contact1 {
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
    position: fixed;
    top: 3.72em

  }

  .container-contact1 {
    width: 1163px;
    background: #fff;
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
    padding: 90px 130px 88px 148px;
    position: relative;
    top: -2em;
  }

  /*------------------------------------------------------------------
[  ]*/
  .contact1-pic {
    width: 400px;
  }

  .contact1-pic img {
    max-width: 100%;
  }


  /*------------------------------------------------------------------
[  ]*/
  .contact1-form {
    width: 390px;
    height: 100%;
  }

  .contact1-form-title {
    display: block;
    font-size: 24px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 44px;
  }

  input.input1 {
    height: 50px;
    border-radius: 25px;
    padding: 0 30px;
  }

  input.input1+.shadow-input1 {
    border-radius: 25px;
  }

  textarea.input1 {
    min-height: 150px;
    border-radius: 25px;
    padding: 12px 30px;
  }

  textarea.input1+.shadow-input1 {
    border-radius: 25px;
  }

  /*---------------------------------------------*/
  .wrap-input1 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 20px;
  }

  .input1 {
    display: block;
    width: 100%;
    background: #e6e6e6;
    font-size: 15px;
    line-height: 1.5;
    color: #666666;
  }

  .shadow-input1 {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 0px;
    color: rgba(87, 184, 70, 0.5);
  }

  .input1:focus+.shadow-input1 {
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
  }

  @-webkit-keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 80px 30px;
      opacity: 0;
    }
  }

  @keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 80px 30px;
      opacity: 0;
    }
  }

  /*---------------------------------------------*/
  .container-contact1-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact1-form-btn {
    min-width: 193px;
    height: 50px;
    border-radius: 25px;
    background: #57b846;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .contact1-form-btn i {
    margin-left: 7px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .contact1-form-btn:hover {
    background: #333333;
  }

  .contact1-form-btn:hover i {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }




  /*------------------------------------------------------------------
[ Responsive ]*/

  @media (max-width: 1200px) {
    .contact1-pic {
      width: 33.5%;
    }

    .contact1-form {
      width: 44%;
    }
  }

  @media (max-width: 992px) {
    .container-contact1 {
      padding: 90px 80px 88px 90px;
    }

    .contact1-pic {
      width: 35%;
    }

    .contact1-form {
      width: 55%;
    }
  }

  @media (max-width: 768px) {
    .container-contact1 {
      padding: 90px 80px 88px 80px;
    }

    .contact1-pic {
      display: none;
    }

    .contact1-form {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .container-contact1 {
      padding: 90px 15px 88px 15px;
    }
  }


  /*------------------------------------------------------------------
[ Alert validate ]*/

  .validate-input {
    position: relative;
  }

  .alert-validate::before {
    content: attr(data-validate);
    position: absolute;
    max-width: 70%;
    background-color: 
    white;
    border: 1px solid #c80000;
    border-radius: 13px;
    padding: 4px 25px 4px 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 8px;
    pointer-events: none;
    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;

    visibility: hidden;
    opacity: 0;

    -webkit-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    -moz-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  .alert-validate::after {
    content: "\f06a";
    display: block;
    position: absolute;
    color: #c80000;
    font-size: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 13px;
  }

  .alert-validate:hover:before {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 992px) {
    .alert-validate::before {
      visibility: visible;
      opacity: 1;
    }
  }

</style>
