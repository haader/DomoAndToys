function traerHtml(btn,contenedor,archivo){

let button=document.getElementById(btn);
let divContenedor=document.getElementById(contenedor);

button.addEventListener("click",obtenerHTML, true);

function obtenerHTML(e){

    var xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){

        if (xhr.status === 200){
            divContenedor.innerHTML = xhr.responseText;

        }
    }
    xhr.open("get",archivo,true);
    xhr.send();



}


};






/*


                $(document).ready(function(){

                $('#inicio').click(function(){
                    
                    $('#contenedor').load("./secciones/inicio.html");

                });
                });
                
                $(document).ready(function(){

                $('#casitas').click(function(){
                    
                    $('#contenedor').load("./secciones/casitas.html");

                });
                });


                $(document).ready(function(){

                $('#pistas').click(function(){
                    
                    $('#contenedor').load("./secciones/pistas.html");

                });
                });


                $(document).ready(function(){

                $('#carteles').click(function(){
                    
                    $('#contenedor').load("./secciones/carteles.html");

                });
                });

                $(document).ready(function(){

                $('#juguetes').click(function(){
                    
                    $('#contenedor').load("./secciones/juguetes.html");

                });
                });

                
                $(document).ready(function(){

                $('#domos').click(function(){
                    
                    $('#contenedor').load("./secciones/domos.html");

                });
                });

                $(document).ready(function(){

                $('#mas').click(function(){
                    
                    $('#contenedor').load("./secciones/mas.html");

                });
                });

                $(document).ready(function(){

                $('#howbuy').click(function(){
                    
                    $('#contenedor').load("./secciones/howbuy.html");

                });
                });

                $(document).ready(function(){

                $('#about').click(function(){
                    
                    $('#contenedor').load("./secciones/about.html");

                });
                });


*/