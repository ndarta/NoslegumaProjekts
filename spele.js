let vienumi = document.querySelectorAll(".vienums");
let miskastes = document.querySelectorAll(".miskaste");
let rezultats = document.getElementById("rezultats");

let pareizi = 0;
let kopskaits = vienumi.length;

let laiks = 0;
let taimeris = setInterval(() => {
    laiks++;
    document.getElementById("laiks").textContent = laiks;
}, 1000);

vienumi.forEach(vienums => {
    vienums.addEventListener("dragstart", vilkšanasSakums);
});

function vilkšanasSakums(e) {
    e.dataTransfer.setData("veids", e.target.dataset.veids);
    e.dataTransfer.setData("id", e.target.id); // 🔥 labots
}

miskastes.forEach(miskaste => {

    miskaste.addEventListener("dragover", e => e.preventDefault());

    miskaste.addEventListener("drop", function(e) {
        let veids = e.dataTransfer.getData("veids");

        let vilktais = document.getElementById(e.dataTransfer.getData("id")); // 🔥 labots

        if (vilktais && veids === this.dataset.veids) {
            pareizi++;
            vilktais.remove();
        }

        if (pareizi === kopskaits) {
            clearInterval(taimeris);
            rezultats.textContent = "Tu uzvarēji " + laiks + " sekundēs!";
        }
    });
});
