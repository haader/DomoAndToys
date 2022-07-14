


//COCINAS
let max1=7;
let index1=0;

for (let index = 0; index < max1; index++) {

    document.getElementById("carrucel1").innerHTML+='<img class="imagenes" id="img1'+index+'" src="./IMAGENES/juguetes/cocinas/cosina ('+index+').jpeg" onclick="selectCosinas('+index+')" >';
    
    }
    
//seccion JUGUETES
function selectCosinas(img){
    
    document.getElementById("img1"+index1).style.transform = '';
    
    document.getElementById("imgVer1").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/cocinas/cosina ('+img+').jpeg" alt="" >';
    index1=img;
    document.getElementById("img1"+index1).style.transform = "translate(0,-10px)"
    return(index1);
    };


                        


                        function btnPrev1(){
                            if(index1>0){
                                document.getElementById("img1"+index1).style.transform = '';
                                index1--;
                                document.getElementById("imgVer1").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/cocinas/cosina ('+index1+').jpeg" alt="" >';
                                document.getElementById("img1"+index1).style.transform = "translate(0,-10px)"
                            }else{
                                
                            }
                            return index1;
                            
                        }
                        
                        function btnNext1(){
                            document.getElementById("img1"+index1).style.transform = '';
                            index1++;
                            if(index1<max1){
                                
                                document.getElementById("imgVer1").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/cocinas/cosina ('+index1+').jpeg" alt="" >';
                                document.getElementById("img1"+index1).style.transform = "translate(0,-10px)"
    
                            }else{
                                index1--;
                                document.getElementById("img1"+index1).style.transform = "translate(0,-10px)"
                            }
                            return index1;
                        }
                        
                     








    
    
    
    
 
//Camion
let max2=3;
let index2=0;

for (let index = 0; index < max2; index++) {

    document.getElementById("carrucel2").innerHTML+='<img class="imagenes" id="img2'+index+'" src="./IMAGENES/juguetes/camion ('+index+').jpeg" onclick="selectCamion('+index+')" >';
    
    }
    
//seccion JUGUETES
function selectCamion(img){
    
    document.getElementById("img2"+index2).style.transform = '';
    
    document.getElementById("imgVer2").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/camion ('+img+').jpeg" alt="" >';
    index2=img;
    document.getElementById("img2"+index2).style.transform = "translate(0,-10px)"
    return(index2);
    };

                        function btnPrev2(){
                            if(index2>0){
                                document.getElementById("img2"+index2).style.transform = '';
                                index2--;
                                document.getElementById("imgVer2").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/camion ('+index2+').jpeg" alt="" >';
                                document.getElementById("img2"+index2).style.transform = "translate(0,-10px)"
                            }else{
                                
                            }
                            return index2;
                            
                        }
                        
                        function btnNext2(){
                            document.getElementById("img2"+index2).style.transform = '';
                            index2++;
                            if(index2<max2){
                                
                                document.getElementById("imgVer2").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/camion ('+index2+').jpeg" alt="" >';
                                document.getElementById("img2"+index2).style.transform = "translate(0,-10px)"
    
                            }else{
                                index2--;
                                document.getElementById("img2"+index2).style.transform = "translate(0,-10px)"
                            }
                            return index2;
                        }
                        
                     




















    //AUTO
    
//Auto
let max3=2;
let index3=0;

for (let index = 0; index < max3; index++) {

    document.getElementById("carrucel3").innerHTML+='<img class="imagenes" id="img3'+index+'" src="./IMAGENES/juguetes/auto ('+index+').jpeg" onclick="selectAuto('+index+')" >';
    
    }
    
//seccion JUGUETES
function selectAuto(img){
    
    document.getElementById("img3"+index3).style.transform = '';
    
    document.getElementById("imgVer3").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/auto ('+img+').jpeg" alt="" >';
    index3=img;
    document.getElementById("img3"+index3).style.transform = "translate(0,-10px)"
    return(index3);
    };


                        


                        function btnPrev3(){
                            if(index3>0){
                                document.getElementById("img3"+index3).style.transform = '';
                                index3--;
                                document.getElementById("imgVer3").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/auto ('+index3+').jpeg" alt="" >';
                                document.getElementById("img3"+index3).style.transform = "translate(0,-10px)"
                            }else{
                                
                            }
                            return index3;
                            
                        }
                        
                        function btnNext3(){
                            document.getElementById("img3"+index3).style.transform = '';
                            index3++;
                            if(index3<max3){
                                
                                document.getElementById("imgVer3").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/auto ('+index3+').jpeg" alt="" >';
                                document.getElementById("img3"+index3).style.transform = "translate(0,-10px)"
    
                            }else{
                                index3--;
                                document.getElementById("img3"+index3).style.transform = "translate(0,-10px)"
                            }
                            return index3;
                        }
                        
                     













   //Cuna
let max4=4;
let index4=0;

for (let index = 0; index < max4; index++) {

    document.getElementById("carrucel4").innerHTML+='<img class="imagenes" id="img4'+index+'" src="./IMAGENES/juguetes/cuna ('+index+').jpeg" onclick="selectCuna('+index+')" >';
    
    }
    
//seccion JUGUETES
function selectCuna(img){
    
    document.getElementById("img4"+index4).style.transform = '';
    
    document.getElementById("imgVer4").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/cuna ('+img+').jpeg" alt="" >';
    index4=img;
    document.getElementById("img4"+index4).style.transform = "translate(0,-10px)"
    return(index4);
    };


                        


                        function btnPrev4(){
                            if(index4>0){
                                document.getElementById("img4"+index4).style.transform = '';
                                index4--;
                                document.getElementById("imgVer4").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/cuna ('+index4+').jpeg" alt="" >';
                                document.getElementById("img4"+index4).style.transform = "translate(0,-10px)"
                            }else{
                                
                            }
                            return index4;
                            
                        }
                        
                        function btnNext4(){
                            document.getElementById("img4"+index4).style.transform = '';
                            index4++;
                            if(index4<max4){
                                
                                document.getElementById("imgVer4").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/cuna ('+index4+').jpeg" alt="" >';
                                document.getElementById("img4"+index4).style.transform = "translate(0,-10px)"
    
                            }else{
                                index4--;
                                document.getElementById("img4"+index4).style.transform = "translate(0,-10px)"
                            }
                            return index4;
                        }
                        
                     

















    

//Caballo
let max5=2;
let index5=0;

for (let index = 0; index < max5; index++) {

    document.getElementById("carrucel5").innerHTML+='<img class="imagenes" id="img5'+index+'" src="./IMAGENES/juguetes/caballo ('+index+').jpeg" onclick="selectCaballo('+index+')" >';
    
    }   
    
//seccion JUGUETES
function selectCaballo(img){
    
    document.getElementById("img5"+index5).style.transform = '';
    
    document.getElementById("imgVer5").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/caballo ('+img+').jpeg" alt="" >';
    index5=img;
    document.getElementById("img5"+index5).style.transform = "translate(0,-10px)"
    return(index5);
    };


                        


                        function btnPrev5(){
                            if(index5>0){
                                document.getElementById("img5"+index5).style.transform = '';
                                index5--;
                                document.getElementById("imgVer5").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/caballo ('+index5+').jpeg" alt="" >';
                                document.getElementById("img5"+index5).style.transform = "translate(0,-10px)"
                            }else{
                                
                            }
                            return index5;
                            
                        }
                        
                        function btnNext5(){
                            document.getElementById("img5"+index5).style.transform = '';
                            index5++;
                            if(index5<max5){
                                
                                document.getElementById("imgVer5").innerHTML='<img class="cardimg1" src="./IMAGENES/juguetes/caballo ('+index5+').jpeg" alt="" >';
                                document.getElementById("img5"+index5).style.transform = "translate(0,-10px)"
    
                            }else{
                                index5--;
                                document.getElementById("img5"+index5).style.transform = "translate(0,-10px)"
                            }
                            return index5;
                        }
                        
                     
























   
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
                        
                     