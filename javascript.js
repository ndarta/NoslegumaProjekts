function radio(){
    if (document.getElementById("ja").checked) {
        document.getElementById("vai").innerHTML =
        `Vari doties uz <a href="spele.html" class="spele">Spēli</a>`;
        
    } else if (document.getElementById("ne").checked) {
        document.getElementById("vai").innerHTML =
        `Izlasi vēlreiz teoriju un tad dodies uz <a href="tests.html" class="tests">testu</a>!`;
    }
}
