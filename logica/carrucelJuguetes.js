
let juguetes=`[
    {
        "title":"Cocinas",
        "ruta":"./IMAGENES/juguetes/cocinas/cosina",
        "max":7,
        "descripcion":"JuguetesDescripcion.txt",
        "precio":4000
    },
    {
        "title":"Camion",
        "ruta":"./IMAGENES/juguetes/camion",
        "max":3,
        "descripcion":"JuguetesDescripcion.txt",
        "precio":2000
    },
    {
        "title":"Autos",
        "ruta":"./IMAGENES/juguetes/auto",
        "max":2,
        "descripcion":"JuguetesDescripcion.txt",
        "precio":1000
    },
    {
        "title":"Cuna",
        "ruta":"./IMAGENES/juguetes/cuna",
        "max":4,
        "descripcion":"JuguetesDescripcion.txt",
        "precio":3000
    },
    {
        "title":"Caballo",
        "ruta":"./IMAGENES/juguetes/caballo",
        "max":2,
        "descripcion":"JuguetesDescripcion.txt",
        "precio":7000
    },
    {
        "title":"Martillo",
        "ruta":"./IMAGENES/juguetes/martillo",
        "max":2,
        "descripcion":"JuguetesDescripcion.txt",
        "precio":2000
    }

]`;

//creamos las variables globlales!
let imgSelect=[0,0,0,0,0,0];


let myJuguetes=JSON.parse(juguetes);

function CargarJuguetes(){
    console.log("los juguetes son "+myJuguetes);


    
myJuguetes.forEach((element,index) => {

    //IMPORTANTE anidamos bucles
    
    //pintamos el html
    document.getElementById("contenedor").innerHTML+=`
    
    <div class="itemSeccion" id="itemSeccion" >
    
    <h3 class="title">${myJuguetes[index].title}</h3>        
        <div class="all">
    
            <div class="visor">
    
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

    
}


//creamos las funciones

    
//cuando seleccionamos una imagen del carrucel

function selectJ(id,img){
    
    
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
                        
      