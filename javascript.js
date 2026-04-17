function radio(izvele) {

    if (izvele === "ja") {
        document.getElementById("rezultats").innerHTML =
        'Malacis! Dodies uz <a href="spele.html" class="saite spele">spēli</a>!';
        
    } 
    else if (izvele === "ne") {
        document.getElementById("rezultats").innerHTML =
        'Izlasi vēlreiz teoriju un tad dodies uz <a href="index2.html" class="saite tests">testu</a>!';
    }
}
