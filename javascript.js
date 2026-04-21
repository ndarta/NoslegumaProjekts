function radio(){
    if(document.getElementById("ja").checked) {
       document.getElementById("vai").innerHTML =  `Vari doties uz Spēli`
    } else if ( document.getElementById("ne").checked ) {
       document.getElementById("vai").innerHTML =  `Izlasi vēlreiz teoriju1 un tad vari doties uz spēli`
        
    }
}
