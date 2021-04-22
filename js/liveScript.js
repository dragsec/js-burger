/* inizio evento*/
var buttonPrice = document.getElementById("button");

buttonPrice.addEventListener("click", function (){

    /* prezzo dell'hamburger base è 1 dollaro */
    var totPrezzo = 1;

    /* setto prezzo in base al prodotto selezionato */
    var nameBurger = ["hamburger", "cheeseburger", "superburger"]

    var userBurger = document.getElementById("name");

    for (var i = 0; i < nameBurger.length; i++){

        var nameLocal = nameBurger[i];

        if (nameLocal === userBurger.value){
            totPrezzo += i ;
        }
    }

    

    document.getElementById("price").innerHTML = totPrezzo ;
})