const fromulario = document.querySelector("#formulario");

//evento
fromulario.addEventListener("submit",validarformulario)

//funciones
function validarformulario(e){
    
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const telefono = document.querySelector("#telefono").value
    const correo = document.querySelector("#correo").value
    const nacionalidad = document.querySelector("#nacionalidad").value
    const radio = document.querySelector("#radio").value
    const uno = document.querySelector("#uno").value
    const dos = document.querySelector("#dos").value
    const tres = document.querySelector("#tres").value
    const cuatro = document.querySelector("#cuatro").value
    const cinco = document.querySelector("#cinco").value
    const habil1 = document.querySelector("#habil1").value
    const habil2 = document.querySelector("#habil2").value
    const habil3= document.querySelector("#habil3").value
    const habil4 = document.querySelector("#habil4").value
    const habil5 = document.querySelector("#habil5").value
    const nacimiento = document.querySelector("#nacimiento").value
    const time = document.querySelector("#time").value
    const perfil = document.querySelector("#perfil").value
    const lengua = document.querySelector("#lengua").value
    const ocu1 = document.querySelector("#ocu1").value
    const ocu2 = document.querySelector("#ocu2").value
    const ocu3 = document.querySelector("#ocu3").value




    
    // imprecion sin espacios
    //const respuesta = document.getElementById("respuesta");
   // respuesta.textContent = `NOMBRE :${nombre } ${telefono}-${correo}${nacionalidad}
    //-${radio}-${uno}-${dos}-${tres}-${cuatro}-${cinco}-${habil1}-${habil2}
    //-${habil3}-${habil4}-${habil5}-${nacimiento}-${time}-${perfil}-${lengua}-${ocu1}-${ocu2}-${ocu3}`   
    
    document.write(`"PAGINA WEB DINAMICA" <br> <br> NOMBRE :${ nombre } <br> <br>
    FELEFONO : ${telefono}<br> <br> CORREO : ${correo} <br> <br> NACIONALIDAD :${nacionalidad} <br><br>
    IDIOMA : ${radio} <br><br> APTITUDES : <br> -->${uno} <br>--> ${dos}<br> -->${tres}<br>
    --> ${cuatro}<br> --> ${cinco} <br> <br> HABILIDADES : <br> --> ${habil1} <br> --> ${habil2}<br>
    --> ${habil3}<br> --> ${habil4} <br> --> ${habil5} <br> <br> NACIMIENTO :  ${nacimiento} <br> <br>
    HORA : ${time} <br> <br>PERFIL :${perfil} <br> <br> LENGUAJES DE PROGRAMACION :${lengua} <br> <br>
    OCUPACION : <br> -->${ocu1}<br> -->${ocu2}<br> -->${ocu3}` )
    
}


