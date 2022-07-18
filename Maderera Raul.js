
//....................................CODIOGOS MENU................................


var clic=1;

function funtionmenu(){
if (clic==1){
    document.getElementById("iconmenu").style.color="#212529";
    document.getElementById("banerselección1").style.display="none";
    document.getElementById("banerselección2").style.display="none";
    document.getElementById("header").style.height="3rem";
    document.getElementById("maderanav").style.height="3rem";
    document.getElementById("container-fluit").style.marginTop="3rem";

    
    clic = clic + 1;
}else{

    document.getElementById("iconmenu").style.color="white";
    document.getElementById("banerselección1").style.display="inline";
    document.getElementById("banerselección2").style.display="inline";
    document.getElementById("header").style.height="7rem";
    document.getElementById("maderanav").style.height="7rem";
    document.getElementById("container-fluit").style.marginTop="8rem";

    
    clic = 1;
}

}
/*
window.onresize = function(){

    anchoVentana = window.innerWidth;
      //console.log(anchoVentana)
    */
  
  