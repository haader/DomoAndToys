
//Martillo
let max6=2;
let index6=0;

for (let index = 0; index < max6; index++) {

    document.getElementById("carrucel6").innerHTML+='<img class="imagenes" id="img6'+index+'" src="./IMAGENES/juguetes/martillo ('+index+').jpeg" onclick="selectMartillo('+index+')" >';
    
    }   
    
//seccion JUGUETES
function selectMartillo(img){
    
    document.getElementById("img6"+index6).style.transform = '';
    
    document.getElementById("imgVer6").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/martillo ('+img+').jpeg" alt="" >';
    index6=img;
    document.getElementById("img6"+index6).style.transform = "translate(0,-10px)"
    return(index6);
    };


                        


                        function btnPrev6(){
                            if(index6>0){
                                document.getElementById("img6"+index6).style.transform = '';
                                index6--;
                                document.getElementById("imgVer6").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/martillo ('+index6+').jpeg" alt="" >';
                                document.getElementById("img6"+index6).style.transform = "translate(0,-10px)"
                            }else{
                                
                            }
                            return index6;
                            
                        }
                        
                        function btnNext6(){
                            document.getElementById("img6"+index6).style.transform = '';
                            index6++;
                            if(index6<max6){
                                
                                document.getElementById("imgVer6").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/martillo ('+index6+').jpeg" alt="" >';
                                document.getElementById("img6"+index6).style.transform = "translate(0,-10px)"
    
                            }else{
                                index6--;
                                document.getElementById("img6"+index6).style.transform = "translate(0,-10px)"
                            }
                            return index6;
                        }
                        
                     