var no=document.querySelector(".no > span");
var quote=document.querySelector(".quote > span");
var dice=document.querySelector(".dice");

fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((newres) => {
        no.innerHTML=newres.slip.id;
        return newres;
    })
    .then((another) => quote.innerHTML=another.slip.advice)

dice.addEventListener("click", function() {
    location.reload();
})

    

