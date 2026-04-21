function radio(){
    if(document.getElementById("ja").checked) {
       document.getElementById("vai").innerHTML =  `Vari doties uz Spēli`
    } else if ( document.getElementById("ne").checked ) {
       document.getElementById("vai").innerHTML =  `Žēl, izlasi vēlreiz teoriju un izpildi testu`
        
    }
}
