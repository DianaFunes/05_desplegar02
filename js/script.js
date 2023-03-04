//-------------------------------------------------------------------------------------------------
    /*Cambiar fondo de Header y Body
    function mostrar() {
        document.getElementById("caja01").style.display = "block";
    }

    function ocultar() {
        document.getElementById("caja01").style.display = "none";
    }
    function mostrar_ocultar(){
        var caja01 = document.getElementById("caja01");
            if(caja01.style.display == "none"){
                mostrar();
                document.getElementById("boton").value = "ocultar";
            }else{
                ocultar().getElementById("boton").value = "mostrar";
            }
    }*/

    function mostrarTexto(id) {
        var texto = document.getElementById(id);
        if (texto.style.display === "none") {
          texto.style.display = "block";
        } else {
          texto.style.display = "none";
        }
      }