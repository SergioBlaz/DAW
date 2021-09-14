"use strict";
var MasaJuan = 50;
var MasaMarcos = 85;
var AlturaJuan = 1.70;
var AlturaMarcos = 1.65;
var ImcJuan = MasaJuan / (AlturaJuan*AlturaJuan);
var ImcMarcos = MasaMarcos / (AlturaMarcos*AlturaMarcos);
var ImcMayor = false;
if(ImcMarcos<ImcJuan){
    ImcMayor=true;
}
console.log("¿Tiene Marcos un IMC mayor que el de Juan?: "+ImcMayor);