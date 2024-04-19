let getOldDev = () => {
    var currentYear = new Date().getFullYear();
    var yearBorn= 2006;
    let oldDev = document.querySelector("#old-dev");
    oldDev.innerHTML = (currentYear - yearBorn);
}

getOldDev();