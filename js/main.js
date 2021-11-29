let any = document.getElementById("opis");
let button = document.querySelector('button');
button.onclick = function () {
    any.textContent = ('Nauka JS');
    return any
}
console.log(any)