function parbauditatbildes() {

    let pareizasAtbildes = [1, 1, 1, 1, 1, 1];

    let lietotajaAtbildes = [];
    let punkti = 0;

    for (let i = 1; i <= 6; i++) {
        let atbildes = document.getElementsByName("jaut" + i);
        let izvele = -1;

        for (let atbilde of atbildes) {
            if (atbilde.checked) {
                izvele = Number(atbilde.value);
            }
        }

        lietotajaAtbildes.push(izvele);
    }

    for (let i = 0; i < pareizasAtbildes.length; i++) {
        if (lietotajaAtbildes[i] === pareizasAtbildes[i]) {
            punkti++;
        }
    }

    document.getElementById("result").textContent =
        "Tavs rezultāts: " + punkti + " no 6";
    document.getElementById("navButtons").style.display = "flex";
}