
    var obtenerJSON = new XMLHttpRequest();
    obtenerJSON.onreadystatechange = function() {
        if (obtenerJSON.readyState == 4 && obtenerJSON.status == 200) {
            JSONtext= obtenerJSON.responseText;
            
        }
    }
    obtenerJSON.open("GET", "descripcion.js", false);
    obtenerJSON.send();

    myJuguetes=JSON.parse(JSONtext);

    console.log(myJuguetes);
    
    
    //creamos las variables globlales!



  function CargarJuguetes(){


//recorremos el OBJETO myjuguetes                
    myJuguetes.forEach((element,index) => {

        //IMPORTANTE anidamos bucles
        
        //pintamos el html
        document.getElementById("contenedor").innerHTML+=`
        
        <div class="itemSeccion" id="itemSeccion" >
        
        <h3 class="title" id="${myJuguetes[index].name}">${myJuguetes[index].title}</h3>        
            <div class="all">
        
                <div class="visor" >
        
                    <div class="containerFigure">
        
                        <div class="btnImg" id="btnPrev" onclick="btnPrevJ(${index})">
                            <
                        </div>
                        <figure class="imgVer"  id="imgVer${index}">
                            <img class="cardimg1" src="${myJuguetes[index].ruta} (0).jpeg"
                            alt="" >
                            
                        </figure>
                        <div class="btnImg" id="btnNext" onclick="btnNextJ(${index})">
                            >
                        </div>
        
                    </div>
                    <div class="carrucel" id="carrucel(${index})">
        
        
                    </div>
                
        
                </div>
        
                        <div class="text"> 
                                <h4>Descripción</h4>
                            <text>
                            ${myJuguetes[index].descripcion}
                            </text>
                            <text>
                                Precio: $ ${myJuguetes[index].precio}
                            </text>
        
                            <button class="btnComprar">Comprar</button>
                
                        </div>
        
        
            </div>
        
        
        
        
        </div>
        
        
        `;
        //Pintamos el carrucel
            
            for (let i = 0; i < myJuguetes[index].max; i++) {

                document.getElementById("carrucel("+index+")").innerHTML+=`<img class="imagenes" id="img${index}(${i})" src="${myJuguetes[index].ruta} (${i}).jpeg" onclick="selectJ(${index},${i})" >`;
                
                }



        });

        //creamos un btn para probar
        document.getElementById("contenedor").innerHTML+=`<a href= "javascript: moverA(cuna);"><button id="ab">PROBANDO</button></a>`


    }



let imgSelect=[0,0,0,0,0,0];
//creamos las funciones

    
//cuando seleccionamos una imagen del carrucel

async function selectJ(id,img){
 
    
    document.getElementById("img"+id+"("+imgSelect[id]+")").style.transform = '';

    document.getElementById("imgVer"+id).innerHTML=`<img class="cardimg1" src="${myJuguetes[id].ruta} (${img}).jpeg" alt="" >`;
    
    document.getElementById("img"+id+"("+img+")").style.transform = "translate(0,-10px)"

    imgSelect[id]=img;
    
    };


                        


        function btnPrevJ(id){
            document.getElementById("img"+id+"("+imgSelect[id]+")").style.transform = '';
            imgSelect[id]--;
            if((imgSelect[id])>=0){
            
                
            
            document.getElementById("imgVer"+id).innerHTML=`<img class="cardimg1" src="${myJuguetes[id].ruta} (${imgSelect[id]}).jpeg" alt="" >`;
            document.getElementById("img"+id+"("+imgSelect[id]+")").style.transform = "translate(0,-10px)"
            
            }else{
                imgSelect[id]=0;
                document.getElementById("img"+id+"("+imgSelect[id]+")").style.transform = "translate(0,-10px)";
                
            }
            
            
        }
        
        function btnNextJ(id){
            
            document.getElementById("img"+id+"("+imgSelect[id]+")").style.transform = '';
            imgSelect[id]++;
            
            if(imgSelect[id]<myJuguetes[id].max){
                
                document.getElementById("imgVer"+id).innerHTML=`<img class="cardimg1" src="${myJuguetes[id].ruta} (${imgSelect[id]}).jpeg" alt="" >`;
                document.getElementById("img"+id+"("+imgSelect[id]+")").style.transform = "translate(0,-10px)"

            }else{
                imgSelect[id]--;
                document.getElementById("img"+id+"("+imgSelect[id]+")").style.transform = "translate(0,-10px)"
            }
            
        }
        
